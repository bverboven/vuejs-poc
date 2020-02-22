<template>
  <div
    class="autocomplete-container"
    :class="containerClass"
    :style="{ display: inline ? 'inline-block' : 'block' }"
  >
    <input
      type="text"
      autocomplete="off"
      v-model="q"
      :id="inputId"
      :list="inputId + '_list'"
      :class="inputClass"
      @input="
        clearSelection();
        onSearch();
      "
      @focus="selectedItem || onSearch()"
      @change="
        checkMatch();
        $emit('change', selectedItem);
      "
      @keydown.enter.prevent="handleSelect(selectedItem, selectedIndex)"
    />
    <datalist :id="inputId + '_list'" :class="[resultClass, itemsClass]">
      <option v-for="(item, index) in items" :key="index" :class="itemClass">
        {{ resultSelector(item) }}
      </option>
    </datalist>
  </div>
</template>

<script>
import autocompleteMixin from "./autocomplete-mixin";

export default {
  mixins: [autocompleteMixin],
  props: {
    inline: { type: Boolean, required: false, default: true }
  },
  methods: {
    // override function to compare with resultSelector, since datalist passes it's value (= resultSelector) to the inputElement
    checkMatch() {
      // check (and set selection automatically) if the input value corresponds with a value in the results
      if (this.selectedItem == null) {
        const matchedSelection = this.items.find(
          item =>
            (this.resultSelector(item) || "").toLowerCase() ===
            this.q.toLowerCase()
        );
        if (matchedSelection != null) {
          this.setSelection(matchedSelection);
        }
      }
    }
  }
};
</script>
