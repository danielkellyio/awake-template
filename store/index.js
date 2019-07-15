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

async function setPostData(commit, slug) {
  const cmsName = global ? global.siteGlobals.cms : window.siteGlobals.cms
  const cms = await import(`~/cms/${cmsName}/posts`)
  const data = Object.assign(cms.default.getPost(slug), { pageType: 'post' })
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
