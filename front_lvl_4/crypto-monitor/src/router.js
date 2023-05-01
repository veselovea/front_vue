import { createRouter, createWebHashHistory } from "vue-router";
import DevicesPage from "@/pages/DevicesPage.vue";
import MainPage from "@/pages/MainPage.vue";
import MyAccountPage from "@/pages/MyAccountPage.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: MainPage },
        { path: '/devices', component: DevicesPage },
        { path: '/me', component: MyAccountPage }
    ]
})