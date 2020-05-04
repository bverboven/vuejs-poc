<template>
  <div class="carousel-container">
    <VueAgile
      ref="carousel"
      :autoplay="true"
      :autoplaySpeed="2500"
      :navButtons="false"
      :dots="false"
      :centerMode="true"
      @afterChange="onChange"
    >
      <div v-for="slide in slides" :key="slide.id" class="slide">
        <div class="img-wrapper">
          <img :src="slide.imgUrl" />
        </div>
        <span class="slide-title text-light">{{ slide.title }}</span>
      </div>
    </VueAgile>
    <div class="clearfix"></div>
    <ul class="list-inline float-right mt-2">
      <li
        v-for="(dummy, index) in slides"
        :key="index"
        class="list-inline-item"
      >
        <span
          class="pagination-bullet"
          :class="{ active: index == currentSlide }"
          @click="setSlide(index)"
          v-if="index < slides.length"
        ></span>
      </li>
    </ul>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";

export default {
  components: {
    VueAgile
  },
  props: {
    slides: Array,
    interval: Number
  },
  data() {
    return {
      currentSlide: 0
    };
  },
  methods: {
    getCurrentSlide() {
      return this.$refs.carousel.getCurrentSlide();
    },
    onChange() {
      this.currentSlide = this.getCurrentSlide();
      this.$emit("change", this.currentSlide);
    },
    setSlide(i) {
      this.$refs.carousel.goTo(i);
    }
  }
};
</script>
