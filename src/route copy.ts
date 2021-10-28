import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { CookEditor, CookPlayer, useCookConfig, usePage } from "@/lib/index"

const cookConfig = useCookConfig() //TODO:此地方开启一个可以穿入参数的选项，可以穿入自定义的cook config 数据

// TODO:所有的数据让player和editor直接读取storerage里的，而不是通过props传参？
// TODO:尝试数据不从storeage里取？
// TODO:player和editor的相互传参还是有问题
const dynamicRoutes: RouteRecordRaw[] = cookConfig.value.pages.map(page => {
    const _page = usePage(page.path) // 此处使用usePage来保持page的响应性
    return {
        path: page.path,
        component: CookPlayer,
        props: {
            page: _page
        }
    }
})

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: CookEditor,
        props: {
            config: cookConfig
        }
    },
    ...dynamicRoutes
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
