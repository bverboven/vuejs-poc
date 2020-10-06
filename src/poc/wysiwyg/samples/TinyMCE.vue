<template>
  <article>
    <p class="text-info">
      links:
    </p>
    <ul>
      <li>
        <a href="https://github.com/tinymce/tinymce-vue">
          https://github.com/tinymce/tinymce-vue
        </a>
      </li>
      <li>
        <a href="https://github.com/tinymce/tinymce">
          https://github.com/tinymce/tinymce
        </a>
      </li>
    </ul>
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
import HtmlEditor from "../components/TinyMCE";
import wysiwygMixins from "../mixins/wysiwyg-mixins";

export default {
  components: {
    HtmlEditor
  },
  mixins: [wysiwygMixins]
};
</script>