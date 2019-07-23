<template>
  <div id="categories-page" class="page-wrapper categories-page">
    <site-hero title="Categories" image="https://picsum.photos/1800/1801" />
    <main class="section">
      <div class="container">
        <all-categories />
      </div>
    </main>
  </div>
</template>
<script>
import SiteHero from '~/components/SiteHero'
import AllCategories from '~/components/grids/CategoriesGrid'
export default {
  components: { SiteHero, AllCategories }
}
</script>
