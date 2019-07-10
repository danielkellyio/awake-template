<template>
  <div class="card">
    <div class="card-image">
      <a :href="link">
        <figure class="image is-4by3">
          <opti-image :src="image" />
        </figure>
      </a>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <a :href="link" class="subtitle is-4">
            {{ title }}
          </a>
        </div>
      </div>

      <div class="content">
        <div v-html="content"></div>
        <br />
        <time :datetime="date">{{ date }}</time>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    content: {
      type: String
    },
    link: {
      type: String
    },
    date: {
      type: String
    }
  }
}
</script>
