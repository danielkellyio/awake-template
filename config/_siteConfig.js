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
    },
    {
      name: 'Categories',
      link: '/categories'
    }
  ],
  hero: {
    theme: 'dark' // options: mist, light, dark
  },
  layout: {
    width: 'contained' // Options: contained, full
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

  // Categories
  categories: {
    on: true,
    perPage: 6
  },
  // Posts
  posts: {
    on: true,
    theme: 'image-grid', // Options: boxes, grid, image-grid
    imageDimensions: '2x1', // Options: 1x1, 5x4, 4x3, 3x2, 5x3, 16x9, 2x1, 3x1, 4x5, 3x4, 2x3, 3x5, 9x16
    displayAuthor: true,
    date: {
      display: true,
      format: 'MMMM Do, YYYY' // See https://momentjs.com/ for available formats
    },
    perRow: 3,
    perPage: 6,
    withSidebar: false // Customize sidebar contents in ~/components/PostSidebar.vue
  }
}

export const cms = CMS
