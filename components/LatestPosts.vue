<template>
  <div class="columns posts">
    <div v-for="post in posts" :key="post.data.title" class="column is-4">
      <post-card
        :title="post.data.title"
        :link="post.data.slug"
        :image="post.data.featureImage"
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
  }
}
</script>
