<template>
  <div class="autocomplete-container" :class="containerClass">
    <div class="input-group">
      <div class="input-group-prepend">
        <slot name="prepend"></slot>
      </div>
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
            <slot name="resultItem" :item="item" :q="q">
              <span v-html="resultSelector(item)"></span>
            </slot>
          </li>
        </ul>
      </div>
      <div class="input-group-append">
        <slot name="append"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import "./autocomplete.scss";
import autocompleteMixin from "./autocomplete-mixin";

export default {
  mixins: [autocompleteMixin],
  props: {
    containerClass: {
      type: String,
      required: false,
      default: "form-group"
    },
    inputClass: {
      type: String,
      required: false,
      default: "form-control"
    }
  }
};
</script>
