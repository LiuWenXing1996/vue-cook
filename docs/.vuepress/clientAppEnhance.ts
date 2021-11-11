import { defineClientAppEnhance } from '@vuepress/client'
import IframeDemo from "./components/IframeDemo.vue"
import DemoToc from "./components/DemoTOC.vue"
import routes from "virtual:generated-pages";
import useRoutes from './hooks/useRoutes';
import fetchPages from '@/../demos/utils/fecthPages';
import TableMaker from "@/../demos/test-pkg/components/table-with-fetch"
import FetchMaker from "@/../demos/test-pkg/logic/fetch-with-props"
import { CookPlayer, createCookPlayerState, defaultMakerList, IPage } from "vue-cook"

export default defineClientAppEnhance(({ app, router, siteData }) => {
    app.component("IframeDemo", IframeDemo)
    app.component("DemoToc", DemoToc)
    console.log(routes)
    useRoutes().value = routes
    routes.forEach(e => {
        router.addRoute(e)
    })
    let redirectTag = false;
    router.beforeEach(async (to, from) => {
        if (!redirectTag) {
            const pagesString = await fetchPages()
            const pages = JSON.parse(pagesString) as IPage[]
            pages.forEach(page => {
                const cookPlayerState = createCookPlayerState({
                    page,
                    makerList: [
                        ...defaultMakerList,
                        TableMaker, // import TableMaker from "./TableMaker.ts"
                        FetchMaker, // import FetchMaker from "./FetchMaker.ts"
                    ]
                })
                router.addRoute({
                    path: page.path,
                    component: CookPlayer,
                    props: {
                        state: cookPlayerState
                    }
                })
            })
            redirectTag = true
            return to.fullPath
        }
        redirectTag = false
    })
})