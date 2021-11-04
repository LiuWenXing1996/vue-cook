import { defineClientAppEnhance } from '@vuepress/client'
import IframeDemo from "./components/IframeDemo.vue"
import DemoToc from "./components/DemoTOC.vue"
import routes from "virtual:generated-pages";
import useRoutes from './hooks/useRoutes';

export default defineClientAppEnhance(({ app, router, siteData }) => {
    app.component("IframeDemo", IframeDemo)
    app.component("DemoToc", DemoToc)
    useRoutes().value = routes
    console.log(routes)
    routes.forEach(e => {
        router.addRoute(e)
    })
})