<!-- вызываешь функцию getAllContent -->
<!-- используешь contentList -->
<!-- передаешь пропсы в universityItem -->
<template>
  <div class="card">
    <section class="univers" v-for="content in getAllContent" :key="content">
      <UniversityItem :content="content" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import UniversityItem from '@/components/UniversityItem.vue'
import { useContent } from '@/composables/useContent'

const { getAllContent, getContentById } = useContent()

onMounted(async () => {
  await getAllContent()
})
</script>

<style scoped>
.univers {
  max-height: 300px;
}
</style>
