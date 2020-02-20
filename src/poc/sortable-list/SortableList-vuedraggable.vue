<template>
  <div>
    DRAGGING: {{ dragging }}
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
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: { draggable },
  data() {
    return {
      dragging: false,
      items: [],
      changes: 0
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
      console.debug("Changed list", {
        evt: e,
        items: this.items.map(x => x.title)
      });
      const oldIndex = e.oldIndex;
      const newIndex = e.newIndex;
      this.move(oldIndex, newIndex);
    },
    move(oldIndex, newIndex) {
      console.debug("Moving", { oldIndex, newIndex });
      const items = [...this.sortedItems];
      const item = items[oldIndex];

      items.splice(oldIndex, 1);
      items.splice(newIndex, 0, item);
      this.items = this.items.map(item => ({
        ...item,
        sortOrder: items.indexOf(item)
      }));
      this.changes++;

      console.debug("Moved", {
        items: this.items.map(x => x.title + " (" + x.sortOrder + ")")
      });
    }
  },
  mounted() {
    this.items = Array(5)
      .fill({})
      .map((x, i) => ({
        id: i + 1,
        sortOrder: i + 1,
        title: "Item #" + (i + 1)
      }));
    console.debug("Mounted SortableList", { component: this });
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
