<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  // titleTemplate: "%s  | Mehregan",
  titleTemplate: (title) => {
    return title ? `${title} | Mehregan` : "Mehregan.com";
  },
});
</script>

<style>
body {
  margin: 0;
}
</style>
