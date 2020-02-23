<template>
  <section>
    <ul class="nav nav-pills mb-3">
      <li class="nav-item">
        <router-link
          :to="{ name: 'sortable' }"
          class="nav-link"
          active-class="active"
          exact
        >
          Sortable
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: 'draggable' }"
          class="nav-link"
          active-class="active"
        >
          Draggable
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </section>
</template>
