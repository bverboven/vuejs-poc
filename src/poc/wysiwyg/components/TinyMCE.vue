<template>
  <div>
    <HtmlEditor
      ref="editor"
      class="html-editor"
      api-key="fr04cm40vkqo28ncjtrnbpfqajsoidqzwhwml0pkbhx9xb7e"
      :init="{
        content_style: 'img { margin: 0 .5rem; }',
        height: 500,
        menubar: 'file edit view insert format tools table help',
        plugins: [
          'print preview importcss searchreplace autolink directionality code',
          'visualblocks visualchars fullscreen link image media codesample table charmap',
          'hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount',
          'textpattern noneditable help charmap quickbars emoticons'
        ],
        toolbar: `undo redo | bold italic underline superscript subscript | 
        alignleft aligncenter alignright alignjustify |
        outdent indent | numlist bullist | 
        forecolor backcolor casechange permanentpen formatpainter removeformat | 
        link anchor charmap pagebreak | 
        insertfile image media pageembed |
        fullscreen code preview print |
        fontselect fontsizeselect formatselect |`,
        quickbars_selection_toolbar:
          'bold italic underline | quicklink h2 h3 quickimage quicktable',
        images_upload_handler: imageUploadHandler,
        _image_list: []
      }"
      model-events="change keydown blur focus paste"
      v-model="content"
      @onBlur="onEditorBlur"
      @onFocus="onEditorFocus"
      @onInit="onEditorReady"
      @onChange="onEditorChange"
    />
  </div>
</template>

<script>
import TinyMceEditor from "@tinymce/tinymce-vue";

export default {
  components: {
    HtmlEditor: TinyMceEditor
  },
  props: ["value"],
  data() {
    return {
      content: ""
    };
  },
  watch: {
    value(newVal) {
      this.content = newVal;
    }
  },
  methods: {
    imageUploadHandler: function(blobInfo, success, failure, progress) {
      // cf. https://www.tiny.cloud/docs/general-configuration-guide/upload-images/#example
      console.debug("ImageUploadHandler", {
        blobInfo,
        success,
        failure,
        progress
      });
      progress(0);
      const file = blobInfo.blob();
      Promise.resolve(file).then(function(blob) {
        var reader = new FileReader();
        reader.readAsDataURL(blob);

        progress(25);
        reader.onloadend = function() {
          var base64String = reader.result;
          progress(100);
          success(base64String);
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
