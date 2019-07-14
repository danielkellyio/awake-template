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
      posts: require('~/static/api/posts.json')
    }
  },
  computed: {
    gridNumber() {
      return 12 / this.$globals.columns
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
