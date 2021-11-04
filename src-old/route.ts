import { createRouter, createWebHistory } from 'vue-router'
import routes from "virtual:generated-pages";
import useRoutes from './useRoutes';
import TOC from "./TOC.vue"
console.log(routes)
useRoutes().value = routes
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: TOC
        },
        ...routes
    ]
})

export default router
