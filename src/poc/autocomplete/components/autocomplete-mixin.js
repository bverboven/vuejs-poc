import debounceToPromise from "@/utils/debounce-to-promise";

export default {
    props: {
        value: [String, Object],
        search: { type: Function, required: true },
        resultSelector: { type: Function, required: false, default: x => x },
        valueSelector: {
            type: Function,
            required: false,
            default: function (item) {
                return this.resultSelector ? this.resultSelector(item) : item;
            }
        },
        inputId: String,
        inline: { type: Boolean, required: false, default: false },
        containerClass: { type: String, required: false, default: "" },
        inputClass: { type: String, required: false, default: "" },
        resultClass: { type: String, required: false, default: "" },
        itemsClass: { type: String, required: false, default: "" },
        itemClass: { type: String, required: false, default: "" },
        maxResults: { type: Number, required: false, default: 10 },
        debounceTime: { type: Number, required: false, defaults: 100 }
    },
    data() {
        return {
            q: "",
            selectedItem: null,
            // needed for arrowkeys
            selectedIndex: -1,
            items: [],
            isOpen: false
        };
    },
    computed: {
        label() {
            return item => this.resultSelector(item);
        }
    },
    methods: {
        async onSearch() {
            this.isOpen = true;
            this.items = await this.debouncedSearch(this.q || "")
                .then(items => items.slice(0, this.maxResults));
            this.selectedIndex = this.items.indexOf(this.selectedItem);
        },
        closeGently: function () {
            setTimeout(() => (this.isOpen = false), 250);
        },
        checkMatch() {
            // check (and set selection automatically) if the input value corresponds with a value in the results
            if (this.selectedItem == null) {
                const matchedSelection = this.items.find(item => (this.valueSelector(item) || "").toLowerCase() === this.q.toLowerCase());
                if (matchedSelection != null) {
                    this.setSelection(matchedSelection);
                }
            }
        },
        handleSelect(item, index) {
            this.isOpen = false;
            this.setSelection(item, item ? index : -1);
        },
        setSelection(item, index) {
            if (item === this.selectedItem || this.valueSelector(item) === this.valueSelector(this.selectedItem)) {
                return;
            }

            if (item && (index == null || index < 0)) {
                index = this.items.indexOf(item);
            } else if (!item && index >= 0) {
                item = this.items[index];
            }
            this.selectedItem = item;
            this.selectedIndex = index;
            // set q to the corresponding value for the resulting item
            this.q = this.valueSelector(item);
            this.$emit("input", item);
        },
        moveSelection(step) {
            const newSelectedIndex = this.selectedIndex + step;
            const newSelectedItem = this.items[newSelectedIndex];
            if (newSelectedIndex >= 0 && newSelectedIndex < this.items.length) {
                this.setSelection(newSelectedItem, newSelectedIndex);
            }
        },
        clearSelection() {
            this.selectedIndex = -1;
            this.selectedItem = null;
            this.$emit("input", null);
        },
        reset() {
            this.clearSelection();
            this.q = "";
        }
    },
    watch: {
        value(newVal) {
            this.setSelection(newVal);
        }
    },
    created() {
        this.debouncedSearch = debounceToPromise(this.search, this.debounceTime);
    },
    mounted() {
        if (this.value != null) {
            this.setSelection(this.value);
        }
    }
};
