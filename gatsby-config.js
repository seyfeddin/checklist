/* eslint-disable @typescript-eslint/camelcase, @typescript-eslint/no-var-requires */
const dotenv = require('dotenv');

dotenv.config();

const queries = require('./src/utils/algolia');

module.exports = {
  siteMetadata: {
    title: 'Checklist',
    description: "The protocols we follow for the things we can't automate yet.",
    author: '@atolye15',
    siteUrl: 'https://checklists.kanvas.istanbul',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://checklists.kanvas.istanbul`,
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Checklist',
        short_name: 'Checklist',
        start_url: '/',
        background_color: '#101013',
        theme_color: '#ff0c6f',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },

    'gatsby-plugin-typescript',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'checklists',
        path: `${__dirname}/checklists`,
      },
    },

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-component'],
      },
    },

    'gatsby-plugin-graphql-codegen',
    'gatsby-plugin-sass',

    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: process.env.ALGOLIA_SKIP_INDEX === 'false' ? queries : [],
        chunkSize: 10000,
      },
    },
    {
      resolve: '@mkitio/gatsby-theme-password-protect',
      options: {
        password: process.env.SITE_PASSWORD, // delete or `undefined` to disable password protection
      },
    },

    'gatsby-plugin-sitemap',
  ],
};

/* eslint-enable @typescript-eslint/camelcase, @typescript-eslint/no-var-requires */
