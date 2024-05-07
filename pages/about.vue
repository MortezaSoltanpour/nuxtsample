<template>
  <!-- <NuxtLayout name="custom"> -->
  <h1>About page</h1>
  <!-- </NuxtLayout> -->
</template>

<script setup>
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
