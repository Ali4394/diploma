import { createRouter, createWebHistory } from "vue-router";
import HomeDemo from "../components/homeModule.vue";
import universModule from "../components/universModule.vue";
import infoModule from "../components/infoModule.vue";
import courseModule from "../components/courseModule.vue";


export const router = createRouter({
    history: createWebHistory(),
    routes: [ { path: "/", component: HomeDemo },
{ path: "/univers", component: universModule },
{ path: "/info", component: infoModule },
{ path: "/course", component: courseModule }
]
});

export default router
