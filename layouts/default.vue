<template>
  <div>
    <nav-bar />
    <nuxt />
    <subscribe-form></subscribe-form>
    <site-footer></site-footer>
  </div>
</template>

<script>
import 'animate.css/animate.min.css'
import NavBar from '~/components/navbar'
import SiteFooter from '~/components/footer'
import SubscribeForm from '~/components/SubscribeForm'
export default {
  components: { NavBar, SiteFooter, SubscribeForm },
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
