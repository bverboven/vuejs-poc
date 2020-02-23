<template>
  <div>
    <h2>Autocomplete (fruit)</h2>
    <div class="row">
      <label for="qFruit" class="col-3">Search</label>
      <div class="col-9">
        <Autocomplete
          input-id="qFruit"
          v-model="selectedCountry"
          :maxResults="maxResults"
          :search="searchCountries"
          :resultSelector="x => (x ? x.title + ' (' + x.code + ')' : '')"
          :valueSelector="x => (x ? x.title : '')"
          :debounceTime="250"
          ref="countrySelector"
        />
        <button
          type="button"
          @click="$refs.countrySelector.reset()"
          v-show="selectedCountry"
        >
          Reset
        </button>
      </div>
    </div>
    <div class="row">
      <label class="col-3">Maximum results</label>
      <div class="col-9">
        <select v-model="maxResults">
          <option :value="3">3 results</option>
          <option :value="5">5 results</option>
          <option :value="10">10 results</option>
          <option :value="20">20 results</option>
        </select>
      </div>
    </div>
    <div class="row">
      <label class="col-3">Selected: </label>
      <div class="col-9">
        {{ selectedCountryTitle || "nothing yet" }}
      </div>
    </div>
  </div>
</template>

<script>
import Autocomplete from "../components/AutocompleteWithDatalist";
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
    console.debug("Created DataList", { cmp: this });
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
