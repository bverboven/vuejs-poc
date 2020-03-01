<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li
        v-for="item in items"
        :key="item.name"
        class="breadcrumb-item text-capitalize"
        :class="{ active: item.active }"
      >
        <router-link :to="item.route" v-if="!item.active || !item.route">
          {{ item.title }}
        </router-link>
        <template v-else>{{ item.title }}</template>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>