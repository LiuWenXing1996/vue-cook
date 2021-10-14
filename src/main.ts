import { createApp } from 'vue'
import App from './App.vue'
import router from "./route"
import { installPkg } from "$/index"
import * as TestPkg from "@/test-pkg/index"
installPkg(TestPkg)
createApp(App)
    .use(router)
    .mount('#app')

    // TODO:整理package.json里的包