<!-- вызываешь функцию getAllContent -->
<!-- используешь contentList -->
<!-- передаешь пропсы в universityItem -->
<template>
  <div class="const">
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

            <Button
              label="Хочу поступить "
              icon="pi pi-external-link"
              @click="visible = true"
              class="Addbtn"
            />
            <Dialog
              v-model:visible="visible"
              modal
              header="напишите фио и номер телефона"
              :style="{ width: '50vw' }"
            >
              <div class="p-field">
                <InputText placeholder="ФИО" v-model.text="newClient.name" />

                <InputText placeholder="Номер тел" v-model.text="newClient.discription" />
              </div>

              <Button label="Отправить" icon="pi pi-check" @click="addInfo" autofocus> </Button>
            </Dialog>
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
import { useRouter, useRoute } from 'vue-router'
import InputText from 'primevue/inputtext'
import { useClient } from '@/composables/useClients'
import { ref } from 'vue'

const { user } = useUser()

const { contentList, loading, getAllContent, deleteContent } = useContent()
const { newClient, addContent, createContent } = useClient()

onMounted(() => {
  getAllContent()
})

const visible = ref(false)

function toogleVisible() {
  visible.value = !visible.value
}

async function addInfo() {
  await addContent()
  toogleVisible()
  createContent()
  setTimeout(function () {
    location.reload()
  }, 2000)
}
</script>

<style scoped>
.card {
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #222e51;
  border-radius: 5px;
  display: inline-block;
  width: 250px;
  height: 380px;
  margin-bottom: 30%;
}

.univers {
  display: flex;
  max-height: 20px;
  justify-content: space-between;
  align-content: stretch;
  flex-wrap: wrap;
  flex-direction: row;
}
.card img {
  max-width: 200px;
  height: auto;
  min-width: 200px;
  margin: 10px 10px;
}
</style>
