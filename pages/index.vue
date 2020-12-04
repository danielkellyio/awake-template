<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero :title="title" :subtitle="subtitle" :image="featureImage">
      <button
        v-if="$siteConfig.newsletter.on"
        class="button is-primary"
        @click="$eventBus.$emit('modal-triggered', 'newsletter-modal')"
      >
        Subscribe To Newsletter
      </button>
    </site-hero>
    <main-section theme="one-column">
      <template #default>
        <!-- All Posts -->
        <posts-grid />
      </template>
      <template #sidebar> Nothing here </template>
    </main-section>
    <news-letter-form-modal />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../helper'
import NewsLetterFormModal from '~/components/NewsLetterFormModal'

export default {
  name: 'HomePage',
  components: {
    NewsLetterFormModal,
  },
  fetch({ store, params }) {
    setPageData(store, { slug: 'home' })
  },
  head() {
    return {
      title: `Home | ${this.$siteConfig.siteName}`,
    }
  },
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage']),
  },
}
</script>

<style>
.home-page .under-subtitle {
  border-top: none;
}
</style>
