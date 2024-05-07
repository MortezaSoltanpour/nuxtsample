<template>
  <h1>this is Post page with ID : {{ route.params.id }}</h1>
</template>

<script setup>
const route = useRoute();
</script>
