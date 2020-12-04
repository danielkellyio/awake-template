export const setPageData = (store, { resource, slug }) => {
  return new Promise((resolve) => {
    if (process.browser) {
      setTimeout(() => {
        store.dispatch('set', { resource, slug })
        resolve()
      }, 200)
    } else {
      store.dispatch('set', { resource, slug })
      resolve()
    }
  })
}

export const fullUrl = () => {
  return `${window.location.protocol}//${window.location.host}/${window.location.pathname}`
}

export const getFormattedDate = (date) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const dateObj = new Date(date)
  return `${
    months[dateObj.getMonth()]
  } ${dateObj.getDate()}, ${dateObj.getFullYear()}`
}

/**
 * Weird hacky thing to make page transitions work properly
 * https://github.com/nuxt/nuxt.js/issues/4132
 * @param f
 */
export const commitTimeout = (f) => {
  process.client ? setTimeout(() => f(), 20) : f()
}
