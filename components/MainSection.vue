<template>
  <main class="section">
    <div class="container">
      <div class="columns">
        <div
          v-if="$siteConfig.layout.theme === 'sidebar-left'"
          class="column is-one-quarter"
        >
          <slot name="sidebar"></slot>
        </div>
        <div
          :class="{
            column: true,
            'is-full':
              $siteConfig.layout.theme === 'one-column' &&
              !oneColumnConstrained,
            'is-offset-2': oneColumnConstrained,
            'is-8': oneColumnConstrained,
            'is-three-quarters': $siteConfig.layout.theme !== 'one-column'
          }"
        >
          <slot name="content"></slot>
        </div>
        <div
          v-if="$siteConfig.layout.theme === 'sidebar-right'"
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
    oneColumnConstrained: { type: Boolean, default: false }
  }
}
</script>
