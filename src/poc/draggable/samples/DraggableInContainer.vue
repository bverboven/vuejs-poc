<template>
  <article>
    <h2>Draggable in container</h2>
    <p class="text-info">
      link:
      <a href="https://github.com/IsraelZablianov/draggable-vue-directive">
        https://github.com/IsraelZablianov/draggable-vue-directive
      </a>
    </p>
    <div id="dragContainer" ref="dragContainer">
      <div
        v-draggable="draggableValue"
        id="draggable"
        :class="{ dragging }"
        ref="draggable"
      >
        <p class="drag-handle border-bottom border-dark p-2" ref="dragHandle">
          <strong>Drag handle</strong>
        </p>
        <div class="pl-2">
          <dl class="row mb-0">
            <dt class="col-6">left</dt>
            <dd class="col-6">{{ myPos.left }}px</dd>
            <dt class="col-6">top</dt>
            <dd class="col-6">{{ myPos.top }}px</dd>
          </dl>
        </div>
      </div>
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
      dragContainer: null,
      containerPosition: { left: 0, top: 0 },
      draggableValue: {
        dragHandle: null,
        boundingElement: this.dragContainer,
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
        if (this.containerPosition) {
          this.myPos.left -= Math.round(this.containerPosition.left);
          this.myPos.top -= Math.round(this.containerPosition.top);
        }
      }
    }
  },
  mounted() {
    // set bounding element
    const dragContainer = this.$refs.dragContainer;
    this.draggableValue.boundingElement = dragContainer;
    const containerRect = dragContainer.getBoundingClientRect();
    this.containerPosition = {
      left: containerRect.left,
      top: containerRect.top
    };
    // initial position
    const dragEl = this.$refs.draggable;
    const { left, top } = dragEl.getBoundingClientRect();
    this.setPosition({ left, top });
    // set handle
    const dragHandle = this.$refs.dragHandle;
    this.draggableValue.handle = dragHandle;
  }
};
</script>

<style lang="scss" scoped>
#dragContainer {
  position: relative;
  width: 100%;
  height: 50vh;
  border: 2px dashed red;
  background-color: rgba(255, 0, 0, 0.15);

  #draggable {
    position: absolute;
    left: -2px;
    top: -2px;
    display: inline-block;
    width: 150px;
    border: 1px solid #333;
    background-color: rgba(200, 200, 200, 0.25);

    &.dragging {
      opacity: 0.4;
    }
  }
}
.drag-handle {
  cursor: move;
}
</style>
