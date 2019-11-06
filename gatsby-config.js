const pjson = require('./package.json')
require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://net.kcnt.info`,
    title: `Kamontat Chantrachirathumrong`,
    description: `This is my personal website`,
    app: pjson
  },
  plugins: [{
    resolve: `gatsby-plugin-netlify`,
    options: {}
  }, {
    resolve: `gatsby-plugin-sitemap`,
    options: {}
  }, {
    resolve: `gatsby-plugin-sass`,
    options: {
      cssLoaderOptions: {
        localIdentName: '[sha512:hash:base64:2][sha256:hash:base32:2][md5:hash:hex:2]'
      },
    },
  }, {
    resolve: `gatsby-source-contentful`,
    options: {
      // host: `preview.contentful.com`,
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
      downloadLocal: true
    },
  }, {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GA_TRACKING_ID,
      // Defines where to place the tracking script - `true` in the head and `false` in the body
      head: false,
      // Setting this parameter is optional
      anonymize: true,
      // Setting this parameter is also optional
      respectDNT: true,
      // Avoids sending pageview hits from custom paths
      // exclude: ["/preview/**", "/do-not-track/me/too/"],
      // Delays sending pageview hits on route update (in milliseconds)
      pageTransitionDelay: 0,
      // Enables Google Optimize using your container Id
      // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
      // Enables Google Optimize Experiment ID
      // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
      // Set Variation ID. 0 for original 1,2,3....
      variationId: "0",
      // Any additional optional fields
      // sampleRate: 5,
      // siteSpeedSampleRate: 10,
      cookieDomain: "kcnt.info",
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
  }, {
    resolve: `gatsby-plugin-offline`,
    options: {},
  }],
}