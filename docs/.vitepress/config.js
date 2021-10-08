// @ts-check

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
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

    nav: [
      { text: '指引', link: '/guide/' },
      { text: 'Api 参考', link: '/api/component' },
    ],

    sidebar: {
      // catch-all fallback
      '/': [
        {
          text: '指引',
          children: [
            {
              text: '为什么选VueCook',
              link: '/guide/why'
            },
            {
              text: '开始',
              link: '/guide/'
            }
          ]
        },
        {
          text: 'APIs',
          children: [
            {
              text: '组件',
              link: '/api/component'
            },
            {
              text: '内置资源',
              link: '/api/built-in'
            },
            {
              text: '钩子',
              link: '/api/hooks'
            },
            {
              text: '工具',
              link: '/api/utils'
            }
          ]
        }
      ]
    }
  }
}
