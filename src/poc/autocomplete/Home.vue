<template>
  <div>
    <h2>
      <a href="https://autocomplete.trevoreyre.com/" target="_blank">
        Autocomplete (Trevoreyre)
      </a>
    </h2>
    <Autocomplete1 />
    <h2>
      <a
        href="https://alligator.io/vuejs/vue-autocomplete-component/"
        target="_blank"
      >
        Autocomplete (BV)
      </a>
    </h2>
    <label for="qFruit">Search</label>
    <Autocomplete2
      input-id="qFruit"
      v-model="selectedFruit"
      :maxResults="5"
      :search="searchFruit"
    >
      <template v-slot:prepend>
        <span class="input-group-text">
          <span>{{ selectedFruit || "nothing yet" }}</span>
        </span>
      </template>
    </Autocomplete2>
    <h2>Autocomplete (BV)</h2>
    <label for="qCountry">Search</label>
    <Autocomplete2
      input-id="qCountry"
      v-model="selectedCountry"
      :search="searchCountries"
      :resultSelector="x => (x ? x.title + ' (' + x.code + ')' : '')"
      :valueSelector="x => (x ? x.title : '')"
      @input="onChangeCountry"
      ref="countrySelector"
    />
    <label>Selected:</label>
    <span>{{ selectedCountryTitle }}</span>
  </div>
</template>

<script>
import Autocomplete1 from "./Autocomplete-trevoreyre.vue";
import Autocomplete2 from "./Autocomplete-bv";

import countries from "./data/countries.js";
const fruits =
  "Apple,Banana,Orange,Mango,Pear,Peach," +
  "Grape,Tangerine,Pineapple".split(",");

export default {
  components: {
    Autocomplete1,
    Autocomplete2
  },
  data() {
    return {
      selectedCountry: null,
      selectedFruit: null,
      countries: [],
      fruit: []
    };
  },
  computed: {
    selectedCountryTitle() {
      return this.selectedCountry ? this.selectedCountry.title : "no selection";
    }
  },
  methods: {
    searchCountries(input) {
      console.debug("Search", input);
      return this.countries.filter(
        c => c.title.toLowerCase().indexOf(input.toLowerCase()) === 0
      );
    },
    searchFruit(input) {
      console.debug("Search", input);
      return this.fruit.filter(
        x => x.toLowerCase().indexOf(input.toLowerCase()) === 0
      );
    },
    onChangeCountry(item) {
      this.selectedCountry = item;
    }
  },
  created() {
    this.countries = countries;
    this.fruit = fruits;
  }
};
</script>
