// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    alias: {
        /*'@': resolve(__dirname, "/"),*/
        assets: "/<rootDir>/assets",
        pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
    },
    devtools: {enabled: true},
    css: ["~/assets/scss/main.scss"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        // 공통 SEO 설정 시에는 [nuxt.config.js]에 작성
        /*head: {
            title: 'Nuxt course on Youtube',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                {
                    name: 'description',
                    content: 'This is my amazing site, let me tell you all about it.'
                }
            ]
        },*/
        rootId: 'jiwoo',
        pageTransition: {
            name: 'fade',
            mode: 'out-in' // default
        },
        layoutTransition: {
            name: 'slide',
            mode: 'out-in' // default
        }
    },
    modules: ["@nuxt/content", '@pinia/nuxt'],
    ssr: false, // server side rendering,
    /*routeRules: {

    }*/
})