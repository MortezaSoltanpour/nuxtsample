// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // app:{
  //   head:{
  //     title:'My Project',
  //     meta:[
  //       {name:'description',content:"my description"}
  //     ],
  //     bodyAttrs:{
  //       class:'testclass'
  //     }
  //   }
  // }
  modules:['@pinia/nuxt', "@nuxt/image", "@nuxtjs/tailwindcss"],
  css:['~/assets/css/main.css','~/assets/sass/main.scss'],
  build:{
    transpile:['vue-toastification']
  },
  runtimeConfig:{
    secretKey:'morTeza Soltanpour',
    public:{
      apiBase:process.env.API_BASE
    }
  }
})