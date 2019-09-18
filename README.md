Awake is a Nuxt.js template for generating a beautifully robust static site with blog.

# Features

- Simple modern design based on the Bulma css framework (with unused css purged via [purgecss](https://www.purgecss.com/))
- Site search
- Statically generated API for posts and categories
- Disqus powered comments
- Mailchimp powered newsletter
- Highly customizable with out of the box configurations
- Built with performance in mind
- Isolated Netlify CMS driver (with more CMS drivers planned for future) for easily migrating between various headless cms'
- Images automatically resized for various screens and given srcsets

# Use Awake on Netlify

Simply click the "Deploy to Netlify" button and then configure it to fit your needs as described below.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/danielkellyio/awake-template)

# Required Netlify configuration

If you decide to deploy to Netlify, there are two things you need to configure on Netlify so that Netlify CRM works.

1. In your Netlify deployment of Awake, go to Site Settings. Inside of Site Settings, find Identity in the sidebar menu. Then find Registration > Registration preferences, and select Edit settings, then set it to Invite only. By setting Identity to Invite only, you will ensure only the people you invite can edit your content via Netlify CMS.
2. Enable Git Gateway. This connects your site to Git provider’s API, allowing tools like Netlify CMS to work with content, branches, and pull requests on your users’ behalf. Go to **Settings > Identity > Services > Git Gateway**, and click **Enable Git Gateway**. This will automatically provision your site so that Identity users have access to Git Gateway’s selected endpoints on your site’s connected GitHub/GitLab repository.

# Configuration

Site configuration is found in `/config/_siteConfig.js`. Here you can customize site settings such as the site name, layout, disqus and mailchimp setup, image sizes and more. Any of these can be setup to use environment variables if you so desire, in order to be able to configure them directly from the Netlify interface. See the setup for google analytics which already uses an environment variable as an example of this.

```
googleAnalytics: {
    on: true,
    id: process.env.GOOGLE_ANALYTICS_ID
},
```

# Editing Content

Posts and categories can be edited in Netlify CMS at \[your-site-url]/admin. At this time any new pages must be created in the code itself and committed to the repo

# Local Development

Since all content is store in the git repo with Netlify CMS, local development is a breeze. Simply install node, pull down the repo, install the dependencies with `npm install`, and run `npm run dev`.
