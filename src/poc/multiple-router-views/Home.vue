<template>
  <section>
    <h1>Multiple router views (with props)</h1>
    <ul class="nav nav-pills">
      <li class="nav-item fruit">
        <router-link
          :to="{ name: 'fruit' }"
          class="nav-link"
          active-class="active"
          >Fruit</router-link
        >
      </li>
      <li class="nav-item vegetables">
        <router-link
          :to="{ name: 'vegetables' }"
          class="nav-link"
          active-class="active"
          >Vegetables</router-link
        >
      </li>
    </ul>
    <router-view name="header" />
    <router-view name="main" />
  </section>
</template>

<style scoped>
.fruit .nav-link.active {
  background-color: red;
}
.vegetables .nav-link.active {
  background-color: green;
}
</style>
