import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { CookEditor, CookPlayer, createCookEditorState, createCookPlayerState, defaultPreInstallMakerList } from "@/lib/index"
import { ButtonMaker } from "@/test-pkg/index"

const cookEditorState = createCookEditorState({
    preInstallMakerList: [
        ...defaultPreInstallMakerList,
        ButtonMaker
    ]
})

// TODO:所有的数据让player和editor直接读取storerage里的，而不是通过props传参？
// TODO:尝试数据不从storeage里取？
// TODO:player和editor的相互传参还是有问题
const dynamicRoutes: RouteRecordRaw[] = cookEditorState.pages.map(page => {
    const cookPlayerState = createCookPlayerState({
        page
    })
    return {
        path: page.path,
        component: CookPlayer,
        props: {
            state: cookPlayerState
        }
    }
})

const routes: RouteRecordRaw[] = [
    {
        path: '/vue-cook-dev',
        component: CookEditor,
        props: route => ({
            state: cookEditorState,
            preview: route.query.preview
        })
        // props: {
        //     state: cookEditorState
        // },
        // props: route => ({ query: route.query.q })
    },
    ...dynamicRoutes
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
