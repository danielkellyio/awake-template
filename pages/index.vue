<template>
  <div id="home-page" class="page-wrapper home-page">
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
    <main-section theme="one-column">
      <template v-slot:default>
        <latest-posts />
      </template>
      <template v-slot:sidebar>
        Nothing here
      </template>
    </main-section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../helper'
import SiteHero from '~/components/SiteHero'
import LatestPosts from '~/components/grids/PostsGrid'
import MainSection from '~/components/MainSection'

export default {
  name: 'HomePage',
  components: {
    SiteHero,
    LatestPosts,
    MainSection
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
.home-page .under-subtitle {
  border-top: none;
}
</style>
