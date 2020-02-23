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
      ghost-class="ghost"
      @start="dragging = true"
      @end="
        change($event);
        dragging = false;
      "
    >
      <li v-for="item in sortedItems" :key="item.id" class="list-item">
        {{ item.title }}
      </li>
    </draggable>

    <h2>Log</h2>
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
  computed: {
    // sorted by sortOrder
    sortedItems() {
      const arr = [...this.items];
      arr.sort((a, b) => a.sortOrder - b.sortOrder);
      return arr;
    }
  },
  methods: {
    change(e) {
      const oldIndex = e.oldIndex;
      const newIndex = e.newIndex;
      this.lastItem = this.sortedItems[oldIndex];
      this.start = oldIndex;
      this.end = newIndex;
      this.move(oldIndex, newIndex);
      // logging output
      this.lastItem = this.sortedItems[oldIndex];
      this.start = oldIndex;
      this.end = newIndex;
    },
    move(oldIndex, newIndex) {
      const items = [...this.sortedItems];
      const item = items[oldIndex];

      items.splice(oldIndex, 1);
      items.splice(newIndex, 0, item);
      this.items = this.items.map(item => ({
        ...item,
        sortOrder: items.indexOf(item)
      }));
    }
  },
  created() {
    this.items = Array(5)
      .fill({})
      .map((x, i) => ({
        id: i + 1,
        sortOrder: i + 1,
        title: "Item #" + (i + 1)
      }));
  },
  mounted() {
    // initial move
    this.move(3, 1);
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

.list-item {
  margin: 0.25em 0;
  padding: 0.25em;
  border: 1px dotted rgba(100, 100, 100.2);
  cursor: move;
}

.sortable-chosen {
  opacity: 1;
  background-color: #fff;
}

.ghost {
  background: #c8ebfb;
}
</style>
