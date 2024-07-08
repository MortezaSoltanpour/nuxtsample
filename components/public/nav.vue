<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
        style="visibility: visible"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink class="nav-link active" aria-current="page" to="/"
              >Home</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/about">about us</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/contactus">contact us</NuxtLink>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              posts
            </a>
            <ul class="dropdown-menu">
              <li>
                <NuxtLink class="dropdown-item" to="/posts/first"
                  >first</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/posts/second"
                  >second</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/posts/bloglist"
                  >blog</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/posts/bloglist2"
                  >blog 2</NuxtLink
                >
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              articles
            </a>
            <ul class="dropdown-menu">
              <li>
                <NuxtLink class="dropdown-item" to="/articles/1"
                  >Article 1</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/articles/2"
                  >Article 2</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/articles/2/all/new/today"
                  >Cacth all</NuxtLink
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  margin-left: 10px;
}
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

.router-link-active {
  color: red !important;
}

.router-link-exact-active {
  color: green !important;
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
  background-color: #ededed;
}

.subnav-content {
  /* display: none; */
  display: flex;
  flex-direction: column;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s ease;
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
  visibility: visible;
  opacity: 1;
}

.subnav-content .navitem:not(:last-child)::after {
  content: "";
}
</style>
