export default {
  siteName: 'Bloxt',
  tagline: 'A Nuxt.js Theme for Netlify CMS',
  cms: 'netlify',
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

  // Post Listings
  columns: 3,

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
    displayAuthor: true
  }
}
