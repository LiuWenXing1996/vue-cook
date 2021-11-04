import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { CookEditor, CookPlayer, createCookEditorState, createCookPlayerState, defaultMakerList } from "vue-cook"
import { ButtonMaker, AlertMaker } from "@/test-pkg/index"
import autoPages from "virtual:generated-pages";

const cookEditorState = createCookEditorState({
    // makerList: [
    //     ...defaultMakerList,
    //     ButtonMaker,
    //     AlertMaker
    // ]
})

const dynamicRoutes: RouteRecordRaw[] = cookEditorState.pages.map(page => {
    const cookPlayerState = createCookPlayerState({
        page,
        makerList: [
            ...defaultMakerList,
            ButtonMaker,
            AlertMaker
        ]
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
    },
    ...dynamicRoutes
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
