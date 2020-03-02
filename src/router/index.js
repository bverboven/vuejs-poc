import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import DummyRouterView from "@/components/DummyRouterView";
import PrivacyNotice from "@/poc/gdpr/PrivacyNotice";

const displayTitle = normalizedTitle => normalizedTitle.replace(/-+/g, ' ');

Vue.use(VueRouter);

const fruit = [
  { title: "apples", url: "https://en.wikipedia.org/wiki/Apple" },
  { title: "oranges", url: "https://en.wikipedia.org/wiki/Orange_(fruit)" },
  { title: "mangos", url: "https://en.wikipedia.org/wiki/Mango" }
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
      documentTitle: "Autocomplete",
      get title() { return this.documentTitle; }
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
    name: "breadcrumbs",
    path: "/breadcrumbs",
    component: () => import(/* webpackChunkName: "breadcrumbs" */ "@/poc/breadcrumbs/Home"),
    meta: {
      title: "Breadcrumbs"
    },
    children: [
      {
        name: "breadcrumbsSection",
        path: ":section",
        component: DummyRouterView,
        meta: {
          title: route => displayTitle(route.params.section)
        },
        children: [
          {
            name: "breadcrumbsCategory",
            path: ":category",
            component: DummyRouterView,
            meta: {
              title: route => displayTitle(route.params.category)
            },
            children: [
              {
                name: "breadcrumbsItem",
                path: ":name",
                template: '',
                meta: {
                  title: route => displayTitle(route.params.name)
                }
              }
            ]
          }
        ]
      },
      {
        name: "breadcrumbsCatchOther",
        path: "*",
        template: '',
        meta: {
          title: "Other"
        }
      }
    ]
  },
  {
    name: "documentTitle",
    path: "/document-title",
    component: () => import("@/poc/document-title/Home"),
    meta: {
      title: "Document title"
    }
  },
  {
    name: "draggable",
    path: "/draggable",
    component: () => import(/* webpackChunkName: "draggable" */ "@/poc/draggable/Home"),
    meta: {
      title: "Draggable"
    },
    redirect: { name: "basicDraggable" },
    children: [
      {
        name: "basicDraggable",
        path: "basic",
        component: () => import(/* webpackChunkName: "draggable" */ "@/poc/draggable/samples/Draggable")
      },
      {
        name: "draggableInContainer",
        path: "drag-in-container",
        component: () => import(/* webpackChunkName: "draggable" */ "@/poc/draggable/samples/DraggableInContainer")
      },
      {
        name: "sortable",
        path: "sortable",
        component: () => import(/* webpackChunkName: "draggable" */ "@/poc/draggable/samples/Sortable")
      },
      {
        name: "sortableWithSortOrder",
        path: "sortable-with-sortoder",
        component: () => import(/* webpackChunkName: "draggable" */ "@/poc/draggable/samples/SortableWithSortOrder")
      },
      {
        name: "movable",
        path: "move-between-lists",
        component: () => import(/* webpackChunkName: "draggable" */ "@/poc/draggable/samples/MovableBetweenLists")
      }
    ]
  },
  {
    name: "calendar",
    path: "/calendar",
    component: () => import(/* webpackChunkName: "calendar" */ "@/poc/calendar/Home"),
    meta: {
      title: "Calendar"
    },
    children: [
      {
        name: "nathanReyesCalendar",
        path: "nathan-reyes",
        component: () => import(/* webpackChunkName: "calendar" */ "@/poc/calendar/samples/NathanReyes")
      },
      {
        name: "manukMinasyanCalendar",
        path: "manuk-minasyan",
        component: () => import(/* webpackChunkName: "calendar" */ "@/poc/calendar/samples/ManukMinasyan")
      },
      {
        name: "richardTallentCalendar",
        path: "richardTallent",
        component: () => import(/* webpackChunkName: "calendar" */"@/poc/calendar/samples/RichardTallent")
      }
    ]
  },
  {
    name: "carousel",
    path: "/carousel",
    component: () => import(/* webpackChunkName: "carousel" */ "@/poc/carousel/Home"),
    meta: {
      title: "Carousel"
    }
  },
  {
    name: "multipleViews",
    path: "/multiple-views",
    component: () => import(/* webpackChunkName: "multiple-views" */ "@/poc/multiple-router-views/Home"),
    meta: {
      title: "Multiple router-views"
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
  },
  {
    name: "gdpr",
    path: "/gdpr",
    component: () => import(/* webpackChunkName: "gdpr" */ "@/poc/gdpr/Home"),
    meta: {
      title: "GDPR"
    },
    children: [
      {
        name: "vueCookieLaw",
        path: "basic",
        component: () => import(/* webpackChunkName: "gdpr" */ "@/poc/gdpr/samples/VueCookieLaw")
      },
      {
        name: "vueCookieLawSlots",
        path: "slots",
        component: () => import(/* webpackChunkName: "gdpr" */ "@/poc/gdpr/samples/VueCookieLawSlots")
      }
    ]
  },
  {
    name: "privacyNotice",
    path: "/privacy",
    component: PrivacyNotice
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
