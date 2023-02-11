/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Blog`,
    author: {
      name: `Kyle Mathews`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    social: {
      twitter: `kylemathews`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    'gatsby-plugin-sass',

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        // apiURL: 'http://localhost:1337',
        apiURL: 'https://stadion-dla-elblaga.herokuapp.com',
        accessToken: '8ede3779ed85ebe401bf5d619f2703b883c5483b23027a902d21fb601f57204677b6e3076d39d11eb32c01c1a9d0f1913c596b1ac84e4eacc41cc9888f3eb6acb308c3a3bf1a1a2d5b9288c3536e3b31220366af982fd7fdd0ca98832a02adfcc9650211e33f49966a735cbe6fabfd95ec32c5485017accc6abbfd4cb115c158',
        // collectionTypes: ['article', 'project'],
        collectionTypes: ['article', 'project'],
        // contentTypes: ['articles', 'projects'],
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `Gatsby`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
