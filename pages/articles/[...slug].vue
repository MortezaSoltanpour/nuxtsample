<template>
  <h1>this is Post page with catch all :</h1>
  <ul v-if="route.params.slug.length > 0">
    <li v-for="(item, index) in route.params.slug" :key="index">
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
const route = useRoute();

useHead({
  title: `page ${route.params.slug}`,
});
</script>
