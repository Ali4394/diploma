<template>
<div class="side">
<Button v-if="!user" type="button" @click="googleRegister" label="Войти" icon="pi pi-user"/>

<Button v-else type="button"  @click="googleLogout" label="Выйти" icon="pi pi-sign-out"/>

</div>
</template>



<script setup lang="ts">
import Button from 'primevue/button'
import {useUser} from '@/composables/useUser'

const {user, googleRegister, googleLogout} = useUser()
</script>