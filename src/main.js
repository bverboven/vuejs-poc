import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/bootstrap.min.css";
import "@/assets/main.scss";

Vue.config.productionTip = false;

import documentTitlePlugin from "@/poc/document-title/plugin";
Vue.use(documentTitlePlugin, { router, defaultTitle: "Vue.js PoC" });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
