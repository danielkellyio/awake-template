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
      setPostData(commit, slug, this.$cms)
    } else {
      setOtherPageDate(commit)
    }
  }
}

function setPostData(commit, slug, cms) {
  const data = Object.assign(cms.getPost(slug), { pageType: 'post' })
  commit('set', data)
}

function setOtherPageDate(commit) {
  const global = require('~/content/global.json')
  commit('set', {
    title: global.siteName,
    subtitle: global.tagline,
    featureImage: global.featureImage
  })
}
