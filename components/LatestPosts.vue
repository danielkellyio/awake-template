<template>
  <div class="posts">
    <div class="columns posts is-multiline">
      <div
        v-for="post in posts"
        :key="post.data.title"
        :class="`column posts is-${gridNumber}`"
      >
        <post-card
          :title="post.data.title"
          :link="post.data.slug"
          :image="post.data.featureImage"
          :author="post.data.author"
          :date="post.data.date"
        />
      </div>
    </div>
    <div class="load-more-posts"></div>
  </div>
</template>

<script>
import PostCard from '~/components/PostCard'

export default {
  components: { PostCard },
  data() {
    return {
      posts: [],
      page: 1,
      noMorePosts: false
    }
  },
  computed: {
    gridNumber() {
      return 12 / this.$siteConfig.columns
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
    const newPages = await this.$cms.getPostsByPage(this.$axios, 1)
    this.posts = this.posts.concat(newPages)
  },
  mounted() {
    const observer = new IntersectionObserver(() => {
      if (!this.noMorePosts) this.page++
    })
    observer.observe(this.$el.querySelector('.load-more-posts'))
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
