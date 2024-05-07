<template>
  <nav>
    <div style="display: flex; flex-direction: row">
      <span class="navitem"><NuxtLink to="/">Home</NuxtLink></span>
      <span class="navitem"><NuxtLink to="/about">about</NuxtLink></span>
      <span class="navitem"
        ><NuxtLink to="/contactus">contactus</NuxtLink></span
      >
    </div>
  </nav>
  <div>
    <NuxtPage />
  </div>
</template>
<style>
html {
  padding: 20px;
}
</style>
<style scoped>
.navitem {
  font-size: 20px;
}
.navitem a {
  position: relative;
  color: #000;
  text-decoration: none;
  /* transition: border 0.16s linear; */
  /* border: solid 0px black; */
  padding: 5px;
}

a::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #000;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
a:hover {
  /* border: solid thick black; */
}

a:hover::before {
  transform: scaleX(1);
}
.navitem:not(:last-child)::after {
  content: "|";
  padding: 0 15px;
}
</style>
