import SiteConfig, { cms } from '~/config/_siteConfig'

export default ({ app }, inject) => {
  inject('siteConfig', SiteConfig)
  inject('cms', cms)
}
