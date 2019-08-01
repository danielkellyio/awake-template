<template>
  <v-runtime-template class="content" :template="content"></v-runtime-template>
</template>

<script>
import MarkdownIt from 'markdown-it'
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
        typographer: true
      })
        .use(require('markdown-it-deflist'))
        .use(require('markdown-it-sub'))
        .use(require('markdown-it-sup'))
        .use(require('markdown-it-footnote'))
      let html = md.render(this.markdown)
      const images = html.match(/<img(.*?)>/g)
      if (images) {
        images.forEach((image) => {
          const optiImage = image
            .replace('<img', '<opti-image')
            .replace('>', '/>')
          html = html.replace(image, optiImage)
        })
      }
      html = html.replace(/<table>/g, '<table class="table is-striped">')

      return `<div class="content">${html}</div>`
    }
  }
}
</script>

<style scoped></style>
