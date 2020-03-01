<template>
  <div class="home">
    <div class="list-group">
      <router-link
        v-for="section in sections"
        :key="section.name"
        :to="{ name: section.name }"
        class="list-group-item"
      >
        {{ section.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: []
    };
  },
  mounted() {
    // autogenerate sections, based on routes with a meta-property
    this.sections = this.$router.options.routes
      .filter(r => r.meta != null)
      .map(r => ({
        title: r.meta.title,
        name: r.name
      }));
  }
};
</script>

<style scoped>
a:hover {
  text-decoration: none;
}
</style>
