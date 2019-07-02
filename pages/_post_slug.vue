<template>
  <div class="post-wrapper">
    <article v-html="content" />
  </div>
</template>
<script>
export default {
  layout: 'main-with-sidebar',
  computed: {
    content() {
      return this.$store.state.post.content
    }
  },
  fetch({ store, params }) {
    store.dispatch('post/set', params.post_slug)
  }
}
</script>
