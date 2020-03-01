<template>
  <article>
    <h2>Carousel (Awesome swiper)</h2>
    <p class="text-info">
      link:
      <a
        href="https://github.com/surmon-china/vue-awesome-swiper"
       
      >
        https://github.com/surmon-china/vue-awesome-swiper
      </a>
    </p>
    <div class="carousel-container">
      <div class="row">
        <div class="col">
          <swiper
            :options="swiperOption"
            ref="mySwiper"
            @change-slide="changeSlide"
          >
            <swiperSlide
              v-for="(slide, index) in slides"
              :key="slide.id || index"
            >
              <div class="img-wrapper">
                <img
                  class="d-block img-fluid carousel-img align-middle"
                  :src="slide.imgUrl"
                  :alt="slide.title"
                  :class="{ active: index == currentSlide }"
                />
                <span class="slide-title">{{ slide.title }}</span>
              </div>
            </swiperSlide>
          </swiper>
        </div>
      </div>
      <div class="paging row">
        <div class="col">
          <ul class="float-right mt-2">
            <li v-for="(dummy, index) in slides" :key="index">
              <span
                class="pagination-bullet"
                :class="{ active: index == centerSlide }"
                @click="setSlide(index + slideCorrection)"
                v-if="index < slides.length"
              ></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: { swiper, swiperSlide },
  props: {
    slides: Array,
    interval: Number
  },
  data() {
    return {
      currentSlide: 0,
      slidesPerView: 1,
      currentInterval: 0,
      sliding: false,
      swiperOption: {
        spaceBetween: 30
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    centerSlide() {
      return this.$refs.mySwiper
        ? this.swiper.realIndex + this.slideCorrection
        : -1;
    },
    maxSlide() {
      return this.slides.length - 1;
    },
    slideCorrection() {
      return Math.floor(this.slidesPerView / 2);
    }
  },
  methods: {
    setSlide(slide) {
      this.swiper.slideTo(slide - this.slideCorrection, 1000, false);
      if (this.currentInterval) {
        this.swiper.autoplay.start();
      }
    },
    setInterval(interval) {
      this.currentInterval = interval;
      this.swiper.params.autoplay = this.interval
        ? {
            delay: this.currentInterval,
            disableOnInteraction: true
          }
        : null;
      if (interval) {
        this.swiper.autoplay.start();
      }
    },
    changeSlide() {
      this.currentSlide = this.swiper.realIndex;
      this.$emit("change", this.slides[this.currentSlide]);
    }
  },
  watch: {
    slide(newVal) {
      this.setSlide(newVal);
    },
    interval(newVal) {
      this.setInterval(newVal);
    }
  },
  mounted() {
    this.swiper.params.slidesPerView = this.slidesPerView || "auto";
    this.setInterval(this.interval);
    this.setSlide(0);
  }
};
</script>
