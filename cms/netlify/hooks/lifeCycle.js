export default {
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroy() {}
}
