<template>
  <!-- <NuxtLayout name="custom"> -->
  <h1>About page</h1>
  <!-- </NuxtLayout> -->
  <br />
  <br />
  <h2>current counter : {{ count }}</h2>
  <br />
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
  <br />
  <hr />
  <h2>pinia counter : {{ counterPinia.countPinia }}</h2>
  <br />
  <button @click="counterPinia.incrementPinia(count)">Increment</button>
  <button @click="counterPinia.decrementPinia(count)">Decrement</button>
</template>

<script setup>
const { count, increment, decrement } = useCounter();
import { useCounterPinia } from "../stores/counterPinia";

const counterPinia = useCounterPinia();

definePageMeta({
  layout: false,
  layout: "custom",
  middleware: ["log"],
});

useHead({
  title: "About",
  meta: [{ name: "description", content: "my About page description" }],
  bodyAttrs: {
    class: "testclass",
  },
});
</script>
