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
</template>

<script setup>
const { count, increment, decrement } = useCounter();

definePageMeta({
  layout: false,
  layout: "custom",
});

useHead({
  title: "About",
  meta: [{ name: "description", content: "my About page description" }],
  bodyAttrs: {
    class: "testclass",
  },
});
</script>
