<template>
  <article>
    <h2>Sortable List</h2>
    <p class="text-info">
      link:
      <a href="https://github.com/SortableJS/Vue.Draggable" target="_blank">
        https://github.com/SortableJS/Vue.Draggable
      </a>
    </p>
    Dragging: {{ dragging }}
    <draggable
      tag="ul"
      class="list-group mb-3"
      ghost-class="ghost"
      @start="dragging = true"
      @end="
        change($event);
        dragging = false;
      "
    >
      <li v-for="item in items" :key="item.id" class="list-group-item">
        {{ item.title }}
      </li>
    </draggable>

    <h2>Output</h2>
    <div v-if="lastItem">
      Moved {{ lastItem.title }}
      <span v-show="start >= 0"> from position {{ start + 1 }} </span>
      <span v-show="end >= 0"> to position {{ end + 1 }} </span>
    </div>
  </article>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: { draggable },
  data() {
    return {
      dragging: false,
      items: [],
      lastItem: null,
      start: -1,
      end: -1
    };
  },
  methods: {
    change(e) {
      const oldIndex = e.oldIndex;
      const newIndex = e.newIndex;
      this.start = oldIndex;
      this.end = newIndex;
      this.setOutput(oldIndex, newIndex);
      this.move(oldIndex, newIndex);
    },
    move(oldIndex, newIndex) {
      const items = [...this.items];
      const item = items[oldIndex];

      items.splice(oldIndex, 1);
      items.splice(newIndex, 0, item);
      this.items = items;
    },
    setOutput(oldIndex, newIndex) {
      this.lastItem = this.items[oldIndex];
      this.start = oldIndex;
      this.end = newIndex;
    }
  },
  created() {
    this.items = Array(5)
      .fill({})
      .map((x, i) => ({
        id: i + 1,
        title: "Item #" + (i + 1)
      }));
  }
};
</script>

<style scoped>
.list-group-item {
  cursor: move;
}

.ghost {
  opacity: 1;
  background: #c8ebfb;
}
</style>
