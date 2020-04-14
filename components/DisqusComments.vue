<template>
  <div v-if="$siteConfig.disqus.on" class="comments-wrapper section">
    <a
      v-if="$siteConfig.disqus.loadingStrategy === 'button' && !displayed"
      class="button is-fullwidth is-outlined is-large"
      @click="displayed = true"
    >
      Load Comments
    </a>
    <intersection-observer
      v-if="$siteConfig.disqus.loadingStrategy === 'lazy'"
      @view="displayed = true"
    />
    <vue-disqus
      v-if="
        $siteConfig.disqus.siteShortName &&
          (displayed || $siteConfig.disqus.loadingStrategy === 'onload')
      "
      :shortname="$siteConfig.disqus.siteShortName"
      :identifier="identifier"
    />

    <!-- Warning to Provide Disqus Site Short Name -->
    <div
      v-if="$siteConfig.disqus.on && !$siteConfig.disqus.siteShortName"
      class="notification is-danger"
    >
      Disqus site short name is required!
    </div>
  </div>
</template>
<script>
export default {
  name: 'DisqusComments',
  props: {
    identifier: { type: String, required: true }
  },
  data() {
    return {
      displayed: false
    }
  }
}
</script>
