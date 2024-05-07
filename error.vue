<template>
  <div>
    <h1>Error page</h1>
    <h3>Status code : {{ error?.statusCode }}</h3>
    <h4>{{ error?.message }}</h4>
    <button @click="gotohome">Home page</button>
  </div>
</template>

<script setup>
const error = useError();
console.log(error);

function gotohome() {
  clearError({ redirect: "/" });
}
</script>
