<template>
  <generic-card :title="title" :image="image" :link="link">
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
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
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
