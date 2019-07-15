<template>
  <div class="columns posts">
    <div
      v-for="post in posts"
      :key="post.data.title"
      :class="`column is-${gridNumber}`"
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
</template>

<script>
import PostCard from '~/components/PostCard'

export default {
  components: { PostCard },
  data() {
    return {
      posts: []
    }
  },
  computed: {
    gridNumber() {
      return 12 / this.$siteConfig.columns
    }
  },
  async created() {
    const cms = await import(`~/cms/${this.$siteConfig.cms}/posts`)
    this.posts = await cms.default.getLatestPosts(this.$axios)
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
