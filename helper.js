export const setPageData = (store, { resource, slug }) => {
  if (process.browser) {
    setTimeout(() => {
      store.dispatch('set', { resource: resource, slug: slug })
    }, 350)
  } else {
    store.dispatch('set', { resource: resource, slug: slug })
  }
}

export const fullUrl = () => {
  return `${window.location.protocol}//${window.location.host}/${window.location.pathname}`
}

export const getFormattedDate = (date) => {
  const months = [
    '',
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
    'December'
  ]
  const dateObj = new Date(date)
  return `${
    months[dateObj.getMonth()]
  } ${dateObj.getDate()}, ${dateObj.getFullYear()}`
}
