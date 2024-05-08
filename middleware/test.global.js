import { useCounterPinia } from "../stores/counterPinia";

export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`Log from Global middleware Directory`);
});
