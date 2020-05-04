<template>
  <section>
    <h2>Calendar</h2>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link :to="{ name: 'nathanReyesCalendar' }" class="nav-link" active-class="active">Nathan Reyes</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'manukMinasyanCalendar' }" class="nav-link" active-class="active">Manuk Minasyan</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'richardTallentCalendar' }" class="nav-link" active-class="active">Richard Tallent</router-link>
      </li>
    </ul>

    <div class="p-3">
      <router-view></router-view>
    </div>
  </section>
</template>
