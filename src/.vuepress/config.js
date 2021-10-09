const sidebarMain = require('./sidebars/main')
const sidebarLab = require('./sidebars/lab')

module.exports = {
    dest: 'docs',

    /**
     * head
     */
    // head: [
    //     [
    //         "script",
    //         {
    //             src: "//cdn.jsdelivr.net/npm/web3@1.5.2/dist/web3.min.js"
    //         }
    //     ],
    // ],


    /**
     * plugin
     */
    plugins: [
        // '@vuepress/active-header-links',
        // '@vuepress/back-to-top',
        // '@vuepress/medium-zoom',
        // // '@vuepress/pwa', {
        // //     serviceWorker: true,
        // //     updatePopup: true
        // // },
        // [
        //     'vuepress-plugin-clean-urls',
        //     {
        //         normalSuffix: '/',
        //         indexSuffix: '/',
        //         notFoundPath: '/404.html',
        //     },
        // ],
    ],

    /**
     * i18n
     */
    locales: {
        '/': {
            lang: 'en-US',
            title: 'HyperDeFi Docs',
            description: 'Holding is farming! The Open-sourced HyperDeFi Protocol is community driven, fair launched.'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'HyperDeFi 协议 在线文档',
            description: '持有即挖矿！开源的 HyperDeFi 协议由社区驱动，公平启动。'
        }
    },

    /**
     * theme
     */
    themeConfig: {

        // i18n
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                // nav: require('./nav/en'),
                sidebar: {
                    '/main/': sidebarMain,
                    '/lab/': sidebarLab,
                },
            },
            '/zh/': {
                selectText: '选择语言',
                label: '简体中文',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },
                // nav: require('./nav/zh'),
                sidebar: {
                    '/zh/main/': sidebarMain,
                    '/zh/lab/': sidebarLab,
                },
            }
        },

        // algolia: {
        //     // apiKey: '<API_KEY>',
        //     // indexName: '<INDEX_NAME>'
        // },
    },

    // markdown
    markdown: {
        linkify: true,
        typographer: true,

        lineNumbers: true,
        extendMarkdown: md => {
            md.linkify.set({
                fuzzyEmail: false,
            })
            // md.use(require('markdown-it-sub'))
            // md.use(require('markdown-it-sup'))
            // md.use(require('markdown-it-ins'))
            // md.use(require('markdown-it-mark'))
            // md.use(require('markdown-it-footnote'))
            // md.use(require('markdown-it-abbr'))
            //
            // const twemoji = require('twemoji')
            // md.renderer.rules.emoji = function (token, idx) {
            //     return twemoji.parse(token[idx].content);
            // }
        }
    },

    // webpack
    // configureWebpack: {
    //     resolve: {
    //         //
    //     }
    // }
}
