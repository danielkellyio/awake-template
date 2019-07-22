<template>
  <div id="categories-page" class="page-wrapper">
    <site-hero title="Categories" />
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
