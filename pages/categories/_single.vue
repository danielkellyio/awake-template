<template>
  <div id="category-page" class="page-wrapper category-page">
    <site-hero
      :title="$store.state.name"
      :subtitle="$store.state.content"
      :image="$store.state.image"
      :theme="$siteConfig.hero.theme"
    />
    <main-section theme="one-column">
      <posts-grid :category="$store.state.slug" />
    </main-section>
  </div>
</template>
<script>
import { setPageData } from '../../helper'
import SiteHero from '~/components/SiteHero'
import PostsGrid from '~/components/grids/PostsGrid'
import MainSection from '~/components/MainSection'
export default {
  components: { PostsGrid, SiteHero, MainSection },
  fetch({ store, params }) {
    setPageData(store, { resource: 'category', slug: params.single })
  }
}
</script>
