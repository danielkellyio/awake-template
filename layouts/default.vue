<template>
  <div>
    <nav-bar />
    <nuxt />
    <site-footer></site-footer>
  </div>
</template>

<script>
import 'animate.css/animate.min.css'
import NavBar from '~/components/navbar'
import SiteFooter from '~/components/footer'
export default {
  components: { NavBar, SiteFooter },
  transition: 'slide-fade',
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
