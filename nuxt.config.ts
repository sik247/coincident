export default defineNuxtConfig({
  app: {
    head: {
      title: 'Coincident Ventures',
      meta: [
        { charset: 'utf-8', hid: 'charset' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
          hid: 'viewport'
        },
        {
          name: 'keywords',
          content:
            'Coincident Ventures, 코인자산운용, Blockchain VC, Crypto hedge fund, 가상자산 운용사, 암호화폐, 헤지펀드, 디지털 자산 운용, 블록체인 투자 회사, 크립토VC, 웹3 투자 회사, Web3 투자',
          hid: 'keywords'
        },
        { property: 'og:title', content: 'Coincident Ventures', hid: 'og:title' },
        {
          property: 'og:description',
          content:
            'Coincident Ventures is the pioneering VC hedge fund dedicated to uncovering and nurturing transformative opportunities across emerging industries.',
          hid: 'og:description'
        },
        { property: 'og:image', content: '/og.jpg', hid: 'og:image' },
        { property: 'og:url', content: '', hid: 'og:url' },
        { property: 'og:type', content: 'website', hid: 'og:type' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded'
        }
      ]
    }
  },

  // 나머지 설정 (css, vite 등)
  css: ['~/assets/css/reset.css', '~/assets/css/common.css'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/scss/variables.scss" as *;`
        }
      }
    }
  },

  components: true,
  pages: true,
  devtools: { enabled: false },
  compatibilityDate: '2025-02-26'
})