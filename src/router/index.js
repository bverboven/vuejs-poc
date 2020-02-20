import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    name: "Autocomplete",
    path: "/autocomplete",
    component: () => import("@/poc/autocomplete/Home")
  },
  {
    name: "SortableList",
    path: "/sortable-list",
    component: () => import("@/poc/sortable-list/Home")
  },
  {
    name: "Carousel",
    path: "/carousel",
    component: () => import("@/poc/carousel/Home")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
