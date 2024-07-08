<template>
  <Head>
    <Title>Home</Title>
    <Meta name="desciption" content="this is my home page" />
    <Body class="classTest"></Body>
  </Head>
  <h1>this is home page</h1>
  <h1>{{ $hello("Morteza Soltanpour") }}</h1>
  <button @click="showabout">Show about us</button>
  <br />
  <br />
  <br />
  <h2>Current counter : {{ count }}</h2>
  <br />
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
  <hr />
  <br />
  <h2>Pinia counter : {{ counterPinia.countPinia }}</h2>
  <br />
  <button @click="counterPinia.incrementPinia(count)">Increment</button>
  <button @click="counterPinia.decrementPinia(count)">Decrement</button>
  <br />
  <br />
  <br />
  <img src="/images/image1.jpg" width="100" />
  <br />
  <nuxt-img src="/images/image1.jpg" width="100" />
  <br />
  <button @click="showToast">Show Toast</button>
</template>

<script setup>
const appConfig = useAppConfig();
console.log(appConfig);

const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig);

const {
  public: { apiBase },
} = useRuntimeConfig();
console.log(apiBase);

console.log(process.env);

const { $hello } = useNuxtApp();
import { useToast } from "vue-toastification";
const toast = useToast();
function showToast() {
  toast.success("this is a sample toast", {
    timeout: 2000,
  });
}

definePageMeta({
  middleware: "log",
});

const { count, increment, decrement } = useCounter();

import { useCounterPinia } from "../stores/counterPinia";

const counterPinia = useCounterPinia();

function showabout() {
  return navigateTo("/about");
}
</script>
