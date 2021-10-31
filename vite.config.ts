import { defineConfig, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgReactiveLoader from "vite-plugin-vue-svg-reactive-loader"
import path from "path"


export default defineConfig(({ command, mode }) => {
  const commonConfig: UserConfigExport = {
    plugins: [vue(), svgReactiveLoader()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src'),
      }
    }
  }

  if (command === 'serve') {
    return {
      ...commonConfig,
      server: {
        open: "/vue-cook-dev",
      }
    }
  }
  else {
    return {
      ...commonConfig,
      publicDir: false,
      build: {
        lib: {
          entry: path.resolve(__dirname, 'src/lib/index.ts'),
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
    }
  }
})
