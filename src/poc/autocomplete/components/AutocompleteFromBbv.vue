<template>
  <div
    class="autocomplete-container"
    :style="{ display: inline ? 'inline-block' : 'block' }"
  >
    <input
      autocomplete="off"
      type="text"
      :id="inputId"
      :class="inputClass"
      v-model="q"
      @input="
        clearSelection();
        onSearch();
      "
      @focus="selectedItem || onSearch()"
      @blur="closeGently"
      @change="
        checkMatch();
        $emit('change', selectedItem);
      "
      @keydown.down="moveSelection(1)"
      @keydown.up="moveSelection(-1)"
      @keydown.enter.prevent="handleSelect(selectedItem, selectedIndex)"
      ref="inputEl"
    />
    <div
      class="autocomplete-items"
      :class="resultClass"
      :style="{ visibility: isOpen ? 'visible' : 'hidden' }"
    >
      <ul :class="itemsClass">
        <li
          v-for="(item, i) in items"
          :key="i"
          @click="handleSelect(item, i)"
          class="autocomplete-item"
          :class="[itemClass, { selected: item == selectedItem }]"
        >
          {{ label(item) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import debounceToPromise from "@/utils/debounce-to-promise";

export default {
  props: {
    value: [String, Object],
    search: { type: Function, required: true },
    resultSelector: { type: Function, required: false, default: x => x },
    valueSelector: {
      type: Function,
      required: false,
      default: function(item) {
        return this.resultSelector ? this.resultSelector(item) : item;
      }
    },
    inputId: String,
    inline: { type: Boolean, required: false, default: false },
    containerClass: { type: String, required: false, default: "" },
    inputClass: { type: String, required: false, default: "" },
    resultClass: { type: String, required: false, default: "" },
    itemsClass: { type: String, required: false, default: "" },
    itemClass: { type: String, required: false, default: "" },
    maxResults: { type: Number, required: false, default: 10 },
    debounceTime: { type: Number, required: false, defaults: 100 }
  },
  data() {
    return {
      q: "",
      selectedItem: null,
      selectedIndex: -1,
      items: [],
      isOpen: false
    };
  },
  computed: {
    label() {
      return item => this.resultSelector(item);
    }
  },
  methods: {
    async onSearch() {
      this.isOpen = true;
      this.items = await this.debouncedSearch(this.q || "").then(items =>
        items.slice(0, this.maxResults)
      );
      this.selectedIndex = this.items.indexOf(this.selectedItem);
    },
    closeGently: function() {
      setTimeout(() => (this.isOpen = false), 250);
    },
    checkMatch() {
      // check (and set selection automatically) if the input value corresponds with a value in the results
      if (this.selectedItem == null) {
        const matchedSelection = this.items.find(
          item =>
            (this.valueSelector(item) || "").toLowerCase() ===
            this.q.toLowerCase()
        );
        if (matchedSelection != null) {
          this.setSelection(matchedSelection);
        }
      }
    },
    handleSelect(item, index) {
      this.isOpen = false;
      this.setSelection(item, item ? index : -1);
    },
    setSelection(item, index) {
      if (
        item === this.selectedItem ||
        this.valueSelector(item) === this.valueSelector(this.selectedItem)
      ) {
        return;
      }

      if (item && (index == null || index < 0)) {
        index = this.items.indexOf(item);
      } else if (!item && index >= 0) {
        item = this.items[index];
      }
      this.selectedItem = item;
      this.selectedIndex = index;
      // set q to the corresponding value for the resulting item
      this.q = this.valueSelector(item);
      this.$emit("input", item);
    },
    moveSelection(step) {
      const newSelectedIndex = this.selectedIndex + step;
      const newSelectedItem = this.items[newSelectedIndex];
      if (newSelectedIndex >= 0 && newSelectedIndex < this.items.length) {
        this.setSelection(newSelectedItem, newSelectedIndex);
      }
    },
    clearSelection() {
      this.selectedIndex = -1;
      this.selectedItem = null;
      this.$emit("input", null);
    },
    reset() {
      this.clearSelection();
      this.q = "";
    }
  },
  watch: {
    value(newVal) {
      this.setSelection(newVal);
    }
  },
  created() {
    this.debouncedSearch = debounceToPromise(this.search, this.debounceTime);
  },
  mounted() {
    if (this.value != null) {
      this.setSelection(this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.autocomplete-container {
  position: relative;

  .autocomplete-items {
    position: absolute;
    z-index: 1;
    width: 100%;
    visibility: hidden;
    // pointer-events: none;
    top: 100%;
    background-color: #fff;

    ul {
      padding: 0;
      margin: 0;
      border: 1px solid #eeeeee;
      //height: 120px;
      overflow: auto;

      li {
        list-style: none;
        text-align: left;
        padding: 4px 2px;
        cursor: pointer;

        &.selected,
        &:hover {
          background-color: #4aae9b;
          color: white;
        }
      }
    }
  }
}
</style>
