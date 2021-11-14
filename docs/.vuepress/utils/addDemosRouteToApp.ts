import fetchPages from '@/../demos/utils/fecthPages';
import TableMaker from "@/../demos/test-pkg/components/table-with-fetch"
import FetchMaker from "@/../demos/test-pkg/logic/fetch-with-props"
import { Router } from "vue-router";
import { CookPlayer, createCookPlayerState, defaultMakerList, IPage } from "vue-cook"

export default function addDemosRouteToApp(router: Router) {
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
}
