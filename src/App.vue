<template>
  <div id="app" class="container">
    <h1>
      <router-link :to="{ name: 'home' }">
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

  h1 {
    font-size: 1.25rem;
  }
  h2 {
    font-size: 1.1rem;
  }
  h2,
  h2 a {
    color: #333;
  }
  .vue-logo {
    height: 1.5rem;
    float: left;
    margin-right: 0.5rem;
  }

  header {
    border: 2px dotted transparent;

    .nav-link {
      text-transform: capitalize;
    }
  }
}
</style>
