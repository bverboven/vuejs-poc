export default {
    props: ["htmlInput"],
    data() {
        return {
            content: ""
        };
    },
    watch: {
        htmlInput(newVal) {
            this.content = newVal;
        }
    },
    created() {
        this.content = this.htmlInput;
        console.debug("Wysiwyg created", { page: this, htmlInput: this.htmlInput });
    },
    methods: {
        reset() {
            this.content = this.htmlInput;
        }
    }
};