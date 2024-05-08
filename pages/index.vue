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
</template>

<script setup>
const { count, increment, decrement } = useCounter();
function showabout() {
  return navigateTo("/about");
}
</script>
