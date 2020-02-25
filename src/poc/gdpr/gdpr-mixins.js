export default {
    data() {
        return {
            accepted: false
        };
    },
    methods: {
        clearCookies() {
            localStorage.removeItem("cookie:accepted");
            //localStorage.removeItem("cookie:all");
            this.accepted = false;
            // reload to trigger cookie popup again
            location.reload();
        }
    },
    created() {
        this.accepted = !!localStorage.getItem("cookie:accepted");
    }
};