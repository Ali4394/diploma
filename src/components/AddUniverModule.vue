<template>
  <div class="card flex justify-content-center">
    <Button v-if="user" label="Добавить Универ" icon="pi pi-external-link" @click="visible = true" class="Addbtn" />
    <Dialog v-model:visible="visible" modal header="Добавить универ" :style="{ width: '50vw' }">
      <form class="input__wrapper form" enctype="multipart/form-data">
        <input
          id="inputfile"
          class="input inputfile"
          name="images"
          type="file"
          accept=".jpg, .png, .JFIF"
          @input="onUpload($event)"
        />
        <label for="inputfile" class="inputfile-button">
          <span class="input__file-icon-wrapper">
            <img
              class="input__file-icon"
              src="@/assets/uploadImage.png"
              alt="Выбрать файл"
              width="25"
            />
          </span>
          <span class="input__file-button-text"></span>
        </label>
      </form>
      <div class="p-field">
        <InputText placeholder="Название Универа" v-model.text="newContent.name" />

        <div class="p-field">
          <label for="city">Город</label>
          <Dropdown
            id="city"
            v-model="newContent.city"
            editable
            :options="korea"
            option-label="city"
            option-value="city"
            placeholder="Город"
          />
        </div>
        <InputText placeholder="Описание" v-model.text="newContent.discription" />
      </div>

      <!-- <InputText id="travel" v-model="newContent.travel" /> -->
      <Button label="Добавить" icon="pi pi-check" @click="addInfo" autofocus> </Button>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import { useContent } from '@/composables/useContent'
import Dropdown from 'primevue/dropdown'
import { useUser } from '@/composables/useUser'

const { user } = useUser()

const { newContent, addContent, uploadImage, createContent } = useContent()

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

async function onUpload(e: any) {
  const image = e.target.files[0]
  await uploadImage(image)
}

const korea = [
  { city: 'Seoul' },
  { city: 'Pusan' },
  { city: 'Deagu' },
  { city: 'Daejon' },
  { city: 'Kengju' },
  { city: 'Seajon' }
]
</script>

<style scoped></style>
