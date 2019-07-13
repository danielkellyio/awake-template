<template>
  <component :is="tag" class="content" v-html="content" />
</template>

<script>
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
export default {
  name: 'Markdown',
  props: {
    tag: { type: String, default: 'article' },
    markdown: { type: String, required: true }
  },
  computed: {
    content() {
      const md = new MarkdownIt({
        linkify: true,
        typographer: true,
        highlight: (str, lang) => {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(lang, str).value
            } catch (__) {}
          }

          return '' // use external default escaping
        }
      })
        .use(require('markdown-it-deflist'))
        .use(require('markdown-it-sub'))
        .use(require('markdown-it-sup'))
        .use(require('markdown-it-footnote'))
      return md.render(this.markdown)
    }
  }
}
</script>

<style scoped></style>
