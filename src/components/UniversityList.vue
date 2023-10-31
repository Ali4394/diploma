<!-- вызываешь функцию getAllContent -->
<!-- используешь contentList -->
<!-- передаешь пропсы в universityItem -->
<template>
  <div>
    <div v-if="loading.contentList">Loading...</div>
    <div v-else class="univers">
      <div v-for="contentItem in contentList" :key="contentItem.id">
        <div class="card">
          <img :src="contentItem.image" alt="Content Image" />
          <div class="card-body">
            <h3>{{ contentItem.name }}</h3>
            <p>{{ contentItem.city }}</p>
            <p>{{ contentItem.discription }}</p>
            <Button v-if="user" @click="deleteContent(contentItem.firebaseId)" label="Delete" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useContent } from '@/composables/useContent'
import Button from 'primevue/button'
import { useUser } from '@/composables/useUser'

const { user } = useUser()

const { contentList, loading, getAllContent, deleteContent } = useContent()

onMounted(() => {
  getAllContent()
})
</script>

<style scoped>
.card {
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: inline-block;
  width: 460px;
  height: 500px;
}

.univers {
  display: flex;
  max-height: 460px;
  justify-content: space-around;
  align-content: stretch;
  flex-wrap: wrap;
  flex-direction: row;
}
.card img {
  max-width: 400px;
  height: auto;
  min-width: 400px;
  margin: 10px 10px;
}
</style>
