<template>
  <HtmlEditor
    ref="editor"
    class="html-editor"
    v-model="content"
    :options="editorOptions"
    @blur="onEditorBlur"
    @focus="onEditorFocus"
    @ready="onEditorReady"
    @change="onEditorChange"
  />
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";

function selectLocalImage(editor) {
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.click();

  input.onchange = () => {
    const file = input.files[0];
    if (!/^image\//.test(file.type)) {
      console.warn("You could only upload images.");
      return;
    }
    saveToServer(file, editor);
  };
}
function saveToServer(file, editor) {
  // make async and pretend to submit file to backend
  Promise.resolve(file).then(blob => {
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      var base64String = reader.result;
      insertToEditor(base64String, editor);
    };
  });
}
function insertToEditor(url, editor) {
  // push image url to rich editor.
  const range = editor.getSelection();
  editor.insertEmbed(range.index, "image", url);
}

export default {
  components: {
    HtmlEditor: quillEditor
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
    onEditorBlur(e) {
      console.debug("onEditorBlur", { evt: e, editor: this.$refs.editor });
    },
    onEditorFocus(e) {
      console.debug("onEditorFocus", { evt: e, editor: this.$refs.editor });
    },
    onEditorReady(e) {
      console.debug("onEditorReady", { evt: e, editor: this.$refs.editor });
      const editor = this.$refs.editor.quill;
      editor.getModule("toolbar").addHandler("image", () => {
        console.debug("ImageHandler");
        selectLocalImage(editor);
      });
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