import { defineConfig } from 'vite'
import svgReactiveLoader from "vite-plugin-vue-svg-reactive-loader"
import path from "path"

export default defineConfig({
    plugins: [
        svgReactiveLoader()
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, 'src'),
        }
    },
    optimizeDeps: {
        include: [
            "@daybrush/drag",
            "@scena/ruler",
            "@vicons/antd",
            "@vicons/fluent",
            "@vicons/ionicons5",
            "@vicons/material",
            "@vicons/tabler",
            "@vueuse/core",
            "lodash-es",
            "naive-ui",
            "splitpanes",
            "uuid",
        ]
    }
})
