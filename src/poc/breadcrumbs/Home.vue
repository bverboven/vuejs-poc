<template>
  <section>
    <h2>Breadcrumbs</h2>

    <Breadcrumbs :items="breadcrumbItems" />

    <div class="row">
      <div class="col-lg-3">
        <Navigation />
      </div>
      <div class="col-lg-9">
        <Documentation />
      </div>
    </div>

    <router-view></router-view>
  </section>
</template>

<script>
import Breadcrumbs from "./components/Breadcrumbs";
import Navigation from "./Navigation";
import Documentation from "./Documentation";

export default {
  components: {
    Breadcrumbs,
    Navigation,
    Documentation
  },
  data() {
    return {
      breadcrumbItems: []
    };
  },
  methods: {
    async getBreadcrumbTitle(r) {
      if (r.meta && r.meta.title) {
        if (typeof r.meta.title === "function") {
          return r.meta.title(this.$route);
        }
        return r.meta.title;
      }
      return r.name;
    },
    async mapBreadCrumb(r) {
      return {
        name: r.name,
        title: await this.getBreadcrumbTitle(r),
        route: { name: r.name, params: this.$route.params },
        active: r.name === this.$route.name
      };
    },
    async setBreadcrumbs(route) {
      // generate breadcrumb items
      const items = await Promise.all(
        route.matched.map(async r => await this.mapBreadCrumb(r))
      );
      // insert home breadcrumb
      if (!items.some(x => x.name === "home")) {
        const homeItem = {
          name: "home",
          title: "Home",
          route: { name: "home" }
        };
        items.splice(0, 0, homeItem);
      }
      // set breadcrumb items
      this.breadcrumbItems = items;
    }
  },
  watch: {
    $route(to) {
      this.setBreadcrumbs(to);
    }
  },
  mounted() {
    this.setBreadcrumbs(this.$route);
  }
};
</script>
