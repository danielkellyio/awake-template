<template>
  <div id="home-page" class="page-wrapper">
    <site-hero
      :title="$store.state.name"
      :subtitle="$store.state.content"
      :image="$store.state.image"
      :theme="$siteConfig.hero.theme"
    />
    <main class="section">
      <div class="container">
        <posts-grid :category="$store.state.slug" />
      </div>
    </main>
  </div>
</template>
<script>
import { setPageData } from '../../helper'
import SiteHero from '~/components/SiteHero'
import PostsGrid from '~/components/grids/PostsGrid'
export default {
  components: { PostsGrid, SiteHero },
  fetch({ store, params }) {
    setPageData(store, { resource: 'categories', slug: params.slug })
  }
}
</script>
