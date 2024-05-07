<template>
  <h1>About page</h1>
</template>

<script setup>
useHead({
  title: "About",
  meta: [{ name: "description", content: "my About page description" }],
  bodyAttrs: {
    class: "testclass",
  },
});
</script>
