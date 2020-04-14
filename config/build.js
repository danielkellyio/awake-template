import purgecss from '@fullhuman/postcss-purgecss'
import css from './css'
const build = {
  // extend webpack config here
  extend(config, ctx) {
    config.module.rules.push({
      test: /\.md$/,
      use: [{ loader: 'gray-matter-loader' }]
    })
    config.resolve.alias.vue = 'vue/dist/vue.common'
  }
}
if (process.env.NODE_ENV === 'production') {
  build.analyze = true
  build.postcss = {
    preset: {
      features: {
        customProperties: false
      }
    },
    plugins: [
      purgecss({
        content: [
          './pages/**/*.vue',
          './layouts/**/*.vue',
          './components/**/*.vue'
        ],
        css: css,
        whitelist: [
          'html',
          'body',
          'is-1by1',
          'is-5by4',
          'is-5by4',
          'is-4by3',
          'is-3by2',
          'is-5by3',
          'is-16by9',
          'is-2by1',
          'is-3by1',
          'is-4by5',
          'is-3by4',
          'is-2by3',
          'is-3by5',
          'is-9by16',
          'nuxt__build_indicator',
          '__nuxt',
          'svg',
          'table',
          'td',
          'th',
          'tr',
          'tbody',
          'thead',
          'tfoot'
        ],
        whitelistPatterns: [/theme/g, /spinner-position/, /fa/, /table/g]
      })
    ]
  }
}

export default build
