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
  newsletter: {
    on: true,
    heading: 'Subscribe to Our Newsletter',
    btnText: 'Subscribe',
    // Can be the form action on a mail chimp form, a hubspot form,
    // or any other url you want to post the form data to
    mailchimp: {
      on: true,
      formAction:
        'https://danielkelly.us3.list-manage.com/subscribe/post?u=d3c2e762b66a2353d0bc29bf3&amp;id=2abeaa06e0'
    },
    custom: {
      on: false,
      formAction: ''
    }
  },

  // Posts
  posts: {
    on: true,
    displayAuthor: true,
    perRow: 3,
    perPage: 3
  }
}

export const cms = CMS
