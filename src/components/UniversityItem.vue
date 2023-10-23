<template>
  <div class="card flex align-items-center justify-content-center">
    <Card style="width: 25em">
      <template #header>
        <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
      </template>
      <template #title>{{ newContent }} </template>
      <template #subtitle> Card subtitle </template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
          repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa
          ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer>
        <Button icon="pi pi-check" label="Подробнее" />
      </template>
    </Card>
  </div>
  <Button label="Добавит Универ" severity="success" />
</template>

<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'
import { defineProps, onMounted } from 'vue'

const props = defineProps({
  newContent: {
    type: Object,
    required: true
  }
})

onMounted(() => {
  console.log(props)
})
</script>
