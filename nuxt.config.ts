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
  modules:[
    '@pinia/nuxt'
  ]
})
