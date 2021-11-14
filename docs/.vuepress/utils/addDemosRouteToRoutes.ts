import fetchPages from '@/../demos/utils/fecthPages';
import TableMaker from "@/../demos/test-pkg/components/table-with-fetch"
import FetchMaker from "@/../demos/test-pkg/logic/fetch-with-props"
import { CookPlayer, createCookPlayerState, defaultMakerList, IPage } from "vue-cook"
import useRoutes from '../hooks/useRoutes';

export default async function addDemosRouteToApp() {
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
        useRoutes().value.push({
            path: page.path,
            component: CookPlayer,
            props: {
                state: cookPlayerState
            }
        })
    })
}