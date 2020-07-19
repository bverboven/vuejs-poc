const config = {
    //publicPath: "/poc-vuejs",
    // devServer: {
    //     https: true,
    //     port: 5006
    // },
    lintOnSave: true,
    chainWebpack: config => {
        config.resolve.symlinks(false);
        config.externals({
            // vue: "Vue",
            // "vue-router": "VueRouter",
            // vuex: "Vuex",
            // bootstrap: true,
            // axios: true,
            // moment: true
        });
    }
};

console.info("mode", process.env.NODE_ENV);
console.info("Public path", config.publicPath);

module.exports = config;
