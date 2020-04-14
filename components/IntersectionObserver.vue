<template>
  <div class="intersection-observer"></div>
</template>

<script>
require('intersection-observer')

export default {
  name: 'IntersectionObserver',
  mounted() {
    const observer = new window.IntersectionObserver((e) => {
      if (e[0].isIntersecting) {
        this.$emit('view')
        let times = 0
        const interval = setInterval(() => {
          if (this.stillInViewport()) this.$emit('view')
          if (times === 6) clearInterval(interval)
          times++
        }, 3000)
      }
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
