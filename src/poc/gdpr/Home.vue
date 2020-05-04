<template>
  <section>
    <h2>GDPR</h2>

    <ul class="nav nav-tabs">
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

    <div class="p-3">
      <router-view></router-view>
    </div>
  </section>
</template>