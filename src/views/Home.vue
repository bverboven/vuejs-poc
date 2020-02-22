<template>
  <div class="home">
    <div class="list-group">
      <router-link :to="{ name: 'autocomplete' }" class="list-group-item">
        Autocomplete
      </router-link>
      <router-link :to="{ name: 'sortableList' }" class="list-group-item">
        Sortable list
      </router-link>
      <router-link :to="{ name: 'carousel' }" class="list-group-item">
        Carousel
      </router-link>
      <router-link :to="{ name: 'multpleViews' }" class="list-group-item">
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
