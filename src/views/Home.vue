<template>
  <div class="home">
    <ul>
      <li>
        <router-link :to="{ name: 'Autocomplete' }">Autocomplete</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'SortableList' }">Sortable list</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Carousel' }">Carousel</router-link>
      </li>
    </ul>
  </div>
</template>
