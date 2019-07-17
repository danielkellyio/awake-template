<template>
  <div class="posts">
    <div class="columns posts is-multiline">
      <div
        v-for="(post, index) in posts"
        :key="post.data ? post.data.title : index"
        :class="`column posts`"
        :style="`width: ${100 / $siteConfig.posts.perRow}%`"
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
    <div v-if="!noMorePosts" class="loading-posts">
      <spinner />
    </div>
  </div>
</template>

<script>
import { range, chunk } from 'lodash'
import PostCard from '~/components/PostCard'
import IntersectionObserver from '~/components/IntersectionObserver'
import spinner from '~/components/spinner'

export default {
  components: { PostCard, IntersectionObserver, spinner },
  props: {
    number: { type: Number, default: 0 },
    order: { type: String, default: 'DESC' }
  },
  data() {
    return {
      posts: [],
      page: 1,
      noMorePosts: false
    }
  },
  watch: {
    async page() {
      if (this.noMorePosts) return
      if (this.number && this.posts.length >= this.number) {
        this.noMorePosts = true
        return
      }
      try {
        const morePosts = await this.$cms.getPostsByPage(this.$axios, this.page)
        this.addPosts(morePosts)
      } catch (err) {
        this.noMorePosts = true
      }
    }
  },
  async created() {
    this.initPlaceholders()
    const morePosts = await this.$cms.getPostsByPage(this.$axios, 1)
    this.addPosts(morePosts, true)
  },
  methods: {
    initPlaceholders() {
      const number = this.number || this.$siteConfig.posts.perRow
      this.posts = range(number).fill({})
    },
    loadMore() {
      if (!this.noMorePosts) {
        this.page++
      }
    },
    addPosts(posts, override = false) {
      if (
        this.number &&
        (this.posts.length + posts.length > this.number || override) &&
        this.number % posts.length !== 0
      ) {
        posts = chunk(posts, this.number - (this.number % this.posts.length))[0]
      }
      if (override) {
        this.posts = this.posts = posts
      } else {
        this.posts = this.posts.concat(posts)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.column {
  flex-basis: auto;
  flex-grow: 0;
  @media (max-width: 768px) {
    width: 100% !important;
  }
}
.card {
  @media (min-width: 768px) {
    height: 100%;
  }
  .media-content {
    overflow-x: initial;
  }
}
</style>
<style>
.loading-posts .spinner-wrapper {
  margin: 30px auto 0 auto;
}
</style>
