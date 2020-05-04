<template>
  <section>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link
          :to="{ name: 'surmonChinaCarousel' }"
          class="nav-link"
          active-class="active"
        >
          Vue Awesome Swiper
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: 'lukaszFlorczakCarousel' }"
          class="nav-link"
          active-class="active"
        >
          Vue Agile
        </router-link>
      </li>
    </ul>

    <div class="p-3">
      <router-view></router-view>
    </div>
  </section>
</template>

<style lang="scss">
.carousel-container {
  .img-wrapper {
    img {
      width: 100%;
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
      float: right;
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
