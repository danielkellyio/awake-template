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
  }
}
