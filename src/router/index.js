import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../components/GuestComponents/HomePage.vue"
import RestaurantIndex from "../components/GuestComponents/RestaurantIndex.vue";

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    linkExactActiveClass: '',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },

        {
            path: '/restaurants',
            name: 'restaurants',
            component: RestaurantIndex,
        },
    ],
});

export { router };