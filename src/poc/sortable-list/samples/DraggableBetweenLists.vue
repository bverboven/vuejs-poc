<template>
  <article>
    <h2>Dragging between Lists</h2>
    <p class="text-info">
      link:
      <a
        href="https://sortablejs.github.io/Vue.Draggable/#/two-lists"
        target="_blank"
      >
        https://sortablejs.github.io/Vue.Draggable/#/two-lists
      </a>
    </p>
    <div class="row">
      <div class="col-4">
        <h3>List 1</h3>
        <draggable
          class="list-group"
          :class="{ empty: list1.length <= 1 }"
          :list="list1"
          group="people"
          @change="log('list1', $event)"
        >
          <div class="list-group-item" v-for="item in list1" :key="item.name">
            {{ item.name }}
          </div>
        </draggable>
      </div>
      <div class="col-2"><strong>&lt; - &gt;</strong></div>
      <div class="col-4">
        <h3>List 2</h3>
        <div
          @mouseover="list2Hovering = true"
          @mouseout="list2Hovering = false"
        >
          <draggable
            class="list-group"
            :class="{ empty: list2.length <= 1 }"
            :list="list2"
            group="people"
            @change="log('list2', $event)"
          >
            <div class="list-group-item" v-for="item in list2" :key="item.name">
              {{ item.name }}
            </div>
          </draggable>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: { draggable },
  data() {
    return {
      list1: [],
      list2: [],
      list2Hovering: false
    };
  },
  methods: {
    log: function(listId, evt) {
      console.debug(listId, { evt });
    }
  },
  created() {
    this.list1 = [
      { id: 1, name: "John" },
      { id: 1, name: "Robert" },
      { id: 1, name: "Rick" },
      { id: 1, name: "Jane" }
    ];
  }
};
</script>

<style lang="scss" scoped>
.list-group {
  min-height: 6rem;
  cursor: move;

  &.empty {
    border: 1px dashed rgba(100, 100, 100, 0.5);
    border-radius: 5px;
    //pointer-events: none;
  }
}
</style>
