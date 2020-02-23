<template>
  <section>
    <div class="row">
      <div class="col-md-8">
        <Carousel :slides="slides" :interval="interval" @change="changeSlide" />
      </div>
    </div>
  </section>
</template>

<script>
// swiper css
import "swiper/dist/css/swiper.css";
// swiper component
import Carousel from "./Carousel.vue";

// slides
import slide1 from "./slides/slide-1.jpg";
import slide2 from "./slides/slide-2.jpg";
import slide3 from "./slides/slide-3.jpg";
import slide4 from "./slides/slide-4.jpg";
import slide5 from "./slides/slide-5.jpg";

export default {
  components: {
    Carousel
  },
  data() {
    return {
      slides: [],
      interval: 5000,
      currentSlide: null
    };
  },
  methods: {
    changeSlide(slide) {
      this.currentSlide = slide;
    }
  },
  created() {
    this.slides = [
      { id: 1, title: "Slide #1", imgUrl: slide1 },
      { id: 2, title: "Slide #2", imgUrl: slide2 },
      { id: 3, title: "Slide #3", imgUrl: slide3 },
      { id: 4, title: "Slide #4", imgUrl: slide4 },
      { id: 5, title: "Slide #5", imgUrl: slide5 }
    ];
  }
};
</script>

<style lang="scss">
.carousel-container {
  .img-wrapper {
    img {
      max-width: 100%;
    }
  }
  .slide-title {
    display: block;
    margin-top: -3rem;
    margin-left: 0.25rem;
    color: white;
  }

  .paging {
    ul {
      padding-left: 0;
      list-style: none;
      float: right;

      li {
        display: inline-block;
      }
      li:not(:last-child) {
        margin-right: 0.5rem;
      }
    }
  }

  .pagination-bullet {
    display: inline-block;
    width: 1em;
    height: 1em;
    border-radius: 100%;
    background: #ccc;
    opacity: 0.6;
    cursor: pointer;
  }
  .pagination-bullet.active,
  .pagination-bullet:hover {
    opacity: 1;
  }
}
</style>
