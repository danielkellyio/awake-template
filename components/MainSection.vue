<template>
  <main class="section page-main-section">
    <div class="container">
      <div class="columns">
        <div
          v-if="computedTheme === 'sidebar-left'"
          class="column is-one-quarter"
        >
          <slot name="sidebar"></slot>
        </div>
        <div
          :class="{
            column: true,
            'is-full': computedTheme === 'one-column' && !oneColumnConstrained,
            'is-offset-2':
              oneColumnConstrained && computedTheme === 'one-column',
            'is-8': oneColumnConstrained && computedTheme === 'one-column',
            'is-three-quarters': computedTheme !== 'one-column'
          }"
        >
          <slot></slot>
        </div>
        <div
          v-if="computedTheme === 'sidebar-right'"
          class="column is-one-quarter"
        >
          <slot name="sidebar"></slot>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  props: {
    oneColumnConstrained: { type: Boolean, default: false },
    theme: { type: String, default: '' }
  },
  computed: {
    computedTheme() {
      if (this.theme) {
        return this.theme
      }
      if (this.$siteConfig.layout.theme) {
        return this.$siteConfig.layout.theme
      }
      return 'one-column'
    }
  }
}
</script>

<style lang="scss">
.page-main-section {
  margin-top: 52px;
}
.hero + .page-main-section {
  margin-top: initial;
}
</style>
