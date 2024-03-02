// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  image: {
    dir: 'assets/images',
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
        content: "Gamevrest Studio by Florent Baris and Gaspard Thirion"
      },
      { hid: 'copyright', name: 'copyright', content: "Gamevrest" },
      { hid: 'language', name: 'language', content: "EN" },
      { hid: 'subject', name: 'subject', content: "Indie Game Studio" },
      { hid: 'owner', name: 'owner', content: "Florent Baris" },
      { hid: 'news_keywords', name: 'news_keywords', content: "Game, Gamevrest, Indie, Game, Studio, French, Premier, Servi" },
      { hid: '', property: '', name: "Gamevrest" },
      { hid: 'og:title', property: 'og:title', content: "Gamevrest" },
      { hid: 'og:site_name', property: 'og:site_name', content: "Gamevrest" },
      { hid: 'og:url', property: 'og:url', content: process.env.baseUrl },
      { hid: 'og:description', property: 'og:description', content: "Gamevrest Studio by Florent Baris and Gaspard Thirion" },
      { hid: 'og:image', property: 'og:image', content: process.env.baseUrl + "/meta.png"},],
    }
  },
  modules: ["@nuxt/image"]
})