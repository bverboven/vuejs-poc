<template>
  <article>
    <h2>Autocomplete (fruit)</h2>
    <p class="text-info">
      Loosely based on
      <a
        href="https://alligator.io/vuejs/vue-autocomplete-component/"
       
      >
        https://alligator.io/vuejs/vue-autocomplete-component
      </a>
    </p>
    <div class="row">
      <label for="qFruit" class="col-3">Search</label>
      <div class="col-9">
        <Autocomplete
          input-id="qFruit"
          v-model="selectedFruit"
          :maxResults="5"
          :search="searchFruit"
          :inline="true"
          ref="fruitSelector"
        />
        <button
          type="button"
          @click="$refs.fruitSelector.reset()"
          v-show="selectedFruit"
        >
          Reset
        </button>
      </div>
    </div>
    <div class="row">
      <label class="col-3">Selected: </label>
      <div class="col-9">{{ selectedFruit || "nothing yet" }}</div>
    </div>
  </article>
</template>

<script>
import Autocomplete from "../components/AutocompleteFromBbv";

const fruit = "Apple,Banana,Orange,Mango,Pear,Peach,Grape,Tangerine,Pineapple".split(
  ","
);

export default {
  components: { Autocomplete },
  data() {
    return {
      selectedFruit: null,
      fruit: []
    };
  },
  methods: {
    searchFruit(input) {
      return this.fruit.filter(
        x => x.toLowerCase().indexOf(input.toLowerCase()) === 0
      );
    }
  },
  created() {
    this.fruit = fruit;
  }
};
</script>
