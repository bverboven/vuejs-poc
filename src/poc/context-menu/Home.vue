<template>
  <section>
    <h2>Context menu</h2>

    <article>
      <p class="text-info">
        link:
        <a
          href="https://dev.to/hunterjsbit/building-context-menu-in-vue-js-2cbn"
          >https://dev.to/hunterjsbit/building-context-menu-in-vue-js-2cbn</a
        >
      </p>

      <div
        class="context-menu-container p-2"
        @click.right.prevent="openContextMenu"
      >
        <p class="text-info">
          Right click in this box to open the context-menu
        </p>

        <button
          @click="openContextMenu"
          class="btn btn-secondary d-block mx-auto"
        >
          ... or left click this button
        </button>
      </div>
    </article>

    <context-menu :display="showContextMenu" ref="menu">
      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action">
          List item 1
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          List item 2
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          List item 3
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          List item 4
        </a>
      </div>
    </context-menu>
  </section>
</template>

<script>
import ContextMenu from "./ContextMenu";

export default {
  components: {
    ContextMenu
  },
  data() {
    return { showContextMenu: false };
  },
  methods: {
    openContextMenu(e) {
      this.$refs.menu.open(e);
    }
  }
};
</script>

<style scoped>
.context-menu-container {
  width: 100%;
  height: 25vh;
  border: 1px solid #000;
}
</style>