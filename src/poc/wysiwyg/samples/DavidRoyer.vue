<template>
  <article>
    <p class="text-info">
      links:
    </p>
    <ul>
      <li>
        <a href="https://github.com/davidroyer/vue2-editor">
          https://github.com/davidroyer/vue2-editor
        </a>
      </li>
      <li>
        <a href="https://github.com/quilljs/quill">
          https://github.com/quilljs/quill
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
import HtmlEditor from "../components/Vue2Editor";
import wysiwygMixins from "../mixins/wysiwyg-mixins";

export default {
  components: {
    HtmlEditor
  },
  mixins: [wysiwygMixins]
};
</script>