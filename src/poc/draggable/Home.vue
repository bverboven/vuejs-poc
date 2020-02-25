<template>
  <section>
    <ul class="nav nav-pills mb-3">
      <li class="nav-item">
        <router-link
          :to="{ name: 'basicDraggable' }"
          class="nav-link"
          active-class="active"
          exact
        >
          Basic
        </router-link>
      </li>
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
          :to="{ name: 'movable' }"
          class="nav-link"
          active-class="active"
        >
          Movable
        </router-link>
      </li>
    </ul>

    <router-view></router-view>
  </section>
</template>
