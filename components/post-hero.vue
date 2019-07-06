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
        <br />
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

<style lang="scss" scoped>
.hero {
  margin-top: 52px;
  background-size: cover !important;
  background-position: center;
  * {
    color: white;
  }
}
.title,
.subtitle,
.under-subtitle {
  padding: 0;
  margin: 0;
}
.subtitle {
  font-size: 1rem;
  margin-bottom: 0 !important;
}
.under-subtitle {
  display: inline-block;
  font-size: 0.8rem;
  color: white;
  border-top: 1px solid white;
  padding-top: 5px;
}
</style>
<style>
.hero * {
  color: white !important;
}
</style>
