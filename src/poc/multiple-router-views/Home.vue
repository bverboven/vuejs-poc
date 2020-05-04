<template>
  <section>
    <h1>Multiple router views (with props)</h1>
    <ul class="nav nav-tabs">
      <li class="nav-item fruit">
        <router-link
          :to="{ name: 'fruit' }"
          class="nav-link"
          active-class="active"
          >Fruit</router-link
        >
      </li>
      <li class="nav-item vegetables">
        <router-link
          :to="{ name: 'vegetables' }"
          class="nav-link"
          active-class="active"
          >Vegetables</router-link
        >
      </li>
    </ul>

    <div class="p-3">
      <div class="text-info mt-2">
        3 router-views; 2 named, 1 nested:
        <pre>
&lt;router-view name="header" /&gt; <span class="text-success">// header gets props (items, color) from router</span>
&lt;router-view name="main"&gt; <span class="text-success">// main gets props (color) from router</span>
  &lt;router-view /&gt; <span class="text-success">// Fruit or Vegetable component gets props (item) from router</span>
&lt;router-view /&gt; <span class="text-success">// end main</span>
</pre>
      </div>

      <router-view name="header" />
      <router-view name="main" />
    </div>
  </section>
</template>

<style scoped>
.fruit .nav-link.active {
  background-color: red;
  color: #fff;
}
.vegetables .nav-link.active {
  background-color: green;
  color: #fff;
}
</style>
