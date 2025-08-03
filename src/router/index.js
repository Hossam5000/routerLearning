// imports
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import CarView from "@/views/CarView.vue";
import ContactView from "@/views/ContactView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

// cons & vars
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomeView
        },
        {
            path: "/about",
            name: "About",
            component: AboutView
        },
        {
            path: "/cars/:id",
            name: "car",
            component: CarView,
            children: [{
                path: "contact",
                component: ContactView
            }]
        },
        {
            path: "/:catchall(.*)*",
            name: "not found",
            component: NotFoundView
        }
    ]
});

export default router