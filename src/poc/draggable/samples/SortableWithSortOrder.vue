<template>
  <article>
    <h2>Sortable List</h2>
    <p class="text-info">
      link:
      <a href="https://github.com/SortableJS/Vue.Draggable">
        https://github.com/SortableJS/Vue.Draggable
      </a>
    </p>
    <div class="row">
      <div class="col-md-6">
        <h3>Sorted list</h3>
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
          <li
            v-for="item in sortedItems"
            :key="item.id"
            class="list-group-item"
          >
            {{ item.title }}
          </li>
        </draggable>
      </div>
      <div class="col-md-6">
        <h3>Actual list</h3>
        <ul class="list-group">
          <li v-for="item in items" :key="item.id" class="list-group-item">
            {{ item.title }} | sortOrder: {{ item.sortOrder }}
          </li>
        </ul>
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
      items: []
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
      this.start = oldIndex;
      this.end = newIndex;
      this.move(oldIndex, newIndex);
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
.list-group-item {
  cursor: move;
}

.ghost {
  background: #c8ebfb;
}
</style>
