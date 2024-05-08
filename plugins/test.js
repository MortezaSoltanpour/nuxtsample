export default defineNuxtPlugin((nuxtApp) => {
  console.log(nuxtApp);

  //   return nuxtApp.provide("hello", (name) => {
  //     return `hello ${name}`;
  //   });

  return {
    provide: {
      hello: (name) => {
        return `hello ${name}`;
      },
    },
  };
});
