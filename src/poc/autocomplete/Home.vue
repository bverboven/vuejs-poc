<template>
  <section>
    <ul class="nav nav-pills mb-3">
      <li class="nav-item">
        <router-link
          :to="{ name: 'autocomplete' }"
          class="nav-link"
          active-class="active"
          exact
        >
          Home
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: 'trevoreyreAutocomplete' }"
          class="nav-link"
          active-class="active"
        >
          Trevoreyre
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: 'basicAutocomplete' }"
          class="nav-link"
          active-class="active"
        >
          Basic (BBV)
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: 'bootstrapAutocomplete' }"
          class="nav-link"
          active-class="active"
        >
          Bootstrap (BBV)
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: 'datalistAutocomplete' }"
          class="nav-link"
          active-class="active"
        >
          DataList
        </router-link>
      </li>
    </ul>

    <div class="list-group" v-if="$route.name == 'autocomplete'">
      <router-link
        :to="{ name: 'trevoreyreAutocomplete' }"
        active-class="active"
        class="list-group-item"
      >
        Trevoreyre
      </router-link>
      <router-link
        :to="{ name: 'basicAutocomplete' }"
        active-class="active"
        class="list-group-item"
      >
        Basic (BBV)
      </router-link>
      <div class="list-group-item">
        <router-link
          :to="{ name: 'bootstrapAutocomplete' }"
          active-class="active"
        >
          Bootstrap (BBV)
        </router-link>
        |
        <router-link
          :to="{ name: 'bootstrapAutocomplete', params: { countryCode: 'BE' } }"
          active-class="active"
        >
          Belgium
        </router-link>
        |
        <router-link
          :to="{ name: 'bootstrapAutocomplete', params: { countryCode: 'CH' } }"
          active-class="active"
        >
          Switzerland
        </router-link>
      </div>
      <router-link
        :to="{ name: 'datalistAutocomplete' }"
        active-class="active"
        class="list-group-item"
      >
        Datalist
      </router-link>
    </div>

    <article>
      <router-view></router-view>
    </article>
  </section>
</template>