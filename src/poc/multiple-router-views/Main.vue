<template>
  <article :style="{ borderColor: color }">
    <router-view></router-view>
  </article>
</template>

<script>
export default {
  props: { color: String }
};
</script>

<style scoped>
article {
  border: 2px dotted transparent;
  padding: 0.5rem;
}
</style>
