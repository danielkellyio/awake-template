<template>
  <div id="post-page" class="page-wrapper post-page">
    <site-hero
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
    </site-hero>
    <main-section :one-column-constrained="true">
      <template v-slot:default>
        <div class="post-wrapper">
          <markdown :markdown="$store.state.content" />
          <vue-disqus
            v-if="$siteConfig.disqus.on && $siteConfig.disqus.siteShortName"
            :shortname="$siteConfig.disqus.siteShortName"
            :identifier="$route.params.singlePost"
          />
          <div
            v-if="$siteConfig.disqus.on && !$siteConfig.disqus.siteShortName"
            class="notification is-danger"
          >
            Disqus site short name is required!
          </div>
          <div
            :class="
              `other-posts ${
                $siteConfig.posts.withSidebar ||
                $siteConfig.posts.theme !== 'columns'
                  ? ''
                  : 'box'
              }`
            "
          >
            <h6 class="subtitle is-size-4">
              Related Posts
            </h6>
            <related-posts :number="3" :category="category" :exclude="slug" />
          </div>
        </div>
      </template>
      <template v-slot:sidebar>
        <post-sidebar />
      </template>
    </main-section>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import moment from 'moment'
import { setPageData } from '../helper'
import SiteHero from '~/components/SiteHero'
import 'highlight.js/styles/github.css'
import Markdown from '~/components/Markdown'
import RelatedPosts from '~/components/grids/PostsGrid'
import PostSidebar from '~/components/PostSidebar'
import MainSection from '~/components/MainSection'
export default {
  components: { SiteHero, Markdown, RelatedPosts, PostSidebar, MainSection },
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
      'underSubtitle',
      'author',
      'category',
      'slug'
    ]),
    date() {
      return moment(this.$store.state.date.split(' -').shift()).format(
        this.$siteConfig.posts.date.format
      )
    },
    url() {
      return `${process.env.URL}/${this.$route.fullPath}`
    }
  },
  fetch({ store, params }) {
    setPageData(store, { resource: 'post', slug: params.singlePost })
  }
}
</script>
