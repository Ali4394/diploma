<template>
  <div class="card flex align-items-center justify-content-center">
    {{ content }}
    <Card style="width: 25em">
      <template #header>
        <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
      </template>
      <template #title>{{ contentList.name }}</template>
      <template #subtitle>{{ contentList.city }}</template>
      <template #content>
        <p class="m-0">{{ contentList.discription }}</p>
      </template>
      <template #footer>
        <Button icon="pi pi-check" label="Подробнее" />
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'
import { defineProps, onMounted } from 'vue'
import { useContent } from '@/composables/useContent'

const { contentList } = useContent()
const props = defineProps({
  content: {
    type: Object,
    required: true
  }
})

onMounted(() => {
  console.log(props)
})
</script>
