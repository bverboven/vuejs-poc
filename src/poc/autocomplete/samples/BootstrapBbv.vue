<template>
  <article>
    <h2>Autocomplete (countries)</h2>
    <label for="qCountry">Search</label>
    <Autocomplete
      input-id="qCountry"
      v-model="selectedCountry"
      :search="searchCountries"
      :valueSelector="valueSelector"
      :maxResults="maxResults"
      :debounceTime="250"
      @input="onChangeCountry"
      ref="countrySelector"
    >
      <!-- slot for displaying result items -->
      <template v-slot:resultItem="result">
        <span
          class="d-block"
          :class="{
            'bg-light': (result.q || '').toUpperCase() == result.item.code
          }"
        >
          <b>{{ result.item.title }}</b>
          <br />
          <span class="ml-3 d-block">
            code: {{ result.item.code }}<br />
            region: {{ result.item.region }}
          </span>
        </span>
      </template>

      <!-- input prepend group -->
      <template v-slot:prepend>
        <span class="input-group-text">
          Search
        </span>
        <select v-model="maxResults" class="form-control">
          <option :value="3">3 results</option>
          <option :value="5">5 results</option>
          <option :value="10">10 results</option>
          <option :value="20">20 results</option>
        </select>
      </template>

      <!-- input append group -->
      <template v-slot:append>
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
    <span v-if="selectedCountry != null">
      {{ selectedCountry.title }} <b>({{ selectedCountry.code }})</b>
    </span>
    <span v-show="selectedCountry == null">
      nothing yet
    </span>

    <Info />
  </article>
</template>

<script>
import Autocomplete from "../components/AutocompleteWithBootstrap";
import Info from "../components/Info";
import countries from "../data/countries.js";

const getCountries = async () => countries;

export default {
  components: { Autocomplete, Info },
  props: {
    countryCode: { type: String, required: false }
  },
  data() {
    return {
      selectedCountry: null,
      countries: [],
      maxResults: 3
    };
  },
  computed: {
    selectedCountryTitle() {
      return this.selectedCountry ? this.selectedCountry.title : "";
    }
  },
  methods: {
    valueSelector: x => (x ? x.title : ""),
    async searchCountries(input) {
      const normalizedInput = input.toLowerCase();
      const countries = await this.getCountries();
      return countries
        .filter(c => c.code.toLowerCase() === normalizedInput)
        .concat(
          countries.filter(
            c =>
              c.code.toLowerCase() !== normalizedInput &&
              (c.title.toLowerCase().indexOf(normalizedInput) === 0 ||
                c.code.toLowerCase().indexOf(normalizedInput) === 0)
          )
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
