declare module '*.svg' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
// TODO:将这个类型定义放到vite-plugin-vue-svg-reactive-loader

// vite-plugin-vue-svg-reactive-loader 三斜线必须在前面
/// <reference types="vite-plugin-vue-svg-reactive-loader" />
/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}