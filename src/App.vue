<template>
  <div id="app">
    <!-- <swipeable-cards /> -->
    <header class="app-header">
      <Navbar class="header" />
    </header>
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "app",
  components: { Navbar },
};
</script>

<style>
.nav {
  background: black;
  width: 100%;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  z-index: 0;
}

.header {
  position: fixed;
  width: 100vw;
  background-color: #222;
  padding: 34px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
