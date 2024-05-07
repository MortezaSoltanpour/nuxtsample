<template>
  <h1>this is home page</h1>
  <button @click="showabout">Show about us</button>
</template>

<script setup>
function showabout() {
  return navigateTo("/about");
}
</script>
