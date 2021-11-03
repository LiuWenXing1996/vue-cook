import { createRouter, createWebHistory } from 'vue-router'
import routes from "virtual:generated-pages";
console.log(routes)
const router = createRouter({
    history: createWebHistory(),
    routes,
})
//TODO:不使用insider player ，使用路由定义的player，这样更好控制？？？？

export default router
