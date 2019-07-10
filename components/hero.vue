<template functional>
  <section class="hero is-medium">
    <opti-image
      class="hero-bg-img"
      :src="props.image"
      :lazy="false"
      :delay="100"
    />
    <div class="hero-body">
      <div class="container">
        <h1 class="title animated fadeInUp">
          {{ props.title }}
        </h1>
        <h2 class="subtitle animated fadeInUp slower">
          {{ props.subtitle }}
        </h2>
        <br />
        <div
          v-if="slots().default"
          class="under-subtitle animated fadeInDown slower"
        >
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
    image: { type: String, default: '' },
    color: { type: String, default: '#469af0' }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  margin-top: 52px;
  background-size: cover !important;
  background-position: center;
  text-align: center;
  overflow: hidden;
  position: relative;
}

.title {
  font-weight: 300;
  @media (min-width: 768px) {
    font-size: 3.2rem;
  }
}
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
  border-top: 2px solid $primary;
  padding-top: 5px;
}
.opti-image {
  opacity: 0;
}
.opti-image-loaded {
  opacity: 0.12;
  animation: blurIn 4.5s ease;
}
</style>
<style lang="scss">
.hero {
  .hero-bg-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    filter: grayscale(1);
    width: 100%;
  }
  .opti-image {
    opacity: 0;
  }
  .opti-image-loaded {
    opacity: 0.12;
    animation: blurIn 4.5s ease;
  }
}
</style>
