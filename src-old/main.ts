import { createApp } from 'vue'
import App from './App.vue'
import router from "./route"

createApp(App)
    .use(router)
    .mount('#app')

    // TODO:整理package.json里的包