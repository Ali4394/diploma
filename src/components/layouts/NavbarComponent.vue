<template>
  <div class="side">
    <Button v-if="!user" @click="googleRegister" label="Войти" icon="pi pi-sign-in" />
    <Button v-else @click="googleLogout" label="Выйти" icon="pi pi-sign-out" />
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import { useUser } from '@/composables/useUser'

const { user, googleRegister, googleLogout } = useUser()
</script>
<!-- import { useUser } from '@/composables/useUser.1'; -->
