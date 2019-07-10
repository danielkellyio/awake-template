<template>
  <div id="disqus_thread"></div>
</template>
<script>
import { fullUrl } from '../helper'

// Configure Diqus in config/global.js !!

export default {
  mounted() {
    /* eslint-disable no-unused-vars */
    /* eslint-disable camelcase */
    function disqus_config() {
      this.page.url = fullUrl() // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = this.$route.params.singlePost // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    }
    ;(() => {
      const d = document
      const s = d.createElement('script')
      s.src = `https://${this.$globals.disqusSiteShortName}.disqus.com/embed.js`
      s.setAttribute('data-timestamp', +new Date())
      ;(d.head || d.body).appendChild(s)
    })()
  }
}
</script>
