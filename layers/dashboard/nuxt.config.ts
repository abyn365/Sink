export default defineNuxtConfig({
  ssr: false,

  routeRules: {
    '/dashboard': {
      redirect: '/dashboard/links',
    },
  },
})
