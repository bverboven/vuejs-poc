<template>
  <div class="home">
    <div class="list-group">
      <router-link :to="{ name: 'autocomplete' }" class="list-group-item">
        Autocomplete
      </router-link>
      <router-link :to="{ name: 'draggable' }" class="list-group-item">
        Draggable
      </router-link>
      <router-link :to="{ name: 'carousel' }" class="list-group-item">
        Carousel
      </router-link>
      <router-link :to="{ name: 'multipleViews' }" class="list-group-item">
        Multiple views
      </router-link>
    </div>
  </div>
</template>

<style scoped>
a:hover {
  text-decoration: none;
}
</style>
