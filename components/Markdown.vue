<template>
  <v-runtime-template class="content" :template="content"></v-runtime-template>
</template>

<script>
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import VRuntimeTemplate from 'v-runtime-template'

export default {
  name: 'Markdown',
  components: { VRuntimeTemplate },
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
      let html = md.render(this.markdown)
      const images = html.match(/<img(.*?)>/g)
      images.forEach((image) => {
        const optiImage = image
          .replace('<img', '<opti-image')
          .replace('>', '/>')
        html = html.replace(image, optiImage)
      })
      return `<div class="content">${html}</div>`
    }
  }
}
</script>

<style scoped></style>
