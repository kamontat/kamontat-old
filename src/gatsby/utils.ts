interface BuilderProps {
  key: string;
  defaults: string;
}

interface Json {
  // eslint-disable-next-line
  [name: string]: any;
}

interface GatsbyConfig extends Json {
  // eslint-disable-next-line
  plugins: Array<any>;
}

const _build = (key: string, defaults = ""): BuilderProps => {
  return {
    key: key,
    defaults: defaults,
  };
};

/**
 *
 * @param str
 * @param enable
 * @param limitFrontPercent how many percent to show on front
 * @param limitBackPercent how many percent to show on back
 */
const _mask = (str: string, enable: boolean, limitFrontPercent = 30, limitBackPercent = 15) => {
  if (!enable) return str;

  const limitFront = parseInt((str.length * (limitFrontPercent / 100)).toFixed(0));
  const limitBack = parseInt((str.length * (limitBackPercent / 100)).toFixed(0));

  const preview = str.substr(0, limitFront);
  const endPreview = str.substring(str.length - limitBack, str.length);
  return preview.padEnd(str.length - limitBack, "*").concat(endPreview);
};

export const constants = {
  NODE_ENV: _build("NODE_ENV", "development"),

  SITE_URL: _build("SITE_URL"),
  SITE_TITLE: _build("SITE_TITLE"),
  SITE_DESCRIPTION: _build("SITE_DESCRIPTION"),
  SITE_START_URL: _build("SITE_START_URL", "/"),
  SITE_BACKGROUND_COLOR: _build("SITE_BACKGROUND_COLOR", "#663399"),
  SITE_THEME_COLOR: _build("SITE_THEME_COLOR", "#663399"),
  SITE_DISPLAY: _build("SITE_DISPLAY", "minimal-ui"),
  SITE_ICON_PATH: _build("SITE_ICON_PATH", "src/images/logo.png"),
  SITE_UNIQUE_ID: _build("BUILD_ID", `${+new Date()}`),
  SITE_EXPERIMENT_AB: _build("BRANCH", `master`),

  ENV_EXIST: _build("ENV_EXIST", "false"),
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

type ConstantKeys = keyof typeof constants;

export const getenv = (name: BuilderProps | string, defaultValue = "", mask = true): string => {
  if (typeof name === "object") return getenv(name.key, name.defaults);

  const env = process.env[name];
  if (env === undefined || env === "" || env === null || env === "undefined" || env === "null") {
    console.debug(`[debug] loading ${name}: default(${_mask(defaultValue, mask)})`);
    return defaultValue;
  } else {
    console.debug(`[debug] loading ${name}: value(${_mask(env, mask)})`);
    return env;
  }
};

export const getenvs = (): Json => {
  return Object.keys(constants).reduce((p, c) => {
    const prop = constants[c as ConstantKeys];

    p[prop.key] = getenv(prop);
    return p;
  }, {} as Json);
};

export const appendPlugin = (config: GatsbyConfig, name: string, options: Json) => {
  if (!config.plugins) config.plugins = [];

  console.debug(`[debug] add ${name} to plugins list`);

  config.plugins.push({
    resolve: name,
    options: options,
  });
};

export const normalizeArray = (...arr: Array<string | undefined>) => {
  return arr.filter((v) => v === "" || v === undefined);
};
