import { createRouter, createWebHistory } from "vue-router";
import Index from '~/pages/index.vue'
import About from '~/pages/about.vue'

import NotFound from '~/pages/404.vue'
import Login from '~/pages/login.vue'



const routes = [
    {
        path: "/login",
        name: "login",
        component: Login

    },
    {
        path: '/',
        component: Index
    },
    {
        path: '/about',
        component: About
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound

    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router