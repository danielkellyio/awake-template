<template>
  <div class="post-wrapper">
    <article v-html="content" />
  </div>
</template>
<script>
import showdown from 'showdown'
export default {
  layout: 'main-with-sidebar',
  computed: {
    content() {
      const converter = new showdown.Converter()
      return converter.makeHtml(this.$store.state.post.content)
    }
  },
  fetch({ store, params }) {
    store.dispatch('post/set', params.post_slug)
  }
}
</script>
