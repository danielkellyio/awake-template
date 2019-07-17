<template>
  <div class="posts">
    <div class="columns posts is-multiline">
      <div
        v-for="(post, index) in posts"
        :key="post.data ? post.data.title : index"
        :class="`column posts is-${gridNumber}`"
      >
        <post-card
          :title="post.data ? post.data.title : ''"
          :link="post.data ? post.data.slug : ''"
          :image="post.data ? post.data.featureImage : ''"
          :author="post.data ? post.data.author : ''"
          :date="post.data ? post.data.date : ''"
        />
      </div>
    </div>
    <intersection-observer @view="loadMore()" />
  </div>
</template>

<script>
import { range } from 'lodash'
import PostCard from '~/components/PostCard'
import IntersectionObserver from '~/components/IntersectionObserver'

export default {
  components: { PostCard, IntersectionObserver },
  data() {
    return {
      posts: [],
      page: 1,
      noMorePosts: false
    }
  },
  computed: {
    gridNumber() {
      return 12 / this.$siteConfig.posts.postsPerPage
    }
  },
  watch: {
    async page() {
      try {
        const newPages = await this.$cms.getPostsByPage(this.$axios, this.page)
        this.posts = this.posts.concat(newPages)
      } catch (err) {
        this.noMorePosts = true
      }
    }
  },
  async created() {
    this.initPlaceholders()
    const newPages = await this.$cms.getPostsByPage(this.$axios, 1)
    this.posts = this.posts = newPages
  },
  methods: {
    initPlaceholders() {
      this.posts = range(this.$siteConfig.posts.postsPerPage).fill({})
    },
    loadMore() {
      if (!this.noMorePosts) this.page++
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  @media (min-width: 768px) {
    height: 100%;
  }
  .media-content {
    overflow-x: initial;
  }
}
</style>
