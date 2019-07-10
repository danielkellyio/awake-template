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
  set({ commit }, { pageType, slug }) {
    if (pageType === 'post') {
      setPostData(commit, slug)
    } else {
      setOtherPageDate(commit)
    }
  }
}

function setPostData(commit, slug) {
  const { data, content } = require(`~/content/posts/${slug}.md`).default
  commit('set', {
    ...data,
    content,
    pageType: 'post'
  })
}
function setOtherPageDate(commit) {
  const global = require('~/content/global.json')
  commit('set', {
    title: global.siteName,
    subtitle: global.tagline,
    featureImage: global.featureImage
  })
}
