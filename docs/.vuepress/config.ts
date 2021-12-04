import { defineUserConfig } from "@vuepress/cli"
import { mergeConfig } from 'vite'
import Pages from "vite-plugin-pages"
import path from "path"
import commonConfig from "../../vite.common.config"

export default defineUserConfig({
    base: "/vue-cook/",
    title: 'VueCook',
    description: '基于vue的低代码平台辅助工具',
    head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/vue-cook/logo.svg' }]],
    theme: path.resolve(__dirname, './theme'),
    themeConfig: {
        repo: 'LiuWenXing1996/vue-cook',
        logo: '/logo.svg',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: '为此页提供修改建议',
        navbar: [
            { text: '指引', link: '/guide/' },
            { text: 'Apis', link: '/api/components' },
            { text: '示例目录', link: '/demos' },
            { text: '致谢', link: '/thanks-list' }
            // TODO:更新日志链接
        ],
        sidebarDepth: 3,
        sidebar: [
            {
                text: '指引',
                children: [
                    '/guide/why',
                    '/guide/',
                    '/guide/custom-component',
                    '/guide/custom-logic',
                    '/guide/custom-panel',
                    '/guide/data-save-and-use',
                ]
            },
            {
                text: '深入',
                children: [
                    '/advanced/component-render-principle',
                    '/advanced/component-picker-principle',
                    '/advanced/logic-run-principle',
                    '/advanced/panel-load-principle',
                ]
            },
            {
                text: 'Apis',
                children: [
                    '/api/components',
                    '/api/built-in',
                    '/api/hooks',
                    '/api/utils'
                ]
            },
        ]
    },
    plugins: [
        [
            '@vuepress/docsearch',
            {
                apiKey: 'b4f749f6f7bac435d2b08338dfd223ee',
                indexName: 'vue-cook',
                placeholder: '搜索文档'
            },
        ],
    ],
    bundler: '@vuepress/bundler-vite',
    bundlerConfig: {
        viteOptions: mergeConfig({
            plugins: [
                Pages({
                    pagesDir: [
                        { dir: path.resolve(__dirname, '../../demos/pages'), baseRoute: "./demos" },
                    ]
                }),
            ],
        }, commonConfig),
    }
})