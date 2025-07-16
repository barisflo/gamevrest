// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  image: {
    // staticFilename: '[publicPath]/[name]-[hash][ext]',
    // provider: '',
    // dir: 'public/images',
  },

  runtimeConfig: {
    public: {
      baseURL: '/'
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app : {
    head: {
      title: "Gamevrest",
      meta: [{
        hid: 'description', name: 'description',
        content: "Gamevrest Studio by Florent Baris, /* Gaspard Thirion and */ Mickaël Scherlen"
      },
      { hid: 'copyright', name: 'copyright', content: "Gamevrest" },
      { hid: 'language', name: 'language', content: "EN" },
      { hid: 'subject', name: 'subject', content: "Indie Game Studio" },
      { hid: 'owner', name: 'owner', content: "Florent Baris" },
      { hid: 'news_keywords', name: 'news_keywords', content: "Video Game, Gamevrest, Indie, Game, Studio, French, Premier, Servi, Party, Pastry" },
      { hid: '', property: '', name: "Gamevrest" },
      { hid: 'og:title', property: 'og:title', content: "Gamevrest" },
      { hid: 'og:site_name', property: 'og:site_name', content: "Gamevrest" },
      { hid: 'og:url', property: 'og:url', content: process.env.baseUrl },
      { hid: 'og:description', property: 'og:description', content: "Gamevrest Indie Game Studio by Florent Baris, /* Gaspard Thirion and */ Mickaël Scherlen" },
      { hid: 'og:image', property: 'og:image', content: process.env.baseUrl + "/meta.png"},],
        script: [
          {
            src: 'https://www.googletagmanager.com/gtag/js?id=G-8NXE8X8XZB',
            async: true
          }
        ]
    }
  },

  modules: ["@nuxt/image", '@nuxt/image-edge'],
})