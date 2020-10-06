<template>
  <section>
    <nav>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <router-link
            :to="{ name: 'tinyMCE', params: { htmlInput } }"
            class="nav-link"
            active-class="active"
          >
            TinyMCE
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'ckeditor5', params: { htmlInput } }"
            class="nav-link"
            active-class="active"
          >
            CKEditor 5
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'vue-quill-editor', params: { htmlInput } }"
            class="nav-link"
            active-class="active"
          >
            Vue-Quill-Editor
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'vue2-editor', params: { htmlInput } }"
            class="nav-link"
            active-class="active"
          >
            Vue2Editor
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="p-3">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
const htmlInput = `<p style="float: right;"><img src="//upload.wikimedia.org/wikipedia/commons/thumb/3/37/Kwrite_edit_html.png/200px-Kwrite_edit_html.png" width="200" height="149" /></p>
<p>An <strong>HTML editor</strong> is a <a title="Computer program" href="https://en.wikipedia.org/wiki/Computer_program">program</a> for editing <a title="HTML" href="https://en.wikipedia.org/wiki/HTML">HTML</a>, 
the <a title="Markup language" href="https://en.wikipedia.org/wiki/Markup_language">markup</a> of a <a title="Web page" href="https://en.wikipedia.org/wiki/Web_page">web page</a>. 
Although the HTML markup in a web page can be controlled with any <a title="Text editor" href="https://en.wikipedia.org/wiki/Text_editor">text editor</a>, specialized HTML editors can offer convenience and added functionality. 
For example, many HTML editors handle not only HTML, but also related technologies such as <a class="mw-redirect" title="Cascading Style Sheets" href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets">CSS</a>, 
<a class="mw-redirect" title="Extensible Markup Language" href="https://en.wikipedia.org/wiki/Extensible_Markup_Language">XML</a> and <a title="JavaScript" href="https://en.wikipedia.org/wiki/JavaScript">JavaScript</a> 
or <a title="ECMAScript" href="https://en.wikipedia.org/wiki/ECMAScript">ECMAScript</a>. In some cases they also manage communication with remote web servers 
via <a title="File Transfer Protocol" href="https://en.wikipedia.org/wiki/File_Transfer_Protocol">FTP</a> and <a title="WebDAV" href="https://en.wikipedia.org/wiki/WebDAV">WebDAV</a>, 
and <a class="mw-redirect" title="Version control systems" href="https://en.wikipedia.org/wiki/Version_control_systems">version control systems</a> 
such as <a class="mw-redirect" title="Subversion (software)" href="https://en.wikipedia.org/wiki/Subversion_(software)">Subversion</a> or <a class="mw-redirect" title="Git (software)" href="https://en.wikipedia.org/wiki/Git_(software)">Git</a>. 
Many <a class="mw-redirect" title="Word processing" href="https://en.wikipedia.org/wiki/Word_processing">word processing</a>, <a title="Graphic design" href="https://en.wikipedia.org/wiki/Graphic_design">graphic design</a> 
and <a title="Page layout" href="https://en.wikipedia.org/wiki/Page_layout">page layout</a> programs that are not dedicated to <a title="Web design" href="https://en.wikipedia.org/wiki/Web_design">web design</a>, 
such as <a title="Microsoft Word" href="https://en.wikipedia.org/wiki/Microsoft_Word">Microsoft Word</a> or <a class="mw-redirect" title="Quark XPress" href="https://en.wikipedia.org/wiki/Quark_XPress">Quark XPress</a>, 
also have the ability to function as HTML editors.</p>
<div style="left: 0px; width: 100%; height: 0px; position: relative; padding-bottom: 56.25%; max-width: 650px;" data-ephox-embed-iri="https://www.youtube.com/watch?v=Y-SvIFS4J8o"><iframe style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" src="https://www.youtube.com/embed/Y-SvIFS4J8o?rel=0" scrolling="no" allowfullscreen="allowfullscreen"></iframe></div>`;

export default {
  data() {
    return {
      htmlInput
    };
  },
  beforeRouteEnter(to, from, next) {
    // redirect to first editor (not in routes.js since we need to pass the param htmlInput)
    // toDo: refresh is still a problem
    if (to.name === "wysiwyg") {
      return next({ name: "tinyMCE", params: { htmlInput } });
    }
    return next();
  }
};
</script>

<style lang="scss">
</style>
