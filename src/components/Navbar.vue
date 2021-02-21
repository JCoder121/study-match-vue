<template>
  <navbar>
    <!-- <div class="menu-item"> <router-link to="/about">About</router-link></div> -->

    <!-- 
    <div class="menu-item">
      <router-link to="/profile">Profile</router-link>
    </div>
    -->

    <div class="menu-item">
      <i class="material-icons"> <router-link to="/swipe">home</router-link></i>
    </div>
    <div class="menu-item">
      <i class="material-icons">
        <router-link to="/matches">local_fire_department</router-link></i
      >
    </div>
    <div class="menu-item">
      <i class="material-icons">
        <router-link to="/profile">person</router-link></i
      >
    </div>
  </navbar>
</template>

<script>
export default {
  components: {},
  name: "navigationbar",
};
</script>

<style>
navbar {
  display: flex;
  top: 0;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

navbar .menu-item {
  color: white;
  padding: 10px 100px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}

navbar .menu-item.active,
navbar .menu-item:hover {
  background-color: #444;
  border-bottom-color: #f1cd2b;
}

navbar .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>
