<template>
  <generic-card
    :title="title"
    :image="image"
    :link="link"
    :image-dimensions="
      $siteConfig.posts.imageDimensions ||
        $siteConfig.cards.imageDimensions ||
        null
    "
  >
    <span
      v-if="author && $siteConfig.posts.displayAuthor"
      class="author-wrapper"
    >
      <strong>Author:</strong> {{ author }} |
    </span>
    <span v-if="date" class="date-wrapper">
      <strong>Published on:</strong> {{ datePretty }}
    </span>
  </generic-card>
</template>

<script>
import moment from 'moment'
import GenericCard from './GenericCard'
export default {
  components: { GenericCard },
  props: {
    title: {
      type: String
    },
    image: {
      type: String
    },
    link: {
      type: String
    },
    date: {
      type: String
    },
    author: {
      type: String
    }
  },
  computed: {
    datePretty() {
      return moment(this.date.split(' -').shift()).format(
        this.$siteConfig.posts.date.format
      )
    }
  }
}
</script>
