<template>
  <div>
    <nav-bar />
    <nuxt />
    <news-letter-form v-if="$siteConfig.newsletter.on" />
    <site-footer></site-footer>
  </div>
</template>

<script>
import 'animate.css/animate.min.css'
import NavBar from '~/components/navbar'
import SiteFooter from '~/components/footer'
import NewsLetterForm from '~/components/NewsLetterForm'
export default {
  components: { NavBar, SiteFooter, NewsLetterForm },
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
