<template>
  <div id="app" class="container">
    <header>
      <h1>
        <a href="https://vuejs.org/">
          <img alt="Vue logo" src="./assets/logo.png" class="vue-logo" />
        </a>
        <router-link :to="{ name: 'home' }">
          Proof of Concept
        </router-link>
      </h1>
      <GitHub />
    </header>

    <main>
      <router-view />
    </main>

    <footer></footer>

    <div class="app-cookie">
      <CookieLaw storage-name="app-cookie:accepted" />
    </div>
  </div>
</template>

<script>
import GitHub from "@/components/GitHub";
import CookieLaw from "vue-cookie-law";

export default {
  components: {
    GitHub,
    CookieLaw
  }
};
</script>
