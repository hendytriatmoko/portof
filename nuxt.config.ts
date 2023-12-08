import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  //...
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  plugins: [
    { src: '~/plugins/aos', mode: 'client' },
  ],
  css: ['@/assets/style.css'],
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    // 'nuxt-aos'
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
