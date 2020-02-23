<template>
  <div>
    <h2>Autocomplete (countries)</h2>
    <label for="qCountry">Search</label>
    <Autocomplete
      input-id="qCountry"
      v-model="selectedCountry"
      :search="searchCountries"
      :resultSelector="x => (x ? x.title + ' (' + x.code + ')' : '')"
      :valueSelector="x => (x ? x.title : '')"
      :maxResults="maxResults"
      :debounceTime="250"
      @input="onChangeCountry"
      ref="countrySelector"
    >
      <template v-slot:prepend>
        <span class="input-group-text">
          Search
        </span>
      </template>
      <template v-slot:append>
        <select v-model="maxResults" class="form-control">
          <option :value="3">3 results</option>
          <option :value="5">5 results</option>
          <option :value="10">10 results</option>
          <option :value="20">20 results</option>
        </select>
        <button
          type="button"
          class="btn btn-outline-secondary bg-light"
          @click="reset"
        >
          X
        </button>
      </template>
    </Autocomplete>
    <label class="mr-2">Selected:</label>
    <span>{{ selectedCountryTitle || "nothing yet" }}</span>
  </div>
</template>

<script>
import Autocomplete from "../components/AutocompleteWithBootstrap";
import countries from "../data/countries.js";

const getCountries = async () => countries;

export default {
  components: { Autocomplete },
  props: {
    countryCode: { type: String, required: false }
  },
  data() {
    return {
      selectedCountry: null,
      countries: [],
      maxResults: 5
    };
  },
  computed: {
    selectedCountryTitle() {
      return this.selectedCountry ? this.selectedCountry.title : "";
    }
  },
  methods: {
    async searchCountries(input) {
      const normalizedInput = input.toLowerCase();
      return (await this.getCountries()).filter(
        c =>
          c.title.toLowerCase().indexOf(normalizedInput) === 0 ||
          c.code.toLowerCase().indexOf(normalizedInput) === 0
      );
    },
    onChangeCountry(item) {
      this.selectedCountry = item;
    },
    reset() {
      this.selectedCountry = null;
      this.$refs.countrySelector.reset();
    }
  },
  created() {
    this.getCountries = getCountries;
  },
  async mounted() {
    const country = (await this.getCountries()).find(
      c => this.countryCode && c.code === this.countryCode.toUpperCase()
    );
    if (country) {
      //this.$refs.countrySelector.setSelection(country);
      this.selectedCountry = country;
    }
  }
};
</script>
