export const setPageData = (store, { pageType, slug }) => {
  if (process.browser) {
    setTimeout(() => {
      store.dispatch('set', { pageType: pageType, slug: slug })
    }, 300)
  } else {
    store.dispatch('set', { pageType: pageType, slug: slug })
  }
}

export const fullUrl = () => {
  return `${window.location.protocol}//${window.location.host}/${window.location.pathname}`
}
