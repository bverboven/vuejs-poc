<template>
  <article>
    <h2>Draggable</h2>
    <p class="text-info">
      link:
      <a href="https://github.com/IsraelZablianov/draggable-vue-directive">
        https://github.com/IsraelZablianov/draggable-vue-directive
      </a>
    </p>
    <div
      v-draggable="draggableValue"
      class="draggable"
      :class="{ dragging }"
      ref="draggable"
    >
      <p><strong>Drag me!</strong></p>
      <dl class="row mb-0">
        <dt class="col-6">left</dt>
        <dd class="col-6">{{ myPos.left }}px</dd>
        <dt class="col-6">top</dt>
        <dd class="col-6">{{ myPos.top }}px</dd>
      </dl>
    </div>
  </article>
</template>

<script>
import { Draggable } from "draggable-vue-directive";
import { debounce } from "lodash";

export default {
  directives: {
    Draggable
  },
  data() {
    return {
      dragging: false,
      myPos: { left: 0, top: 0 },
      draggableValue: {
        onPositionChange: this.onDragChange,
        onDragStart: this.onDragStart,
        onDragEnd: this.onDragEnd
      }
    };
  },
  methods: {
    onDragStart() {
      this.dragging = true;
    },
    onDragEnd() {
      this.dragging = false;
    },
    onDragChange: debounce(function(moved, pos) {
      this.setPosition(pos);
    }, 100),
    setPosition(pos) {
      if (pos) {
        this.myPos.left = Math.round(pos.left);
        this.myPos.top = Math.round(pos.top);
      }
    }
  },
  mounted() {
    const dragEl = this.$refs.draggable;
    const { left, top } = dragEl.getBoundingClientRect();
    this.setPosition({ left, top });
  }
};
</script>

<style lang="scss" scoped>
.draggable {
  padding: 1rem;
  display: inline-block;
  width: 150px;
  border: 1px dashed #333;
  cursor: move;

  &.dragging {
    opacity: 0.4;
  }
}
</style>
