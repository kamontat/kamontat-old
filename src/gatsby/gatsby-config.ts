/* eslint-disable @typescript-eslint/camelcase */

import pjson from "../../package.json";
import { getenv, constants, appendPlugin, normalizeArray, getenvs } from "./utils";

const datetime = +new Date();

const result = require("dotenv").config({
  debug: true,
  path: getenv(constants.ENV_PATH),
  encoding: getenv(constants.ENCODING),
});

if (result.error && getenv(constants.ENV_EXIST) === "false") throw result.error;

// support prod, product, production
//         stag, stage, staging
//         dev, develop, developer, development
const env = getenv(constants.NODE_ENV);

const isDev = env.includes("dev");
// const isProd = env.includes("prod");
// const isStaging = env.includes("stag");

const siteData = {
  siteUrl: getenv(constants.SITE_URL),
  title: getenv(constants.SITE_TITLE),
  description: getenv(constants.SITE_DESCRIPTION),
  app: pjson,
  buildTime: datetime,
  environment: getenvs(),
};

const config = {
  siteMetadata: siteData,
  plugins: [],
};

// https://www.gatsbyjs.org/packages/gatsby-plugin-netlify
appendPlugin(config, `gatsby-plugin-netlify`, {});

// https://www.gatsbyjs.org/packages/gatsby-plugin-sentry
appendPlugin(config, `gatsby-plugin-sentry`, {
  dsn: getenv(constants.SENTRY_DSN),
  // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
  // New settings, https://docs.sentry.io/error-reporting/configuration/?platform=javascript
  enabled: true,
  debug: isDev,
  environment: "production",
  release: `${pjson.name}@v${pjson.version}-${datetime}`,
  maxBreadcrumbs: 50,
});

// https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap
appendPlugin(config, `gatsby-plugin-sitemap`, {});

// https://www.gatsbyjs.org/packages/gatsby-plugin-sass
appendPlugin(config, `gatsby-plugin-sass`, {
  cssLoaderOptions: {
    localIdentName: isDev ? "[path][name]__[local]" : "[sha512:hash:base64:8]",
  },
});

// https://www.gatsbyjs.org/packages/gatsby-source-contentful
appendPlugin(config, `gatsby-source-contentful`, {
  // host: `preview.contentful.com`,
  spaceId: getenv(constants.CONTENTFUL_SPACE_ID),
  accessToken: getenv(constants.CONTENTFUL_DELIVERY_ACCESS_TOKEN),
  downloadLocal: true,
});

// https://www.gatsbyjs.org/packages/gatsby-plugin-google-gtag/
appendPlugin(config, `gatsby-plugin-google-gtag`, {
  // You can add multiple tracking ids and a pageview event will be fired for all of them.
  trackingIds: normalizeArray(
    getenv(constants.GA_TRACKING_ID), // Google Analytics / GA
    getenv(constants.AW_CONVERSION_ID), // Google Ads / Adwords / AW
    getenv(constants.DC_FLOODIGHT_ID), // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
  ),
  // This object gets passed directly to the gtag config command
  // This config will be shared across all trackingIds
  gtagConfig: {
    optimize_id: getenv(constants.GA_OPTIMIZE_ID),
    anonymize_ip: true,
    cookie_expires: 0,
  },
  // This object is used for configuration specific to this plugin
  pluginConfig: {
    // Puts tracking script in the head instead of the body
    head: false,
    // Setting this parameter is also optional
    respectDNT: true,
    // Avoids sending pageview hits from custom paths
    // exclude: ["/preview/**"],
  },
});

// https://www.gatsbyjs.org/packages/gatsby-plugin-google-tagmanager/
appendPlugin(config, `gatsby-plugin-google-tagmanager`, {
  id: getenv(constants.GTM_TRACKING_ID),

  // Include GTM in development.
  // Defaults to false meaning GTM will only be loaded in production.
  includeInDevelopment: false,

  // datalayer to be set before GTM is loaded
  // should be an object or a function that is executed in the browser
  // Defaults to null
  defaultDataLayer: {
    platform: "gatsby",
  },

  // Specify optional GTM environment details.
  gtmAuth: getenv(constants.GTM_AUTH),
  gtmPreview: getenv(constants.GTM_PREVIEW),
  dataLayerName: getenv(constants.GTM_DATA_LAYER),
});

// https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/
appendPlugin(config, `gatsby-plugin-react-helmet`, {});

// https://www.gatsbyjs.org/packages/gatsby-source-filesystem/
appendPlugin(config, `gatsby-source-filesystem`, {
  name: `images`,
  path: `src/images`,
});

// https://www.gatsbyjs.org/packages/gatsby-transformer-cloudinary/
appendPlugin(config, `gatsby-transformer-cloudinary`, {
  cloudName: getenv(constants.CLOUDINARY_CLOUD_NAME),
  apiKey: getenv(constants.CLOUDINARY_API_KEY),
  apiSecret: getenv(constants.CLOUDINARY_API_SECRET),

  // This folder will be created if it doesn’t exist.
  uploadFolder: getenv(constants.CLOUDINARY_FOLDER_NAME),
});

// https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/
appendPlugin(config, `gatsby-transformer-sharp`, {});

// https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/
appendPlugin(config, `gatsby-plugin-sharp`, {});

// https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/
appendPlugin(config, `gatsby-plugin-manifest`, {
  name: pjson.name,
  short_name: pjson.name,
  start_url: getenv(constants.SITE_START_URL),
  background_color: getenv(constants.SITE_BACKGROUND_COLOR),
  theme_color: getenv(constants.SITE_THEME_COLOR),
  display: getenv(constants.SITE_DISPLAY),
  icon: getenv(constants.SITE_ICON_PATH),
});

// https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components/
appendPlugin(config, `gatsby-plugin-styled-components`, {
  // Add any options here
  displayName: isDev,
  pure: true,
});

// https://www.gatsbyjs.org/packages/gatsby-plugin-offline/
appendPlugin(config, `gatsby-plugin-offline`, {});

// https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/
appendPlugin(config, `gatsby-plugin-typescript`, {
  isTSX: true, // defaults to false
  allExtensions: true,
});

module.exports = config;
