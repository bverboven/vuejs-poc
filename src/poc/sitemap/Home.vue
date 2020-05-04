<template>
  <section>
    <h2>Sitemap</h2>

    <p class="text-info">
      ToDo: dynamic routes with parameters
    </p>
    <article>
      <Sitemap :items="items" />
    </article>
  </section>
</template>

<script>
import Sitemap from "./Sitemap";

export default {
  components: {
    Sitemap
  },
  data() {
    return {
      sitemapItems: []
    };
  },
  methods: {
    async getItemTitle(r) {
      if (r.meta && r.meta.title) {
        if (typeof r.meta.title === "function") {
          return r.meta.title(r);
        }
        return r.meta.title;
      }
      return r.name;
    },
    mapRoute(r) {
      return {
        title: r.name,
        route: { name: r.name },
        children:
          r.children && r.children.length
            ? r.children.map(c => this.mapRoute(c))
            : null
      };
    }
  },
  created() {
    this.items = this.$router.options.routes.map(r => this.mapRoute(r));
  }
};
</script>
