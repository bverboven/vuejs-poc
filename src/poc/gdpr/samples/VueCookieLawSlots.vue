<template>
  <article>
    <h3>Vue Cookie Law (with scoped slot)</h3>

    <p class="text-info">
      Link:
      <a href="https://github.com/apertureless/vue-cookie-law" target="_blank">
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
      <CookieLaw @accept="accepted = true">
        <template v-slot="props">
          <div>
            We use cookies to ensure that we give you the best experience on our
            website.
            <router-link :to="{ name: 'privacyNotice' }">More info</router-link
            >. (<a href="#" @click="props.close">Close</a>)
          </div>
          <button class="btn btn-primary" @click="props.accept">Ok</button>
        </template>
      </CookieLaw>
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
