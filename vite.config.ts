import { defineConfig, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"


export default defineConfig(({ command, mode }) => {
  const commonConfig: UserConfigExport = {
    plugins: [vue()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src'),
        "$": path.resolve(__dirname, 'src/lib'),
      }
    }
  }

  if (command === 'serve') {
    return {
      ...commonConfig,
      server: {
        open: true
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
