<template>
  <div class="card">
    <TabMenu v-model:activeIndex="active" :model="items">
        <template #item="{ label, item, props }">
            <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                <a :href="routerProps.href" v-bind="props.action" @click="($event)">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                </a>
            </router-link>
        </template>
    </TabMenu>
    <router-view />
</div>
  <div class="side">
    <p-button v-if="!user" @click="googleRegister" label="Войти" icon="pi pi-sign-in" />
    <p-button v-else @click="googleLogout" label="Выйти" icon="pi pi-sign-out" />
  </div>
</template>

<script setup lang="ts">
import PButton from 'primevue/button'
import { useUser } from '@/composables/useUser'
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

import TabMenu from 'primevue/tabmenu';


const router = useRouter();
const route = useRoute();

const active = ref(0);
const items = ref([
    {
        label: 'TeachMe',
        icon: 'pi pi-fw pi-home',
        route: '/'
    },
    {
        label: 'Университеты',
        icon: 'pi pi-fw pi-calendar',
        route: '/univers'
    },
    {
        label: 'Факты о Южной Корее',
        icon: 'pi pi-fw pi-pencil',
        route: '/info'
    },
    {
        label: 'Обучения',
        icon: 'pi pi-fw pi-file',
        route: '/course'
    }
]);

onMounted(() => {
    active.value = items.value.findIndex((item) => route.path === router.resolve(item.route).path);
})

watch(
    route,
    () => {
        active.value = items.value.findIndex((item) => route.path === router.resolve(item.route).path);
    },
    { immediate: true }
);



const { user, googleRegister, googleLogout } = useUser()
</script>
import { useUser } from '@/composables/useUser.1';