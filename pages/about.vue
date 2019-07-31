<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <main-section>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
      eligendi impedit inventore ipsa laboriosam libero magnam modi odio, sunt
      temporibus. Distinctio doloremque eum magni nostrum quasi ratione rem
      repudiandae sit!
    </main-section>
  </div>
</template>
<script>
import MainSection from '~/components/MainSection'
export default {
  head() {
    return {
      title: `About | ${this.$siteConfig.siteName}`
    }
  },
  components: { MainSection }
}
</script>
