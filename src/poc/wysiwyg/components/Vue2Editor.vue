<template>
  <div>
    <HtmlEditor
      ref="editor"
      class="html-editor"
      v-model="content"
      :editorOptions="editorOptions"
      useCustomImageHandler
      @image-added="handleImageAdded"
      @blur="onEditorBlur"
      @focus="onEditorFocus"
      @ready="onEditorReady"
      @text-change="onEditorChange"
    />
  </div>
</template>

<script>
import { VueEditor, Quill } from "vue2-editor";

export default {
  components: {
    HtmlEditor: VueEditor
  },
  props: ["value"],
  data() {
    return {
      editorOptions: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ["clean"],
            ["link", "image", "video"],
            [{ font: [] }],
            [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }]
          ],
          syntax: {
            highlight: text => hljs.highlightAuto(text).value
          }
        }
      },
      content: ""
    };
  },
  watch: {
    value(newVal) {
      this.content = newVal;
    }
  },
  methods: {
    handleImageAdded: function(file, editor, cursorLocation, resetUploader) {
      Promise.resolve(file).then(function(blob) {
        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function() {
          var base64String = reader.result;
          editor.insertEmbed(cursorLocation, "image", base64String);
          resetUploader();
        };
      });
    },
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
      this.$emit("input", this.content);
    }
  },
  created() {
    this.content = this.value;
  }
};
</script>
