<template>
  <Head>
    <Title>Home</Title>
    <Meta name="desciption" content="this is my home page" />
    <Body class="classTest"></Body>
  </Head>
  <h1>this is home page</h1>
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
  <button @click="counterPinia.incrementPinia(3)">Increment</button>
  <button @click="counterPinia.decrementPinia(3)">Decrement</button>
</template>

<script setup>
const { count, increment, decrement } = useCounter();

import { useCounterPinia } from "../stores/counterPinia";

const counterPinia = useCounterPinia();

function showabout() {
  return navigateTo("/about");
}
</script>
