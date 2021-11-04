import { defineClientAppEnhance } from '@vuepress/client'
import IframeDemo from "./components/IframeDemo.vue"
import routes from "virtual:generated-pages";

export default defineClientAppEnhance(({ app, router, siteData }) => {
    app.component("IframeDemo", IframeDemo)
    routes.forEach(e => {
        router.addRoute(e)
    })
})