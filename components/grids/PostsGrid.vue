<template>
  <resource-grid
    v-bind="$props"
    :resource="$cms.posts"
    :theme="$siteConfig.posts.theme || $siteConfig.cards.theme || null"
  />
</template>

<script>
import ResourceGrid from './ResourceGrid'
export default {
  components: { ResourceGrid },
  props: {
    perRow: { type: Number, default: 3 },
    number: { type: Number, default: 0 },
    order: { type: String, default: 'DESC' },
    category: { type: String, default: '' },
    exclude: { type: String, default: '' }
  }
}
</script>
