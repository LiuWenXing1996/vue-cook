import type { App } from 'vue'
import ProjectPanel from "./components/ProjectPanel.vue"

export default function install(app: App) {
    app.component("ProjectPanel", ProjectPanel)
}