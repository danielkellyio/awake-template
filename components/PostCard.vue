<template>
  <div class="card">
    <div class="card-image">
      <nuxt-link :to="link">
        <figure :class="`image is-${imageRatioClass}`">
          <opti-image
            v-if="image"
            :src="image"
            :width="imageRatio[0]"
            :height="imageRatio[1]"
          />
          <spinner position="absolute" />
        </figure>
      </nuxt-link>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <a :href="link">
            <h3
              :class="
                `title
                is-5
                has-text-weight-light
                ${title ? '' : 'empty-content-placeholder'}`
              "
            >
              {{ title }}
            </h3>
            <h4
              :class="{
                subtitle: true,
                'is-6': true,
                'empty-content-placeholder': !author && !date
              }"
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
            </h4>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import spinner from '~/components/spinner'
export default {
  components: { spinner },
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
    },
    imageRatioClass() {
      return this.$siteConfig.posts.imageDimensions
        .toLowerCase()
        .replace('x', 'by')
    },
    imageRatio() {
      return this.$siteConfig.posts.imageDimensions
        .toLowerCase()
        .split('x')
        .map((size) => {
          return size * 2000
        })
    }
  }
}
</script>
<style scoped lang="scss">
.subtitle {
  opacity: 0.5;
  font-size: 0.8rem;
}
.empty-content-placeholder {
  background: transparent;
  color: transparent;
  position: relative;
  height: 1em;
  &:before {
    transform-origin: left;
    content: '';
    background: #eee;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    animation: fillHorizontal 2s linear infinite;
  }
  &.subtitle {
    width: 70%;
  }
}
</style>
<style lang="scss">
.opti-image-loaded + .spinner-wrapper {
  display: none;
}
.card img {
  transition: 0.8s ease-in-out all;
  &:hover {
    transform: scale(1.02);
  }
}
</style>
