<!-- вызываешь функцию getAllContent -->
<!-- используешь contentList -->
<!-- передаешь пропсы в universityItem -->
<template>
  <div >
    <div v-if="loading.contentList">Loading...</div>
    <div v-else >
      <div class="univers" v-for="contentItem in contentList" :key="contentItem.id">
        <div class="card">
          <img :src="contentItem.image" alt="Content Image" />
          <div class="card-body">
            <h3>{{ contentItem.name }}</h3>
            <p>{{ contentItem.city }}</p>
            <p>{{ contentItem.discription }}</p>
            <button @click="deleteContent(contentItem.id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useContent } from '@/composables/useContent'

export default defineComponent({
  name: 'ContentList',

  setup() {
    const { contentList, loading, getAllContent, deleteContent } = useContent()

    onMounted(() => {
      getAllContent()
    })

    return {
      contentList,
      loading,
      deleteContent
    }
  }




});
</script>

<style scoped>
.card {
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: inline-block;
}

.univers{
 max-width: 500px;
  display: flex;
  max-height: 500px;
  justify-content: space-between;
  align-content: stretch;
  flex-direction: row;
  flex-wrap: wrap;
}
.card img {
  max-width: 400px;
  height: auto;
  min-width: 400px;
}
</style>
