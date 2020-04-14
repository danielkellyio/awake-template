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

      html = this.useResponsiveImages(html)
      html = this.wrapTable(html)
      html = html.replace(/<table>/g, '<table class="table is-striped">')

      return `<div class="content">${html}</div>`
    }
  },
  methods: {
    useResponsiveImages(html) {
      const images = html.match(/<img(.*?)>/g)
      if (images) {
        images.forEach((image) => {
          // const generatedImage = require('~/assets')
          const origImage = image
            .match(/src="([^"]*)"/g)[0]
            .replace('src="', '')
            .replace('"', '')
          let replace = `src="${origImage}"`
          if (origImage.startsWith('/')) {
            const generatedImage = require(`~/assets${origImage}`)
            replace = `src="${generatedImage.src}" srcset="${generatedImage.srcSet}"`
          }

          const optiImage = image
            .replace('<img', '<opti-image')
            .replace('>', '/>')
            .replace(/src="([^"]*)"/g, replace)
          html = html.replace(image, optiImage)
        })
      }
      return html
    },
    wrapTable(html) {
      html = html.replace(/<table/g, `<div class="table-wrapper"><table`)
      html = html.replace(/<\/table>/g, `</table></div>"`)
      return html
    }
  }
}
</script>

<style scoped></style>
