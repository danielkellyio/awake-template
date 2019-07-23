<template>
  <div id="home-page" class="page-wrapper">
    <site-hero
      :title="title"
      :subtitle="subtitle"
      :image="featureImage"
      :theme="$siteConfig.hero.theme"
    >
      <button class="button is-primary">
        Subscribe To Newsletter
      </button>
    </site-hero>
    <main class="section">
      <div class="container">
        <latest-posts />
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../helper'
import SiteHero from '~/components/SiteHero'
import LatestPosts from '~/components/grids/PostsGrid'

export default {
  name: 'HomePage',
  components: {
    SiteHero,
    LatestPosts
  },
  fetch({ store, params }) {
    setPageData(store, { slug: 'home' })
  },
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage'])
  }
}
</script>

<style>
.home-wrapper .under-subtitle {
  border-top: none;
}
</style>
