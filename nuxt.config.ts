// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
     app: {
      baseURL: '/nuxt-github-pages/', // baseURL: '/<repository>/'
      buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
    },
  devtools: { enabled: true },
    css: ['vuetify/lib/styles/main.css','@mdi/font/css/materialdesignicons.css'
  ],
    build: {
      transpile: ["vuetify"],
    },
})

