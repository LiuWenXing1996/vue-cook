import { defineClientAppEnhance } from '@vuepress/client'
import DemoLink from "./components/DemoLink.vue"
import DemoToc from "./components/DemoTOC.vue"
import PkgDepList from "./components/PkgDepList.vue"
import UseFoo from "./components/demos/UseFoo.vue"
import UseComponentRenderFoo from "./components/demos/UseComponentRenderFoo.vue"
import UseComponentRenderFooWithDynamicName from "./components/demos/UseComponentRenderFooWithDynamicName.vue"
import UseComponentRenderRenderFooWithRecursion from "./components/demos/UseComponentRenderRenderFooWithRecursion.vue"
import UseComponentRenderRenderFoo from "./components/demos/UseComponentRenderRenderFoo.vue"
import routes from "virtual:generated-pages";
import useRoutes from './hooks/useRoutes';
import addDemosRouteToApp from './utils/addDemosRouteToApp';
import addDemosRouteToRoutes from './utils/addDemosRouteToRoutes';

export default defineClientAppEnhance(async ({ app, router, siteData }) => {
    app.component("DemoLink", DemoLink)
    app.component("DemoToc", DemoToc)
    app.component("PkgDepList", PkgDepList)
    app.component("DemosUseFoo", UseFoo)
    app.component("DemosUseComponentRenderFoo", UseComponentRenderFoo)
    app.component("DemosUseComponentRenderFooWithDynamicName", UseComponentRenderFooWithDynamicName)
    app.component("DemosUseComponentRenderRenderFoo", UseComponentRenderRenderFoo)
    app.component("DemosUseComponentRenderRenderFooWithRecursion", UseComponentRenderRenderFooWithRecursion)
    console.log(routes)
    useRoutes().value = routes
    routes.forEach(e => {
        router.addRoute(e)
    })
    await addDemosRouteToRoutes()
    addDemosRouteToApp(router)
})