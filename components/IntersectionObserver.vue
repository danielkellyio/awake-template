<template>
  <div class="intersection-observer"></div>
</template>

<script>
export default {
  name: 'IntersectionObserver',
  mounted() {
    const observer = new IntersectionObserver(() => {
      this.$emit('view')
    })
    observer.observe(this.$el)
  }
}
</script>
