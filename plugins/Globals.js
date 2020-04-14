import SiteConfig, { CMS } from '~/config/_siteConfig'

export default ({ app }, inject) => {
  inject('siteConfig', SiteConfig)
  inject('cms', new CMS(app.$axios))
}
