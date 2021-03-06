/* eslint-disable @typescript-eslint/camelcase */
import { config as envConfig } from "dotenv";

import pjson from "../../package.json";

import { getenv, getenvs } from "./utils";
import constants from "./utils/constants";
import { ConfigBuilder } from "./utils/builder";

import { DisplayOption } from "./utils/plugins/manifest";

const datetime = +new Date();

const result = envConfig({
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

// NEW VERSION

const builder = new ConfigBuilder();

builder.addMetaEnv("siteUrl", constants.SITE_URL);
builder.addMetaEnv("title", constants.SITE_TITLE);
builder.addMetaEnv("description", constants.SITE_DESCRIPTION);

builder.addMeta("app", pjson);
builder.addMeta("buildTime", datetime);
builder.addMeta("environment", getenvs());

// https://www.gatsbyjs.org/packages/gatsby-plugin-netlify
builder.addPlugin(`gatsby-plugin-netlify`, {
  headers: {
    "/*": [`X-Application-Name: ${pjson.name}`],
  },
});

// https://www.gatsbyjs.org/packages/gatsby-plugin-sentry
builder.addPlugin(`gatsby-plugin-sentry`, {
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
builder.addPlugin("gatsby-plugin-sitemap", {
  exclude: [`/go/*`, "/debug"],
});

// https://www.gatsbyjs.org/packages/gatsby-source-contentful
builder.addPlugin(`gatsby-source-contentful`, {
  // host: `preview.contentful.com`,
  spaceId: getenv(constants.CONTENTFUL_SPACE_ID),
  accessToken: getenv(constants.CONTENTFUL_DELIVERY_ACCESS_TOKEN),
  downloadLocal: true,
});

// https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/
builder.addPlugin(`gatsby-plugin-react-helmet`, {});

// https://www.gatsbyjs.org/packages/gatsby-source-filesystem/
builder.addPlugin(`gatsby-source-filesystem`, {
  name: `images`,
  path: `src/images`,
});

// https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/
builder.addPlugin(`gatsby-plugin-sharp`, {});

// https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/
builder.addPlugin(`gatsby-transformer-sharp`, {});

// https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/
builder.addPlugin(`gatsby-plugin-manifest`, {
  name: pjson.name,
  short_name: pjson.name,
  description: pjson.description,
  start_url: getenv(constants.SITE_START_URL),
  background_color: getenv(constants.SITE_BACKGROUND_COLOR),
  theme_color: getenv(constants.SITE_THEME_COLOR),
  display: getenv(constants.SITE_DISPLAY) as DisplayOption,
  icon: getenv(constants.SITE_ICON_PATH),
});

// https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/
builder.addPlugin(`gatsby-plugin-typescript`, {
  isTSX: true, // defaults to false
  allExtensions: true,
});

// https://www.gatsbyjs.org/packages/gatsby-plugin-emotion/
builder.addPlugin(`gatsby-plugin-emotion`, {
  // Add any options here: https://github.com/emotion-js/emotion/tree/master/packages/babel-plugin-emotion
  sourceMap: isDev,
  cssPropOptimization: true,
  autoLabel: isDev,
  labelFormat: isDev ? "[filename]-[local]" : "",
});

// https://www.gatsbyjs.org/packages/gatsby-plugin-gdpr-cookies/
builder.addPlugin(`gatsby-plugin-gdpr-cookies`, {
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

// https://www.gatsbyjs.org/packages/gatsby-plugin-offline/
builder.addPlugin(`gatsby-plugin-offline`, {});

export default builder.build();
