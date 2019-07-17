export const state = () => ({
  pageType: '',
  title: '',
  subtitle: '',
  featureColor: '#469af0',
  featureImage: '',
  content: '',
  author: '',
  date: ''
})
export const mutations = {
  set(state, data) {
    state = Object.assign(state, data)
  }
}
export const actions = {
  nuxtServerInit(store, context) {
    this.$cms = context.store.$cms
  },
  set({ commit }, { pageType, slug }) {
    if (pageType === 'post') {
      const data = Object.assign(this.$cms.getPost(slug), { pageType: 'post' })
      commit('set', data)
    } else {
      setOtherPageDate(commit)
    }
  }
}

function setOtherPageDate(commit) {
  const global = require('~/content/global.json')
  commit('set', {
    title: global.siteName,
    subtitle: global.tagline,
    featureImage: global.featureImage
  })
}
