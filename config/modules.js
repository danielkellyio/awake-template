export const modules = [
  // Doc: https://axios.nuxtjs.org/usage
  '@nuxtjs/axios',
  '@nuxtjs/pwa',
  '@nuxtjs/eslint-module',
  '@nuxtjs/style-resources',
  'nuxt-fontawesome'
]

export const modulesSettings = {
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  },
  styleResources: {
    scss: ['./assets/scss/_vars.scss']
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    host: process.argv[2] === 'generate' ? process.env.URL : null,
    port: process.argv[2] === 'generate' ? process.env.PORT : null
  }
}
