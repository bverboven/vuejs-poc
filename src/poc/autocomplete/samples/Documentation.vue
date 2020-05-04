<template>
    <div class="row">
      <div class="col-md-6">
      <h3>Slots</h3>
      <div class="list-group">
        <div class="list-group-item">prepend: inside <i>.input-group-prepend</i></div>
        <div class="list-group-item">append: inside <i>.input-group-append</i></div>
        <div class="list-group-item">
          resultItem (<b>scoped</b>): inside each <i>&lt;li&gt;</i>
          <p class="text-info">
<pre>
props: { 
  item: Object, <span class="text-success">// result item</span> 
  q: String, <span class="text-success">// search input text</span>
}</pre>
          </p>
        </div>
      </div>
      </div>
      <div class="col-md-6">
        <h3>Event(s)</h3>
        <pre>
@input: selected item</pre>
        <h3>Css</h3>
        <pre>
div.autocomplete-container {
    div.autocomplete-items {
      ul {
        li.autocomplete-item
      }
    }              
}
          </pre>
      </div>
    </div>
</template>