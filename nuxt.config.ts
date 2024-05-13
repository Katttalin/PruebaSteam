// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 
  devtools: { enabled: true },
  googleFonts: {
    families: {
      Roboto: true,
      Inconsolata: true
    }
  },  
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/google-fonts']
})
