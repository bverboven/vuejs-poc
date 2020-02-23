<template>
  <header class="mt-2 mb-2" :style="{ borderColor: color }">
    <ul class="nav">
      <li class="nav-item" v-for="(item, index) in items" :key="index">
        <router-link
          :to="{ path: item.title }"
          active-class="active"
          class="nav-link"
        >
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  props: {
    items: { type: Array, required: true },
    color: { type: String, required: false, default: "blue" }
  }
};
</script>

<style lang="scss" scoped>
header {
  border: 2px dotted transparent;

  .nav-link {
    text-transform: capitalize;
  }
}
</style>
