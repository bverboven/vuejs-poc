<template>
  <section>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link
          :to="{ name: 'basicDraggable' }"
          class="nav-link"
          active-class="active"
          exact
        >
          Draggable
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: 'draggableInContainer' }"
          class="nav-link"
          active-class="active"
          exact
        >
          Draggable (Container)
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
          :to="{ name: 'sortableWithSortOrder' }"
          class="nav-link"
          active-class="active"
          exact
        >
          Sortable (sortOrder)
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
    
    <div class="p-3">
      <router-view></router-view>
    </div>
  </section>
</template>
