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
  item: result item, 
  q: search input text 
}</pre>
          </p>
        </div>
      </div>
      </div>
      <div class="col-md-6">
        <h3>Event(s)</h3>
        <div class="list-group">
          <div class="list-group-item">
            input: selected item
          </div>
        </div>
        <h3>Css</h3>
        <div class="list-group">
          <div class="list-group-item">
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
      </div>
    </div>
</template>