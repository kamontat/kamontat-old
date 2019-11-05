module.exports = {
  siteMetadata: {
    title: `Kamontat Chantrachirathumrong`,
    description: `This is my personal website`,
    author: `@kamontatc`,
  },
  plugins: [{
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          localIdentName: '[sha512:hash:base64:2][sha256:hash:base32:2][md5:hash:hex:2]'
        },
      },
    }, {
      resolve: `gatsby-plugin-react-helmet`,
      options: {},
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    }, {
      resolve: `gatsby-transformer-sharp`,
      options: {},
    }, {
      resolve: `gatsby-plugin-sharp`,
      options: {},
    }, {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kamontat-portfolio`,
        short_name: `port`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    }, {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
        "displayName": false,
        "pure": true
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}