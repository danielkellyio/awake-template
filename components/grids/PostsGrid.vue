<template>
  <resource-grid
    v-bind="$props"
    :resource="$cms.posts"
    :theme="$siteConfig.posts.theme || $siteConfig.cards.theme || null"
  >
    <template v-slot:default="{ item }">
      <post-card
        :title="item.data ? item.data.title : ''"
        :link="item.data ? `/${item.data.slug}` : ''"
        :image="item.data ? item.data.featureImage : ''"
        :author="item.data && item.data.author ? item.data.author : ''"
        :date="item.data ? item.data.date : ''"
      />
    </template>
  </resource-grid>
</template>

<script>
import ResourceGrid from './ResourceGrid'
import PostCard from '~/components/cards/PostCard'
export default {
  components: { ResourceGrid, PostCard },
  props: {
    perRow: { type: Number, default: 3 },
    number: { type: Number, default: 0 },
    order: { type: String, default: 'DESC' },
    category: { type: String, default: '' },
    exclude: { type: String, default: '' }
  }
}
</script>
