<template>
  <div>
    <nav-bar />
    <post-hero :title="title" :subtitle="subtitle" :image="featureImage">
      <div v-html="underSubtitle" />
    </post-hero>
    <main class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <nuxt />
          </div>
          <aside class="column is-one-quarter">
            this is the widget column
          </aside>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import PostHero from '~/components/post-hero'
import NavBar from '~/components/navbar'
export default {
  components: { PostHero, NavBar },
  computed: {
    title() {
      const state = this.$store.state
      return state.post.title || state.page.title || state.title
    },
    subtitle() {
      const state = this.$store.state
      return state.post.subtitle || state.page.subtitle || state.subtitle
    },
    featureImage() {
      const state = this.$store.state
      return (
        state.post.featureImage || state.page.featureImage || state.featureImage
      )
    },
    underSubtitle() {
      const state = this.$store.state
      return (
        state.post.underSubtitle ||
        state.page.underSubtitle ||
        state.underSubtitle
      )
    }
  }
}
</script>
