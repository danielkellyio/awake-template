<template>
  <div id="categories-page" class="page-wrapper categories-page">
    <site-hero title="Categories" image="https://picsum.photos/1800/1801" />
    <main-section theme="one-column">
      <all-categories />
    </main-section>
  </div>
</template>
<script>
import SiteHero from '~/components/SiteHero'
import MainSection from '~/components/MainSection'
import AllCategories from '~/components/grids/CategoriesGrid'
export default {
  components: { SiteHero, AllCategories, MainSection }
}
</script>
