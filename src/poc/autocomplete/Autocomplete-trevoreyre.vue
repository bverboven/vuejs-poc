<template>
  <div>
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
      <label>Selected: </label>
      <span>{{ selected }}</span>
    </div>
  </div>
</template>

<script>
// css
import "@trevoreyre/autocomplete-vue/dist/style.css";
// component
import Autocomplete from "@trevoreyre/autocomplete-vue";
// data
import countries from "./data/countries.js";

export default {
  components: { Autocomplete },
  data() {
    return {
      selected: null
    };
  },
  methods: {
    async search(input) {
      console.debug("Search", { args: arguments });
      if (input.length < 1) {
        return [];
      }
      return Promise.resolve(countries).then(items => {
        return items
          .filter(c => c.title.toLowerCase().startsWith(input.toLowerCase()))
          .map(c => `${c.title} (${c.code})`);
      });
    },
    select(value) {
      console.debug("Selected", { args: arguments });
      this.selected = value;
    }
  }
};
</script>
