<template>
  <resource-grid
    v-bind="$props"
    :resource="$cms.categories"
    :theme="$siteConfig.categories.theme || $siteConfig.cards.theme || null"
  >
    <template v-slot:default="{ item }">
      <category-card
        :title="item.data ? item.data.name : ''"
        :link="item.data ? `category/${item.data.slug}` : ''"
        :image="item.data ? item.data.image : ''"
        :description="item.data ? item.data.description : ''"
      />
    </template>
  </resource-grid>
</template>

<script>
import ResourceGrid from './ResourceGrid'
import CategoryCard from '~/components/cards/CategoryCard'
export default {
  name: 'CategoriesGrid',
  components: { ResourceGrid, CategoryCard },
  props: {
    perRow: { type: Number, default: 3 },
    number: { type: Number, default: 0 },
    order: { type: String, default: 'DESC' },
    exclude: { type: String, default: '' }
  }
}
</script>
