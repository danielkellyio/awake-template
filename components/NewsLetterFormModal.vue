<template>
  <modal-overlay
    id="newsletter-modal"
    :title="title"
    trigger-text="Subscribe To Newsletter"
  >
    <news-letter-form />
  </modal-overlay>
</template>
<script>
import ModalOverlay from '~/components/ModalOverlay'
import NewsLetterForm from '~/components/NewsLetterForm'
export default {
  components: { ModalOverlay, NewsLetterForm },
  computed: {
    title() {
      return (
        this.$siteConfig.newsletter.heading || 'Subscribe to Our Newsletter'
      )
    }
  }
}
</script>
