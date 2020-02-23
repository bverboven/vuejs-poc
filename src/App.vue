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