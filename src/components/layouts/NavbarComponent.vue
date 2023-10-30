<template>
  <div class="card relative z-2">
    <Menubar :model="items" />
</div>
  <div class="side">
    <p-button v-if="!user" @click="googleRegister" label="Войти" icon="pi pi-sign-in" />
    <p-button v-else @click="googleLogout" label="Выйти" icon="pi pi-sign-out" />
  </div>
</template>

<script setup lang="ts">
import PButton from 'primevue/button'
import { useUser } from '@/composables/useUser'
import { ref } from "vue";
import Menubar from 'primevue/menubar';


const { user, googleRegister, googleLogout } = useUser()
const items = ref([
    {
        label: 'Главная страница',
        icon: 'pi pi-fw pi-file',
        items:''
    },
    {
        label: 'Университеты',
        icon: 'pi pi-fw pi-building',
        items: ""
    },
    {
        label: 'Курсы языка',
        icon: 'pi pi-fw pi-book',
        items: ''
    },
    {
        label: 'Интересное про Корею',
        icon: 'pi pi-fw pi-calendar',
        items: ''
    },
    {
        label: 'Админ',
        icon: 'pi pi-fw pi-user-edit',
        items: [
          {
                label: 'Войти',
                icon: 'pi pi-sign-in',
                click: () => googleRegister(),
                visible: !user
            },
            {
                label: 'Выйти',
                icon: 'pi pi-sign-out',
                click: () => googleLogout(),
                visible: user
            }
        ]
    }
]);
</script>
import { useUser } from '@/composables/useUser.1';
