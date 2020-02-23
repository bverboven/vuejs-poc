import router from "@/router";

router.afterEach((to) => {
    let title = "Vue.js PoC";
    let route = to.matched.find(r => r.name === to.name);
    let sectionTitle;
    do {
        if (route.meta && route.meta.sectionTitle) {
            sectionTitle = route.meta.sectionTitle;
        }
        if (route.parent) {
            route = to.matched.find(r => r.name === route.parent.name);
        } else {
            route = null;
        }
    } while (!sectionTitle && route);
    if (sectionTitle) {
        title = `${title}: ${sectionTitle}`;
    }
    document.title = title;
});
