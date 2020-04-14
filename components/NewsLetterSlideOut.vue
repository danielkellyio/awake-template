<template>
  <article
    :class="
      `subscribe-form-wrapper message is-dark subtle-box-shadow ${
        active ? 'active' : ''
      }`
    "
  >
    <div class="message-header">
      <font-awesome-icon
        :icon="active ? 'times' : 'envelope'"
        :aria-label="active ? 'close' : 'open'"
        class="close"
        @click="toggle()"
      />
      <p>{{ header }}</p>
    </div>
    <div class="message-body">
      <news-letter-form />
    </div>
  </article>
</template>
<script>
import NewsLetterForm from '~/components/NewsLetterForm'
export default {
  name: 'NewsLetterSlideOut',
  components: { NewsLetterForm },
  data() {
    return {
      active: true
    }
  },
  computed: {
    header() {
      return (
        this.$siteConfig.newsletter.heading || 'Subscribe to Our Newsletter'
      )
    }
  },
  methods: {
    toggle() {
      this.active = !this.active
    }
  }
}
</script>
<style lang="scss" scoped>
.subscribe-form-wrapper {
  z-index: 3;
  @media (min-width: 500px) {
    position: fixed;
    bottom: 20px;
    right: 0;
    width: 350px;
    transform: translateX(calc(100% - 42px));
    transition: 0.6s ease all;
  }
  @media (max-width: 500px) {
    margin-bottom: 0;
    box-shadow: none;
  }
  .message-header {
    justify-content: start;
    .close {
      margin-right: 16px;
      cursor: pointer;
    }
    @media (max-width: 500px) {
      border-radius: 0;
      .close {
        display: none;
      }
    }
  }

  .message-body {
    height: 0;
    transition: 0.4s ease all;
    transition-delay: 0.6s;
    overflow: hidden;
    padding: 0;
  }
  &.active {
    transform: translateX(0);
    .message-body {
      height: 80px;
      padding: 20px;
    }
  }
}
</style>
