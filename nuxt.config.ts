import themes from './themes'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules : [
    ['@invictus.codes/nuxt-vuetify',{ rtl: true }],
    '@nuxtjs/i18n'
  ],

  vuetify: {
    vuetifyOptions: {
      theme: {
        themes,
        defaultTheme: 'Light'
      }
    }
  }
})
