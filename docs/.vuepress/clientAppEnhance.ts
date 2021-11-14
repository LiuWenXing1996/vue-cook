import { defineClientAppEnhance } from '@vuepress/client'
import DemoLink from "./components/DemoLink.vue"
import DemoToc from "./components/DemoTOC.vue"
import routes from "virtual:generated-pages";
import useRoutes from './hooks/useRoutes';
import addDemosRouteToApp from './utils/addDemosRouteToApp';
import addDemosRouteToRoutes from './utils/addDemosRouteToRoutes';

export default defineClientAppEnhance(async ({ app, router, siteData }) => {
    app.component("DemoLink", DemoLink)
    app.component("DemoToc", DemoToc)
    console.log(routes)
    useRoutes().value = routes
    routes.forEach(e => {
        router.addRoute(e)
    })
    if (!__VUEPRESS_SSR__) {
        await addDemosRouteToRoutes()
    }
    addDemosRouteToApp(router)
})