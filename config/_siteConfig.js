/**
 * CMS Configuration
 * Alter 'netlify' in the import statment below to one of the following:
 * netlify
 */
import CMS from '../cms/netlify/cms'

/**
 * General Site configurations
 */
export default {
  siteName: 'Bloxt',
  tagline: 'A Nuxt.js Theme for Netlify CMS',
  featureImage: '/uploads/home-hero.jpg',
  logo: 'logo.png',
  mainMenu: [
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Contact',
      link: '/contact'
    }
  ],
  hero: {
    theme: 'dark' // options: mist, light, dark
  },

  // Disqus
  disqus: {
    on: false,
    siteShortName: '' // 'blog-danielkelly-io'
  },

  // Newsletter Subscribe
  newsLetter: {
    on: true,
    heading: 'Subscribe to Our Newsletter',
    btnText: 'Subscribe'
  },

  // Posts
  posts: {
    on: true,
    displayAuthor: true,
    perRow: 3,
    perPage: 10
  }
}

export const cms = CMS
