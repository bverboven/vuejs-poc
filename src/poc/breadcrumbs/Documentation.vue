<template>
    <div>
        <h3>Routes</h3>
        <p class="text-info">
        Routes should have a meta object with a title-property which can be a
        string or a function. The title-function can be async and receives the current route as argument.
            <pre>
route: {
  meta: {
    title: String | Function <span class="text-success">// (async r) => r.params.section</span>
  }
}
            </pre>
        </p>
        <h3>Breadcrumbs component</h3>
        <p class="text-info">
            <pre>
props: {
    items: [
      {
        name: String, <span class="text-success">// unique identifier</span>
        route: Object, <span class="text-success">// target route to construct the URL</span>
        title: String, <span class="text-success">// displayed</span>
        active: Boolean <span class="text-success">// no hyperlink will be generated for the active breadcrumb item</span>
      }
    ]
}
            </pre>
        </p>
    </div>
</template>