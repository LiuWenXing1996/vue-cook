import { defineUserConfig } from "@vuepress/cli"
import { mergeConfig } from 'vite'
import Pages from "vite-plugin-pages"
import path from "path"
import commonConfig from "../../vite.common.config"

export default defineUserConfig({
    title: 'VueCook',
    description: '基于vue的低代码平台辅助工具',
    head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
    themeConfig: {
        repo: 'LiuWenXing1996/vue-cook',
        logo: '/logo.svg',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: '为此页提供修改建议',

        // TODO:这个地方的配置改一改
        // algolia: {
        //   apiKey: 'b573aa848fd57fb47d693b531297403c',
        //   indexName: 'vitejs',
        //   searchParameters: {
        //     facetFilters: ['tags:en']
        //   }
        // },

        navbar: [
            { text: '指引', link: '/guide/' },
            { text: 'Api 参考', link: '/api/component' },
            { text: '示例目录', link: '/demos' },
        ],
        sidebar: [
            {
                text: '指引',
                children: [
                    '/guide/why',
                    '/guide/',
                    '/guide/custom-component',
                    '/guide/custom-logic',
                    {
                        text: "自定义面板",
                        link: "/guide/custom-panel/define-a-simple-panel",
                        children: [
                            '/guide/custom-panel/define-a-simple-panel',
                            '/guide/custom-panel/toggle-panel-by-code',
                            '/guide/custom-panel/share-state-with-other-panel',
                            '/guide/custom-panel/define-a-base-edtior-panel'
                        ]
                    }
                ]
            },
            {
                text: '深入',
                children: [
                    '/advanced/component-render-principle',
                    '/advanced/component-picker-principle',
                    '/advanced/logic-compiler-principle',
                    '/advanced/panel-load-principle',
                    '/advanced/global-state-types',
                ]
            },
            {
                text: 'APIs',
                children: [
                    '/api/component',
                    '/api/built-in',
                    '/api/hooks',
                    '/api/utils'
                ]
            }
        ]
    },
    bundler: '@vuepress/bundler-vite',
    bundlerConfig: {
        viteOptions: mergeConfig({
            plugins: [
                Pages({
                    pagesDir: [
                        { dir: path.resolve(__dirname, '../../demos/pages'), baseRoute: "demos" },
                    ]
                }),
            ],
        }, commonConfig),
    }
})