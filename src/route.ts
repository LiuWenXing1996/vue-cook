import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { CookEditor, CookPlayer, defineCookEditorConfig } from "$/index"
import { ref } from 'vue'

const cookEditorConfig = ref(defineCookEditorConfig())

// TODO:所有的数据让player和editor直接读取storerage里的，而不是通过props传参？
// TODO:尝试数据不从storeage里取？
// TODO:player和editor的相互传参还是有问题
// const dynamicRoutes: RouteRecordRaw[] = cookConfig.value.pages.map(page => {
//     const _page = usePage(page.path) // 此处使用usePage来保持page的响应性
//     return {
//         path: page.path,
//         component: CookPlayer,
//         props: {
//             page: _page
//         }
//     }
// })

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: CookEditor,
        props: {
            config: cookEditorConfig
        }
    },
    // ...dynamicRoutes
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
