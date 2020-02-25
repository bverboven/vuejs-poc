<template>
  <div id="app" class="container">
    <h1>
      <a href="https://vuejs.org/" target="_blank">
        <img alt="Vue logo" src="./assets/logo.png" class="vue-logo" />
      </a>
      <router-link :to="{ name: 'home' }">
        Proof of Concept
      </router-link>
    </h1>

    <router-view />

    <div class="app-cookie">
      <CookieLaw storage-name="app-cookie:accepted" />
    </div>
  </div>
</template>

<script>
import CookieLaw from "vue-cookie-law";

export default {
  components: {
    CookieLaw
  }
};
</script>
