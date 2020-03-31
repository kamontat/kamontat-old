const _build = (key, defaults) => {
  if (defaults === undefined) defaults = "";

  // console.debug(`[debug] build object = {key: ${key}, defaults: ${defaults}}`);
  return {
    key: key,
    defaults: defaults,
  };
};

const constants = {
  NODE_ENV: _build("NODE_ENV", "development"),

  SITE_URL: _build("SITE_URL"),
  SITE_TITLE: _build("SITE_TITLE"),
  SITE_DESCRIPTION: _build("SITE_DESCRIPTION"),
  SITE_START_URL: _build("SITE_START_URL", "/"),
  SITE_BACKGROUND_COLOR: _build("SITE_BACKGROUND_COLOR", "#663399"),
  SITE_THEME_COLOR: _build("SITE_THEME_COLOR", "#663399"),
  SITE_DISPLAY: _build("SITE_DISPLAY", "minimal-ui"),
  SITE_ICON_PATH: _build("SITE_ICON_PATH", "src/images/logo.png"),

  ENV_PATH: _build("ENV_PATH", ".env"),
  ENCODING: _build("ENCODING", "utf-8"),

  SENTRY_DSN: _build("SENTRY_DSN"),

  CONTENTFUL_SPACE_ID: _build("CONTENTFUL_SPACE_ID"),
  CONTENTFUL_DELIVERY_ACCESS_TOKEN: _build("CONTENTFUL_DELIVERY_ACCESS_TOKEN"),

  CLOUDINARY_CLOUD_NAME: _build("CLOUDINARY_CLOUD_NAME"),
  CLOUDINARY_API_KEY: _build("CLOUDINARY_API_KEY"),
  CLOUDINARY_API_SECRET: _build("CLOUDINARY_API_SECRET"),
  CLOUDINARY_FOLDER_NAME: _build("CLOUDINARY_FOLDER_NAME", "portfolio"),

  GA_TRACKING_ID: _build("GA_TRACKING_ID"),
  GA_OPTIMIZE_ID: _build("GA_OPTIMIZE_ID"),

  GTM_TRACKING_ID: _build("GTM_TRACKING_ID"),
  GTM_AUTH: _build("GTM_AUTH"),
  GTM_PREVIEW: _build("GTM_PREVIEW"),
  GTM_DATA_LAYER: _build("GTM_DATA_LAYER"),

  AW_CONVERSION_ID: _build("AW_CONVERSION_ID"),

  DC_FLOODIGHT_ID: _build("DC_FLOODIGHT_ID"),
};

const getenv = (name, defaultValue) => {
  if (typeof name === "object") return getenv(name.key, name.defaults);

  if (!defaultValue) defaultValue = ""; // default value for default value

  const env = process.env[name];
  if (env === undefined || env === "" || env === null || (env === "undefined") | (env === "null")) {
    console.debug(`[debug] loading ${name}: default(${defaultValue})`);
    return defaultValue;
  } else {
    console.debug(`[debug] loading ${name}: value(${env})`);
    return env;
  }
};

const appendPlugin = (config, name, options) => {
  if (!config.plugins) config.plugins = [];

  console.debug(`[debug] add ${name} to plugins list`);

  config.plugins.push({
    resolve: name,
    options: options,
  });
};

const normalizeArray = (...arr) => {
  return arr.filter(v => v === "" || v === undefined);
};

const functions = {
  getenv,
  constants,
  appendPlugin,
  normalizeArray,
};

module.exports = functions;
