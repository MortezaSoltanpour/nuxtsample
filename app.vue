<template>
  <nav>
    <div style="display: flex; flex-direction: row">
      <span class="navitem"><NuxtLink to="/">Home</NuxtLink></span>
      <span class="navitem"><NuxtLink to="/about">about</NuxtLink></span>
      <span class="navitem"
        ><NuxtLink to="/contactus">contactus</NuxtLink></span
      >
      <span class="navitem subnav"
        ><NuxtLink to="/posts">posts</NuxtLink>

        <div class="subnav-content">
          <span class="navitem"
            ><NuxtLink to="/posts/first">first posts</NuxtLink></span
          >
          <span class="navitem"
            ><NuxtLink to="/posts/second">second posts</NuxtLink></span
          >
        </div>
      </span>

      <span class="navitem subnav"
        ><NuxtLink to="/articles">articles</NuxtLink>

        <div class="subnav-content">
          <span class="navitem"
            ><NuxtLink to="/articles/1">Id 1</NuxtLink></span
          >
          <span class="navitem"
            ><NuxtLink to="/articles/2">Id 1</NuxtLink></span
          >
          <span class="navitem"
            ><NuxtLink to="/articles/2/all/new/today">cacth all</NuxtLink></span
          >
        </div>
      </span>
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

.router-link-active {
  color: red !important;
}

.router-link-exact-active {
  color: green !important;
}

.navbar {
  overflow: hidden;
  background-color: #333;
}

.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.subnav {
  float: left;
  overflow: hidden;
}

.subnav .subnavbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover,
.subnav:hover .subnavbtn {
  background-color: red;
}

.subnav-content {
  display: none;
  position: absolute;
  background-color: #c3c3c3;
  z-index: 1;
  border-radius: 5px;
}

.subnav-content a {
  float: left;
  color: white;
  text-decoration: none;
}

.subnav-content a:hover {
  background-color: #c3c3c3;
  color: black;
}

.subnav:hover .subnav-content {
  display: flex;
  flex-direction: column;
}

.subnav-content .navitem:not(:last-child)::after {
  content: "";
}
</style>
