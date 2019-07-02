<template>
  <div>
    <nav-bar />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import NavBar from '~/components/navbar'
export default {
  components: { NavBar },
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>
