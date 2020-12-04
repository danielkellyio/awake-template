module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-console': 0,
    'vue/no-v-html': 0,
    'vue/html-self-closing': 'off',
    'nuxt/no-timing-in-fetch-data': 'off',
    'space-before-function-paren': 'off',
    'vue/custom-event-name-casing': 'off',
  },
}
