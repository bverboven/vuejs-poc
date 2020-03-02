<template>
  <section>
    <h2>Calendar</h2>
    <ul class="nav nav-pills mb-3">
      <li class="nav-item">
        <router-link :to="{ name: 'nathanReyesCalendar' }" class="nav-link">Nathan Reyes</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'manukMinasyanCalendar' }" class="nav-link">Manuk Minasyan</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'richardTallentCalendar' }" class="nav-link">Richard Tallent</router-link>
      </li>
    </ul>

    <router-view></router-view>
  </section>
</template>
