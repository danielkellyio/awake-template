<template>
  <div class="home-wrapper page-wrapper">
    <the-hero
      :title="title"
      :subtitle="subtitle"
      :image="featureImage"
      :theme="$siteConfig.hero.theme"
    >
      <button class="button is-primary">
        Subscribe To Newsletter
      </button>
    </the-hero>
    <main class="section">
      <div class="container">
        <latest-posts></latest-posts>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../helper'
import TheHero from '~/components/hero'
import LatestPosts from '~/components/PostsGrid'

export default {
  name: 'HomePage',
  components: {
    TheHero,
    LatestPosts
  },
  fetch({ store, params }) {
    setPageData(store, { pageType: 'home', slug: 'home' })
  },
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage'])
  },
  mounted() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
  }
}
</script>

<style>
.home-wrapper .under-subtitle {
  border-top: none;
}
</style>
