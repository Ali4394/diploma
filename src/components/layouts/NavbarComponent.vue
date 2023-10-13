<template>
<div class="side">
<p-button v-if="!user" type="button" @click="googleRegister" label="Войти" icon="pi pi-user"/>

<p-button v-else @click="googleLogout" label="Войти" icon="pi pi-sign-out"/>

</div>
</template>



<script>
import PButton from 'primevue/button'
import {useUser} from '@/composables/useUser'

const {user, googleRegister, googleLogout} = useUser()
</script>