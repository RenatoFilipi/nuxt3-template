// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    // https://tailwindcss.nuxt.dev/
    "@nuxtjs/tailwindcss",
    // https://vueuse.org/guide/index.html#nuxt
    "@vueuse/nuxt",
    // https://pinia.vuejs.org/ssr/nuxt.html
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],

  // head
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Nuxt template",
      meta: [{ name: "description", content: "Nuxt 3 template" }],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
        },
      ],
    },
  },

  // Tailwind CSS Config
  tailwindcss: {
    viewer: false,
  },

  // TypeScript Config
  typescript: {
    shim: false,
  },

  // Imports Config
  imports: {
    dirs: ["stores", "composables/**"],
  },
});
