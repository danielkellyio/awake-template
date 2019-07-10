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
          <a :href="link" class="subtitle is-5">
            {{ title }}
          </a>
        </div>
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
    link: {
      type: String
    },
    date: {
      type: String
    }
  }
}
</script>
