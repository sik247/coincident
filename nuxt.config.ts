export default defineNuxtConfig({
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
  components: true, // 자동 컴포넌트 로드
  pages: true, // 파일 기반 라우팅
  devtools: {
    enabled: false // 개발자 도구 비활성화
  },
  app: {
    head: {
      link: [
        // Google Fonts CDN 추가
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
  }
})
