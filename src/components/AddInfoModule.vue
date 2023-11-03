<template>
  <div class="card flex justify-content-center">
    <Button
      v-if="user"
      label="Добавить Новость"
      icon="pi pi-external-link"
      @click="visible = true"
      class="Addbtn"
    />
    <Dialog v-model:visible="visible" modal header="Добавить Новость" :style="{ width: '50vw' }">
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
            <img class="input__file-icon" src="" alt="Выбрать файл" width="25" />
          </span>
          <span class="input__file-button-text"></span>
        </label>
      </form>
      <div class="p-field">
        <InputText placeholder="Название" v-model.text="newInfo.name" />

        <InputText placeholder="Описание" v-model.text="newInfo.discription" />
      </div>

      <Button label="Добавить" icon="pi pi-check" @click="addInfo" autofocus> </Button>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import { useInfo } from '@/composables/useInfo'
import Dropdown from 'primevue/dropdown'
import { useUser } from '@/composables/useUser'

const { user } = useUser()

const { newInfo, addContent, uploadImage, createContent } = useInfo()

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
</script>

<style scoped>
.Addbtn {
  margin-top: 30%;
  margin-left: 40%;
  z-index: 6;
  position: fixed;
}
@media (max-width: 668px) {
  .Addbtn {
    margin-top: 120%;
    margin-left: 10%;
    z-index: 6;
  }
}
</style>
