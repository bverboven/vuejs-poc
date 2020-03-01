export default {
    install(Vue, { router, defaultTitle }) {
        router.afterEach((to) => {
            let title = defaultTitle;
            let route = to.matched.find(r => r.name === to.name);

            let documentTitle;
            do {
                // only build title with main routes (exclude children)
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