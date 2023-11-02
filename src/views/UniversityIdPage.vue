<template>
  <div class="carInfo" v-if="contentList">
    <img class="img" :src="contentList.image" alt="univer" />
    <Card>
      <template #title>{{ contentList.name }} </template>
      <template #content>
        <p>Условии: {{ contentList.condition }}</p>
        <div class="card flex justify-content-center">
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

            <Button label="Добавить" icon="pi pi-check" @click="addInfo" autofocus> </Button>
          </Dialog>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { useClient } from '@/composables/useClients'
import { useContent } from '@/composables/useContent'
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Card from 'primevue/card'
import Button from 'primevue/button'
import { ref } from 'vue'
import { useUser } from '@/composables/useUser'
import InputText from 'primevue/inputtext'

const router = useRouter()

const visible = ref(false)

const { newClient, addContent, createContent } = useClient()

const { contentList, getContentById, loading, getAllContent } = useContent()

function toogleVisible() {
  visible.value = !visible.value
}

onMounted(async () => {
  const route = useRoute()
  const firebaseId = route.params.firebaseId

  if (firebaseId) {
    await getAllContent()
  }
})

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
.img {
  width: 400px;
  height: 300px;
}

.carInfo {
  width: 700px;
  height: 650px;
  border: 2px gray solid;

  margin: 0 auto;
}
</style>
