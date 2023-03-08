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
    title: `Stadion Dla Elbląga`,
    author: {
      name: `Lumina Studio`,
      summary: `Nowy stadion dla Elbląga`,
    },
    description: `Nowy stadion dla Elbląga`,
    siteUrl: `https://stadiondlaelblaga.pl/`,
    social: {
      twitter: `Lumina Studio`,
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
        // accessToken: '488ba4f1626036dcffb58b4cd2a32c5a32ca1e920e8f42431ed525d6ce0467780bdb84730276f43e5152897df3134e709c2d403c9e1cae2aa0f5ee615893814571c2a49593536de99d09db1b5fb05ccec2a87fe2b927faf17dbfbfec489e4a12e000f74bc777d4b16ba3e6d2f766292ad5c66f2baaafd934f71518da9fe01fd0',
        collectionTypes: ['article', 'project'],
        singleTypes: ['support'],
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stadion Dla Elbląga`,
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


    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-MCN62M5",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
      },
    },


  ],
}
