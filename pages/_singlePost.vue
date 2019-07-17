<template>
  <div class="page-wrapper">
    <the-hero
      :title="title"
      :subtitle="subtitle"
      :image="featureImage"
      :theme="$siteConfig.hero.theme"
    >
      <span
        v-if="author && $siteConfig.posts.displayAuthor"
        class="author-wrapper"
      >
        <strong>Author:</strong> {{ author }}
      </span>
      <span v-if="date" class="date-wrapper">
        <strong>Published on:</strong> {{ date }}
      </span>
    </the-hero>
    <main class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <div class="post-wrapper">
              <markdown :markdown="$store.state.content" />
              <vue-disqus
                v-if="$siteConfig.disqus.on && $globals.disqus.siteShortName"
                :shortname="$siteConfig.disqus.siteShortName"
                :identifier="$route.params.singlePost"
              />
              <div
                v-if="
                  $siteConfig.disqus.on && !$siteConfig.disqus.siteShortName
                "
                class="notification is-danger"
              >
                Disqus site short name is required!
              </div>
              <div class="other-posts box">
                <h6 class="subtitle is-size-4">
                  Latest Posts
                </h6>
                <latest-posts :number="3"></latest-posts>
              </div>
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
import { setPageData } from '../helper'
import TheHero from '~/components/hero'
import 'highlight.js/styles/github.css'
import Markdown from '~/components/Markdown'
import LatestPosts from '~/components/PostsGrid'
export default {
  components: { TheHero, Markdown, LatestPosts },
  head() {
    return {
      title: `${this.$store.state.title} | ${this.$siteConfig.siteName}`,
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
    }
  },
  fetch({ store, params }) {
    setPageData(store, { pageType: 'post', slug: params.singlePost })
  }
}
</script>
<style scoped lang="scss">
.other-posts {
  background: #eee;
}
</style>
