<template>
  <div id="category-page" class="page-wrapper category-page">
    <site-hero
      :title="$store.state.name"
      :subtitle="$store.state.content"
      :image="$store.state.image"
    />
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <posts-grid :category="[$store.state.name]" :per-row="2" />
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle">
          All Categories
        </h3>
        <div class="panel">
          <nuxt-link
            v-for="cat in allCats"
            :key="cat"
            :to="`/categories/${cat.slug}`"
            :class="{
              'panel-block': true,
              'is-active': cat.slug === $route.params.single
            }"
          >
            {{ cat.name }}
          </nuxt-link>
        </div>
      </template>
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
  data() {
    return {
      allCats: []
    }
  },
  fetch({ store, params }) {
    setPageData(store, { resource: 'category', slug: params.single })
  },
  async created() {
    this.allCats = await this.$cms.category.getAll()
  }
}
</script>
