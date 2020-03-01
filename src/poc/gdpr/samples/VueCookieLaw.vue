<template>
  <article>
    <h3>Vue Cookie Law (basic)</h3>

    <p class="text-info">
      Link:
      <a href="https://github.com/apertureless/vue-cookie-law">
        https://github.com/apertureless/vue-cookie-law
      </a>
    </p>

    <p class="text-info" v-show="accepted">
      Cookies accepted
      <button type="button" @click="clearCookies" class="btn btn-light">
        Clear cookies
      </button>
    </p>

    <footer>
      <CookieLaw @accept="accepted = true"></CookieLaw>
    </footer>
  </article>
</template>

<script>
import gdprMixins from "../gdpr-mixins";
import CookieLaw from "vue-cookie-law";

export default {
  mixins: [gdprMixins],
  components: {
    CookieLaw
  }
};
</script>
