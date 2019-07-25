export default {
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    const initNetlifyId = () => {
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on('init', (user) => {
          if (!user) {
            window.netlifyIdentity.on('login', () => {
              document.location.href = '/admin/'
            })
          }
        })
      }
    }
    initNetlifyId()
    document
      .getElementById('netlify-identity-widget-script')
      .addEventListener('load', initNetlifyId)
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroy() {}
}
