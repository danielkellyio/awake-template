<template>
  <div>
    <the-hero :title="title" :subtitle="subtitle" :image="featureImage">
      <strong>Author:</strong> {{ author }} <strong>Published on:</strong>
      {{ date }}
    </the-hero>
    <main class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <div class="post-wrapper">
              <nuxt-link to="my-second-post">
                Hello
              </nuxt-link>
              <article class="content" v-html="content" />
              <disqus-comments />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import moment from 'moment'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import { setPageData } from '../helper'
import TheHero from '~/components/hero'
import 'highlight.js/styles/github.css'
import DisqusComments from '~/components/DisqusComments'

export default {
  components: { TheHero, DisqusComments },
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$store.state.subtitle
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$store.state.subtitle
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$store.state.title
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.$store.state.featureImage
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.url
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: `summary_large_image`
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: process.env.npm_package_name
        }
      ]
    }
  },
  computed: {
    ...mapState([
      'title',
      'subtitle',
      'featureImage',
      'featureColor',
      'underSubtitle',
      'author'
    ]),
    date() {
      return moment(this.$store.state.date).format('MMMM Do, YYYY')
    },
    url() {
      return `${process.env.URL}/${this.$route.fullPath}`
    },
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
      return md.render(this.$store.state.content)
    }
  },
  fetch({ store, params }) {
    setPageData(store, { pageType: 'post', slug: params.singlePost })
  }
}
</script>
