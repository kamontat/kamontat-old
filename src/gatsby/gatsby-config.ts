/* eslint-disable @typescript-eslint/camelcase */

import pjson from "../../package.json";
import { getenv, constants, appendPlugin, getenvs } from "./utils";

const datetime = +new Date();

const result = require("dotenv").config({
  debug: true,
  path: getenv(constants.ENV_PATH),
  encoding: getenv(constants.ENCODING),
});

if (result.error && getenv(constants.CI) !== "true" && getenv(constants.ENV_EXIST) === "false") throw result.error;

// support prod, product, production
//         stag, stage, staging
//         dev, develop, developer, development
const env = getenv(constants.NODE_ENV);

const isDev = env.includes("dev");
const isProd = env.includes("prod");
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
appendPlugin(config, `gatsby-plugin-netlify`, {
  headers: {
    "/*": [`X-Application-Name: ${pjson.name}`],
  },
});

// https://www.gatsbyjs.org/packages/gatsby-plugin-sentry
appendPlugin(config, `gatsby-plugin-sentry`, {
  dsn: getenv(constants.SENTRY_DSN),
  // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
  // New settings, https://docs.sentry.io/error-reporting/configuration/?platform=javascript
  enabled: isProd,
  debug: false,
  environment: "production",
  release: `${pjson.name}@v${pjson.version}-${datetime}`,
  maxBreadcrumbs: 50,
});

// https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap
appendPlugin(config, `gatsby-plugin-sitemap`, {});

// https://www.gatsbyjs.org/packages/gatsby-source-contentful
appendPlugin(config, `gatsby-source-contentful`, {
  // host: `preview.contentful.com`,
  spaceId: getenv(constants.CONTENTFUL_SPACE_ID),
  accessToken: getenv(constants.CONTENTFUL_DELIVERY_ACCESS_TOKEN),
  downloadLocal: true,
});

// https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/
appendPlugin(config, `gatsby-plugin-react-helmet`, {});

// https://www.gatsbyjs.org/packages/gatsby-source-filesystem/
appendPlugin(config, `gatsby-source-filesystem`, {
  name: `images`,
  path: `src/images`,
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

// https://www.gatsbyjs.org/packages/gatsby-plugin-emotion/
appendPlugin(config, `gatsby-plugin-emotion`, {
  // Add any options here: https://github.com/emotion-js/emotion/tree/master/packages/babel-plugin-emotion
  sourceMap: isDev,
  cssPropOptimization: true,
  autoLabel: isDev,
  labelFormat: isDev ? "[filename]-[local]" : "",
});

// https://www.gatsbyjs.org/packages/gatsby-plugin-offline/
appendPlugin(config, `gatsby-plugin-offline`, {});

// https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/
appendPlugin(config, `gatsby-plugin-typescript`, {
  isTSX: true, // defaults to false
  allExtensions: true,
});

// https://www.gatsbyjs.org/packages/gatsby-plugin-gdpr-cookies/
appendPlugin(config, `gatsby-plugin-gdpr-cookies`, {
  googleTagManager: {
    trackingId: getenv(constants.GTM_TRACKING_ID),
    cookieName: "is-analytics-enabled",
    defaultDataLayer: {
      platform: getenv(constants.GTM_DATA_LAYER),
    },
    dataLayerName: getenv(constants.GTM_DATA_LAYER),
    gtmAuth: getenv(constants.GTM_AUTH),
    gtmPreview: getenv(constants.GTM_PREVIEW),
  },
  // defines the environments where the tracking should be available  - default is ["production"]
  environments: ["production", "development"],
});

module.exports = config;
