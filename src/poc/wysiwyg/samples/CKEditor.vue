<template>
  <article>
    <p class="text-info">
      link:
      <a href="https://github.com/ckeditor/ckeditor5">
        https://github.com/ckeditor/ckeditor5
      </a>
    </p>
    <div class="row">
      <div class="col-xl">
        <HtmlEditor v-model="content" />
        <button type="button" class="btn btn-secondary" @click="reset">
          Reset
        </button>
      </div>
      <div class="col-xl">
        <div v-html="content"></div>
      </div>
    </div>
  </article>
</template>

<script>
import HtmlEditor from "../components/CKEditor5";
import wysiwygMixins from "../mixins/wysiwyg-mixins";

export default {
  components: {
    HtmlEditor
  },
  mixins: [wysiwygMixins]
};
</script>