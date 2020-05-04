<template>
  <article>
    <p class="text-info">
      link:
      <a href="https://github.com/lukaszflorczak/vue-agile">
        https://github.com/lukaszflorczak/vue-agile
      </a>
    </p>

    <div class="row">
      <div class="col-10">
        <Carousel :slides="slides" />
      </div>
    </div>
  </article>
</template>

<script>
import Carousel from "../components/VueAgile";

// slides
import slide1 from "../slides/slide-1.jpg";
import slide2 from "../slides/slide-2.jpg";
import slide3 from "../slides/slide-3.jpg";
import slide4 from "../slides/slide-4.jpg";
import slide5 from "../slides/slide-5.jpg";

export default {
  components: {
    Carousel
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
