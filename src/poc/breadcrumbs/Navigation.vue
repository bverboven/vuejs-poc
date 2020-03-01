<template>
  <diV>
    <h3>Navigation</h3>
    <ul class="list-unstyled">
      <li>
        <router-link
          :to="{ name: 'breadcrumbsSection', params: { section: 'fruit' } }"
        >
          Fruit
        </router-link>
        <ul class="list-unstyled ml-4">
          <li>
            <router-link
              :to="{
                name: 'breadcrumbsCategory',
                params: { section: 'fruit', category: 'apples' }
              }"
            >
              Apples
            </router-link>
            <ul class="list-unstyled ml-4">
              <li>
                <router-link
                  :to="{
                    name: 'breadcrumbsItem',
                    params: {
                      section: 'fruit',
                      category: 'apples',
                      name: 'jonagold'
                    }
                  }"
                >
                  Jonagold
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{
                    name: 'breadcrumbsItem',
                    params: {
                      section: 'fruit',
                      category: 'apples',
                      name: 'granny-smith'
                    }
                  }"
                >
                  Granny Smith
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link
              :to="{
                name: 'breadcrumbsCategory',
                params: { section: 'fruit', category: 'oranges' }
              }"
            >
              Oranges
            </router-link>
            <ul class="list-unstyled ml-4">
              <li>
                <router-link
                  :to="{
                    name: 'breadcrumbsItem',
                    params: {
                      section: 'fruit',
                      category: 'oranges',
                      name: 'valencia'
                    }
                  }"
                >
                  Valencia orange
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{
                    name: 'breadcrumbsItem',
                    params: {
                      section: 'fruit',
                      category: 'oranges',
                      name: 'hamlin'
                    }
                  }"
                >
                  Hamlin orange
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <router-link
          :to="{
            name: 'breadcrumbsSection',
            params: { section: 'vegetables' }
          }"
        >
          Vegetables
        </router-link>
        <ul class="list-unstyled ml-4">
          <li>
            <router-link
              :to="{
                name: 'breadcrumbsCategory',
                params: { section: 'vegetables', category: 'potatoes' }
              }"
            >
              Potatoes
            </router-link>
          </li>
          <li>
            <router-link
              :to="{
                name: 'breadcrumbsCategory',
                params: { section: 'vegetables', category: 'tomatoes' }
              }"
            >
              Tomatoes
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        [<router-link to="/breadcrumbs/dfqs/reazf/fwvdsq/raef/reaj/utyi">
          Catch Other
        </router-link>]
      </li>
    </ul>
  </diV>
</template>
