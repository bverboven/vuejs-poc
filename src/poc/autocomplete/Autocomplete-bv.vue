<template>
  <form>
    <div class="autocomplete-container">
      <div class="input-group">
        <div class="input-group-prepend">
          <slot name="prepend"></slot>
        </div>
        <input
          autocomplete="off"
          type="text"
          :id="inputId"
          ref="inputEl"
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
        />
        <div
          class="autocomplete-items"
          :style="{ visibility: isOpen ? 'visible' : 'hidden' }"
        >
          <ul>
            <li
              v-for="(item, i) in items"
              :key="i"
              @click="handleSelect(item, i)"
              class="autocomplete-item"
              :class="{ selected: item == selectedItem }"
            >
              {{ label(item) }}
            </li>
          </ul>
        </div>
        <div class="input-group-append">
          <slot name="append">
            <span class="input-group-text">Append</span>
          </slot>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { debounce } from "lodash";

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
    inputClass: { type: String, required: false, default: "form-control" },
    maxResults: { type: Number, required: false, default: 10 }
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
    onSearch: debounce(async function() {
      this.isOpen = true;
      this.items = await this.search(this.q || "").slice(0, this.maxResults);
      this.selectedIndex = this.items.indexOf(this.selectedItem);
    }, 250),
    closeGently: debounce(function() {
      this.isOpen = false;
    }, 250),
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
      if (item && (index == null || index < 0)) {
        index = this.items.indexOf(item);
      } else if (!item && index >= 0) {
        item = this.items[index];
      }
      this.selectedItem = item;
      this.selectedIndex = index;
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
      console.debug("ClearSelection");
      this.selectedIndex = -1;
      this.selectedItem = null;
      this.$emit("input", null);
    }
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
