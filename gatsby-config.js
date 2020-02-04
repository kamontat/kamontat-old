/* eslint-disable */

const pjson = require("./package.json");
const datetime = +new Date();

require("dotenv").config({
  path: `.env`,
});

const getenv = (name, defaultValue) => {
  const env = process.env[name]
  if (
    env === undefined || env === "" || env === null ||
    env === "undefined" | env === "null"
  ) return defaultValue
  else return env
}

// support prod, product, production
//         stag, stage, staging
//         dev, develop, developer, development
const env = getenv("NODE_ENV", "development");

const isDev = env.includes("dev");
const isProd = env.includes("prod");
const isStaging = env.includes("stag");

module.exports = {
  siteMetadata: {
    siteUrl: `https://net.kcnt.info`,
    title: `Kamontat Chantrachirathumrong`,
    description: `This is my personal website`,
    app: pjson,
    buildTime: datetime,
    env,
  },
  plugins: [{
      resolve: `gatsby-plugin-netlify`,
      options: {},
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: getenv("SENTRY_DSN", "mock"),
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        // New settings, https://docs.sentry.io/error-reporting/configuration/?platform=javascript
        environment: env,
        release: `v${pjson.version}-${datetime}`,
        enabled: !isDev,
        maxBreadcrumbs: 50,
        debug: isDev,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          localIdentName: isDev ? "[path][name]__[local]" : "[sha512:hash:base64:8]",
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        // host: `preview.contentful.com`,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: getenv("GA_TRACKING_ID", "mock"),
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
        cookieDomain: "net.kcnt.info",
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
      options: {},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-cloudinary',
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,

        // This folder will be created if it doesn’t exist.
        uploadFolder: 'portfolio',
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kamontat-portfolio`,
        short_name: `port`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
        displayName: isDev,
        pure: true,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {},
    }, {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        allExtensions: true,
      },
    }
  ],
};

/* eslint-enable */
