<template>
  <div id="app" class="container">
    <h1>
      <router-link to="/">
        <img alt="Vue logo" src="./assets/logo.png" class="vue-logo" />
        Proof of Concept
      </router-link>
    </h1>

    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  padding-top: 1rem;
}
.vue-logo {
  height: 2rem;
  float: left;
  margin-right: 0.5rem;
}
</style>
