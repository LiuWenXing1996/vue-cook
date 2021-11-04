import { defineConfig, mergeConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import commonConfig from "./vite.common.config"
import path from "path"

const config = defineConfig({
  plugins: [
    vue()
  ],
  publicDir: false,
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'VueCook',
      fileName: (format) => `vue-cook.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})

export default mergeConfig(config, commonConfig)
