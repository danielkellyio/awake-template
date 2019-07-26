import purgecss from '@fullhuman/postcss-purgecss'
import css from './css'
export default {
  postcss: {
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
          'svg'
        ],
        whitelistPatterns: [/theme/g, /spinner-position/, /fa/]
      })
    ]
  },

  // extend webpack config here
  extend(config, ctx) {
    config.module.rules.push({
      test: /\.md$/,
      use: [{ loader: 'gray-matter-loader' }]
    })
    config.resolve.alias.vue = 'vue/dist/vue.common'
  }
}
