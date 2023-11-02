<!-- вызываешь функцию getAllContent -->
<!-- используешь infoList -->
<!-- передаешь пропсы в universityItem -->
<template>
  <div v-if="loading.infoList">Loading...</div>

  <div v-else class="info">
    <div v-for="infoItem in infoList" :key="infoItem.id">
      <div class="news">
        <div class="img"><img :src="infoItem.image" alt="Content Image" /></div>
        <div class="card-body">
          <h3>{{ infoItem.name }}</h3>
          <p>{{ infoItem.discription }}</p>
          <Button v-if="user" @click="deleteContent(infoItem.firebaseId)" label="Delete" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useInfo } from '@/composables/useInfo'
import Button from 'primevue/button'
import { useUser } from '@/composables/useUser'

const { user } = useUser()

const { infoList, loading, getAllContent, deleteContent } = useInfo()

onMounted(() => {
  getAllContent()
})
</script>

<style scoped>
.info {
  display: flex;
  max-height: 20px;
  justify-content: space-between;
  align-content: stretch;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 200px;
}

.news {
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #222e51;
  border-radius: 5px;
  display: flex;
  min-width: 500px;
  max-width: 1000px;
  height: auto;
}

.news img {
  max-width: 200px;
  height: auto;
  min-width: 200px;
  margin: 10px 10px;
}

@media (max-width: 656px) {
  .info {
    display: flex;
    max-height: 20px;
    justify-content: space-between;
    align-content: stretch;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 0 auto;
  }

  .news {
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #222e51;
    border-radius: 5px;
    display: inline-block;
    min-width: 50px;
    max-width: 300px;
    height: auto;
  }
}
</style>
