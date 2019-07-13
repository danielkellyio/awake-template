<template>
  <div class="card">
    <div class="card-image">
      <nuxt-link :to="link">
        <figure class="image">
          <opti-image :src="image" width="800" height="400" />
        </figure>
      </nuxt-link>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <a :href="link">
            <h3 class="title is-5 has-text-weight-light">{{ title }}</h3>
            <h4 class="subtitle is-6">
              <span
                v-if="author && $globals.displayAuthor"
                class="author-wrapper"
              >
                <strong>Author:</strong> {{ author }} |
              </span>
              <span v-if="date" class="date-wrapper">
                <strong>Published on:</strong> {{ datePretty }}
              </span>
            </h4>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    title: {
      type: String,
      required: true
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
      return moment(this.date).format('MMMM Do, YYYY')
    }
  }
}
</script>
<style scoped lang="scss">
.subtitle {
  opacity: 0.5;
  font-size: 0.8rem;
}
</style>
