/// <reference types="vite-plugin-pages/client" />
/// <reference types="vite-plugin-vue-svg-reactive-loader" />
/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

const __VUEPRESS_SSR__: Boolean