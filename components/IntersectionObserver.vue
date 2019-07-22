<template>
  <div class="intersection-observer"></div>
</template>

<script>
export default {
  name: 'IntersectionObserver',
  mounted() {
    const observer = new IntersectionObserver(() => {
      this.$emit('view')
      setTimeout(() => {
        if (this.stillInViewport()) this.$emit('view')
      }, 3000)
    })
    observer.observe(this.$el)
  },
  methods: {
    stillInViewport() {
      const bounding = this.$el.getBoundingClientRect()
      return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      )
    }
  }
}
</script>
