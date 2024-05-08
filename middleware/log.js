import { useCounterPinia } from "../stores/counterPinia";

export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`Log from middleware Directory`);

  if (to.path != "/") {
    // Using useState
    const { count } = useCounter();

    // Using Pinia
    const counterPinia = useCounterPinia();

    if (count.value == 7) {
      console.error("navigation is not allowed with count 7");
      if (to.path == "/") return abortNavigation();

      console.log("redirecting to home");
      return navigateTo("/");
    }
  }
});
