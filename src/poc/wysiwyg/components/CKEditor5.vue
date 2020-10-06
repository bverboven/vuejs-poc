<template>
  <div>
    <HtmlEditor
      ref="editor"
      :editor="editor"
      v-model="content"
      @blur="onEditorBlur"
      @focus="onEditorFocus"
      @ready="onEditorReady"
      @input="onEditorChange"
    />
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-vue";

console.debug("CKEditor", { editor: CKEditor });

export default {
  components: {
    HtmlEditor: CKEditor.component
  },
  props: ["value"],
  data() {
    return {
      content: "",
      editor: ClassicEditor
    };
  },
  watch: {
    value(newVal) {
      this.content = newVal;
    }
  },
  methods: {
    onEditorBlur(e) {
      console.debug("onEditorBlur", { evt: e, editor: this.$refs.editor });
    },
    onEditorFocus(e) {
      console.debug("onEditorFocus", { evt: e, editor: this.$refs.editor });
    },
    onEditorReady(e) {
      console.debug("onEditorReady", { evt: e, editor: this.$refs.editor });
    },
    onEditorChange(e) {
      console.debug("onEditorChange", { evt: e, editor: this.$refs.editor });
      this.$emit("input", e);
    }
  },
  created() {
    this.content = this.value;
  }
};
</script>