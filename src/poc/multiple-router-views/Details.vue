<template>
  <iframe :src="item.url"></iframe>
</template>

<script>
export default {
  props: {
    item: { type: Object, required: true }
  }
};
</script>

<style scoped>
iframe {
  border: 0;
  width: 100%;
  height: 50vh;
}
</style>
