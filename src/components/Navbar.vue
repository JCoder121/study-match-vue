<template>
  <navbar>
    <!-- <div class="menu-item"> <router-link to="/about">About</router-link></div> -->

    <!-- 
    <div class="menu-item">
      <router-link to="/profile">Profile</router-link>
    </div>
    -->
    
    <div class="menu-item">
      <router-link to="/swipe">Home</router-link>
    </div>
    <div class="menu-item">
      <router-link to="/matches">Matches</router-link>
    </div>
    <div class="menu-item">
      <router-link to="/groups">Study Groups</router-link>
    </div>
    <div class="menu-item">
      <router-link to="/profile">Profile</router-link>
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
  align-items: center;
  justify-content: center;
}

navbar .menu-item {
  color: white;
  padding: 10px 60px;
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
