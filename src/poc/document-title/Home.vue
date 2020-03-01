<template>
  <section>
    <h2>Document Title</h2>

    <p class="text-info">
        <pre>
import documentTitlePlugin from "@/poc/document-title/plugin";
Vue.use(documentTitlePlugin, { router, defaultTitle: "Vue.js PoC" });
        </pre>
    </p>

    <h3>Plugin.js</h3>
    <p class="text-info">
      <pre>
export default {
    install(Vue, { router, defaultTitle }) {
        router.afterEach((to) => {
            let title = defaultTitle;
            let route = to.matched.find(r => r.name === to.name);

            let documentTitle;
            do {
                <span class="text-success">// only build title with main routes (exclude children)</span>
                const isSectionRoute = router.options.routes.some(r => r.name === route.name);
                if (route.meta && route.meta.title && isSectionRoute) {
                    documentTitle = route.meta.title;
                }
                if (route.parent) {
                    route = to.matched.find(r => r.name === route.parent.name);
                } else {
                    route = null;
                }
            } while (!documentTitle && route);

            if (documentTitle) {
                title = `${title}: ${documentTitle}`;
            }

            document.title = title;
        });
    }
};
      </pre>
    </p>
  </section>
</template>
