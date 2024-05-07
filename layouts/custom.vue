<template>
  <div>
    <header class="header">
      <Nav />
    </header>
    <div class="container">
      <slot />
    </div>
    <footer class="footer">this is footer from custom layout</footer>
  </div>
</template>

<script setup>
import Nav from "./../components/public/nav.vue";
</script>
<style scoped>
.container {
  padding: 10px;
}
.header {
  padding: 20px 0;
  background-color: #d7d7d7;
  width: 100%;
}

.footer {
  padding: 10px;
  text-align: center;
  font-weight: 600;
  font-size: 40px;
  background-color: #d7d7d7;
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
