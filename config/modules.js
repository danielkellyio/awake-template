import URL from 'url-parse'
let url = false
if (process.env.URL && process.argv[2] === 'generate') {
  url = new URL(process.env.URL)
}

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
    https: url ? url.protocol === 'https:' : null,
    host: url ? url.hostname : null,
    port: url ? url.port : null
  }
}
