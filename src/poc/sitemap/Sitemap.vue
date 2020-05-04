<template>
  <ul>
    <li v-for="item in items" :key="item.name">
      <router-link :to="item.route">{{ item.title }}</router-link>
      <Sitemap
        :items="item.children"
        v-if="item.children && item.children.length > 0"
      />
    </li>
  </ul>
</template>

<script>
import Sitemap from "./Sitemap";

export default {
  name: "Sitemap",
  components: {
    Sitemap
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>
