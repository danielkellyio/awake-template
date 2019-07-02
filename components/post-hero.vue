<template functional>
  <section
    class="hero is-medium"
    :style="`background-image:url(${props.image})`"
  >
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ props.title }}
        </h1>
        <h2 class="subtitle">
          {{ props.subtitle }}
        </h2>
        <div v-if="slots().default" class="under-subtitle">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    image: { type: String, default: '' }
  }
}
</script>

<style scoped>
.hero {
  margin-top: 52px;
  background-size: cover !important;
  background-color: #eee;
}
</style>
