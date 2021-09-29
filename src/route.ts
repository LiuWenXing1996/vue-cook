import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { CookEditor, CookPlayer } from "$/index"
import useCookConfig from './useCookConfig';

const cookConfig = useCookConfig()
const dynamicRoutes: RouteRecordRaw[] = cookConfig.value.pages.map(page => {
    return {
        path: page.path,
        component: CookPlayer,
        props: {
            config: page.component
        }
    }
})

const routes: RouteRecordRaw[] = [
    {
        path: '/cook',
        component: CookEditor,
        props: {
            config: cookConfig
        }
    },
    ...dynamicRoutes
]


const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})

export default router
