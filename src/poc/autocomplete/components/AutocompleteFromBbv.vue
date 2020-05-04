<template>
  <div
    class="autocomplete-container"
    :class="containerClass"
    :style="{ display: inline ? 'inline-block' : 'block' }"
  >
    <input
      type="text"
      autocomplete="off"
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
          {{ resultSelector(item) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "./autocomplete.scss";
import autocompleteMixin from "./autocomplete-mixin";

export default {
  mixins: [autocompleteMixin]
};
</script>
