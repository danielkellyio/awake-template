export default {
  postcss: {
    preset: {
      features: {
        customProperties: false
      }
    }
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
