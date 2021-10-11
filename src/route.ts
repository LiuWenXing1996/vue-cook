import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { CookEditor, CookPlayer, useCookConfig, DraggaleTabs, DraggableSplitTabs } from "$/index"


const cookConfig = useCookConfig() //TODO:此地方开启一个可以穿入参数的选项，可以穿入自定义的cook config 数据
const dynamicRoutes: RouteRecordRaw[] = cookConfig.value.pages.map(page => {
    return {
        path: page.path,
        component: CookPlayer,
        props: {
            config: page.component,
            path: page.path
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
    {
        path: '/draggable-tabs',
        component: DraggaleTabs,
    },
    {
        path: '/draggable-split-tabs',
        component: DraggableSplitTabs,
    },
    ...dynamicRoutes
]


const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})

export default router
