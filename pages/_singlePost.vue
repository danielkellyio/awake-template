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
          <div class="other-posts">
            <h6 class="subtitle is-size-4">
              Related Posts
            </h6>
            <related-posts :number="3" :category="category" :exclude="slug" />
          </div>
          <disqus-comments :identifier="$route.params.singlePost" />
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
import { setPageData, getFormattedDate } from '../helper'
import SiteHero from '~/components/SiteHero'
// import 'highlight.js/styles/github.css'
import Markdown from '~/components/Markdown'
import RelatedPosts from '~/components/grids/PostsGrid'
import PostSidebar from '~/components/PostSidebar'
import MainSection from '~/components/MainSection'
import DisqusComments from '~/components/DisqusComments'
export default {
  components: {
    SiteHero,
    Markdown,
    RelatedPosts,
    PostSidebar,
    MainSection,
    DisqusComments
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
      return getFormattedDate(this.$store.state.date)
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
