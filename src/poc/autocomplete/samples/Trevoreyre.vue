<template>
  <div>
    <h2>Autocomplete (Trevoreyre)</h2>
    <p class="text-info">
      link:
      <a href="https://autocomplete.trevoreyre.com/" target="_blank">
        https://autocomplete.trevoreyre.com
      </a>
    </p>
    <div>
      <label for="q">Search </label>
      <Autocomplete
        id="q"
        :search="search"
        :debounceTime="250"
        @submit="select"
      />
    </div>
    <div>
      <label class="mr-2">Selected: </label>
      <span>{{ selected || "no selection" }}</span>
    </div>
  </div>
</template>

<script>
// css
import "@trevoreyre/autocomplete-vue/dist/style.css";
// component
import Autocomplete from "@trevoreyre/autocomplete-vue";
// data
import countries from "../data/countries.js";

export default {
  components: { Autocomplete },
  data() {
    return {
      selected: null
    };
  },
  methods: {
    async getCountriesAsync() {
      return countries;
    },
    async search(input) {
      if (input.length < 1) {
        return [];
      }
      return this.getCountriesAsync().then(items => {
        return items
          .filter(c => c.title.toLowerCase().startsWith(input.toLowerCase()))
          .map(c => `${c.title} (${c.code})`);
      });
    },
    select(value) {
      this.selected = value;
    }
  }
};
</script>
