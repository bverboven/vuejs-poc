<template>
  <section>
    <h2>GDPR</h2>

    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link
          :to="{ name: 'vueCookieLaw' }"
          class="nav-link"
          active-class="active"
        >
          Default
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: 'vueCookieLawSlots' }"
          class="nav-link"
          active-class="active"
        >
          Slots
        </router-link>
      </li>
    </ul>

    <router-view></router-view>
  </section>
</template>