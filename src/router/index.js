import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const fruit = [
  { title: "apples", url: "https://en.wikipedia.org/wiki/Apple" },
  { title: "strawberries", url: "https://en.wikipedia.org/wiki/Strawberry" },
  { title: "oranges", url: "https://en.wikipedia.org/wiki/Orange_(fruit)" }
];
const vegetables = [
  { title: "aubergines", url: "https://en.wikipedia.org/wiki/Eggplant" },
  { title: "cabbages", url: "https://en.wikipedia.org/wiki/Cabbage" },
  { title: "tomatoes", url: "https://en.wikipedia.org/wiki/Tomato" }
];

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    name: "autocomplete",
    path: "/autocomplete",
    component: () => import("@/poc/autocomplete/Home"),
    children: [
      {
        name: "trevoreyreAutocomplete",
        path: "trevoreyre",
        component: () => import("@/poc/autocomplete/samples/Trevoreyre")
      },
      {
        name: "basicAutocomplete",
        path: "basic",
        component: () => import("@/poc/autocomplete/samples/BasicBbv")
      },
      {
        name: "bootstrapAutocomplete",
        path: "bootstrap/:countryCode?",
        component: () => import("@/poc/autocomplete/samples/BootstrapBbv"),
        props: route => ({ countryCode: route.params.countryCode })
      }
    ]
  },
  {
    name: "sortableList",
    path: "/sortable-list",
    component: () => import("@/poc/sortable-list/Home")
  },
  {
    name: "carousel",
    path: "/carousel",
    component: () => import("@/poc/carousel/Home")
  },
  {
    name: "multpleViews",
    path: "/multiple-views",
    component: () => import("@/poc/multiple-router-views/Home"),
    children: [
      {
        name: "fruit",
        path: "fruit",
        components: {
          header: () => import("@/poc/multiple-router-views/Header"),
          main: () => import("@/poc/multiple-router-views/Main")
        },
        props: {
          header: () => ({
            items: fruit,
            color: "red"
          }),
          main: { color: "red" }
        },
        redirect: { name: "fruitHome" },
        children: [
          {
            name: "fruitHome",
            path: "",
            component: () => import("@/poc/multiple-router-views/fruit/Fruit")
          },
          {
            name: "fruitDetails",
            path: ":fruit",
            component: () => import("@/poc/multiple-router-views/Details"),
            props: route => ({
              item: fruit.find(f => f.title === route.params.fruit)
            })
          }
        ]
      },
      {
        name: "vegetables",
        path: "vegetables",
        components: {
          header: () => import("@/poc/multiple-router-views/Header"),
          main: () => import("@/poc/multiple-router-views/Main")
        },
        props: {
          header: () => ({
            items: vegetables,
            color: "green"
          }),
          main: { color: "green" }
        },
        redirect: { name: "vegetablesHome" },
        children: [
          {
            name: "vegetablesHome",
            path: "",
            component: () =>
              import("@/poc/multiple-router-views/vegetables/Vegetables")
          },
          {
            name: "vegetablesDetails",
            path: ":vegetable",
            component: () => import("@/poc/multiple-router-views/Details"),
            props: route => ({
              item: vegetables.find(f => f.title === route.params.vegetable)
            })
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
