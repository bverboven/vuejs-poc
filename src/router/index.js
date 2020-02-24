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
    component: () => import(/* webpackChunkName: "autocomplete" */ "@/poc/autocomplete/Home"),
    meta: {
      sectionTitle: "Autocomplete"
    },
    children: [
      {
        name: "trevoreyreAutocomplete",
        path: "trevoreyre",
        component: () => import(/* webpackChunkName: "autocomplete" */ "@/poc/autocomplete/samples/Trevoreyre")
      },
      {
        name: "basicAutocomplete",
        path: "basic",
        component: () => import(/* webpackChunkName: "autocomplete" */ "@/poc/autocomplete/samples/BasicBbv")
      },
      {
        name: "bootstrapAutocomplete",
        path: "bootstrap/:countryCode?",
        component: () => import(/* webpackChunkName: "autocomplete" */ "@/poc/autocomplete/samples/BootstrapBbv"),
        props: route => ({ countryCode: route.params.countryCode })
      },
      {
        name: "datalistAutocomplete",
        path: "datalist",
        component: () => import(/* webpackChunkName: "autocomplete" */ "@/poc/autocomplete/samples/DataList")
      }
    ]
  },
  {
    name: "draggable",
    path: "/draggable",
    component: () => import(/* webpackChunkName: "draggable" */ "@/poc/draggable/Home"),
    meta: {
      sectionTitle: "Draggable"
    },
    redirect: { name: "basic" },
    children: [
      {
        name: "basic",
        path: "basic",
        component: () => import(/* webpackChunkName: "draggable" */ "@/poc/draggable/samples/Basic")
      },
      {
        name: "sortable",
        path: "sortable",
        component: () => import(/* webpackChunkName: "draggable" */ "@/poc/draggable/samples/Sortable")
      },
      {
        name: "movable",
        path: "movable",
        component: () => import(/* webpackChunkName: "draggable" */ "@/poc/draggable/samples/Movable")
      }
    ]
  },
  {
    name: "carousel",
    path: "/carousel",
    component: () => import(/* webpackChunkName: "carousel" */ "@/poc/carousel/Home"),
    meta: {
      sectionTitle: "Carousel"
    }
  },
  {
    name: "multipleViews",
    path: "/multiple-views",
    component: () => import(/* webpackChunkName: "multiple-views" */ "@/poc/multiple-router-views/Home"),
    meta: {
      sectionTitle: "Multiple router-views"
    },
    children: [
      {
        name: "fruit",
        path: "fruit",
        components: {
          header: () => import(/* webpackChunkName: "multiple-views" */ "@/poc/multiple-router-views/Header"),
          main: () => import(/* webpackChunkName: "multiple-views" */ "@/poc/multiple-router-views/Main")
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
            component: () => import(/* webpackChunkName: "multiple-views" */ "@/poc/multiple-router-views/fruit/Fruit")
          },
          {
            name: "fruitDetails",
            path: ":fruit",
            component: () => import(/* webpackChunkName: "multiple-views" */ "@/poc/multiple-router-views/Details"),
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
          header: () => import(/* webpackChunkName: "multiple-views" */ "@/poc/multiple-router-views/Header"),
          main: () => import(/* webpackChunkName: "multiple-views" */ "@/poc/multiple-router-views/Main")
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
            component: () => import(/* webpackChunkName: "multiple-views" */ "@/poc/multiple-router-views/vegetables/Vegetables")
          },
          {
            name: "vegetablesDetails",
            path: ":vegetable",
            component: () => import(/* webpackChunkName: "multiple-views" */ "@/poc/multiple-router-views/Details"),
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
