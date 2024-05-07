<template>
  <Head>
    <Title>Home</Title>
    <Meta name="desciption" content="this is my home page" />
    <Body class="classTest"></Body>
  </Head>
  <h1>this is home page</h1>
  <button @click="showabout">Show about us</button>
</template>

<script setup>
function showabout() {
  return navigateTo("/about");
}
</script>
