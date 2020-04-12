interface BuilderProps {
  key: string;
  options: Option;
}

// eslint-disable-next-line
type Json<K extends string = string, V = any> = {
  [name in K]: V;
};

interface GatsbyConfig extends Json<string> {
  // eslint-disable-next-line
  plugins: Array<any>;
}

const _build = (key: string, defaults = "", options: OptionB = {}): BuilderProps => {
  return {
    key: key,
    options: { ...options, defaults: defaults },
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
  if (enable === false) return str;

  const limitFront = parseInt((str.length * (limitFrontPercent / 100)).toFixed(0));
  const limitBack = parseInt((str.length * (limitBackPercent / 100)).toFixed(0));

  const preview = str.substr(0, limitFront);
  const endPreview = str.substring(str.length - limitBack, str.length);
  return preview.padEnd(str.length - limitBack, "*").concat(endPreview);
};

export const constants = {
  CI: _build("CI", "false", { require: false, mask: false }),
  NODE_ENV: _build("NODE_ENV", "development", { require: false, mask: false }),

  ACCESS_TOKEN: _build("ACCESS_TOKEN", "12345678900987654321", { require: true, mask: true }),
  ACCESS_SALT: _build("ACCESS_SALT", "abcd", { require: true, mask: true }),

  SITE_URL: _build("SITE_URL", "", { require: true, mask: false }),
  SITE_TITLE: _build("SITE_TITLE", "", { require: true, mask: false }),
  SITE_DESCRIPTION: _build("SITE_DESCRIPTION", "", { require: true, mask: false }),
  SITE_START_URL: _build("SITE_START_URL", "/", { require: false, mask: false }),
  SITE_BACKGROUND_COLOR: _build("SITE_BACKGROUND_COLOR", "#663399", { require: false, mask: false }),
  SITE_THEME_COLOR: _build("SITE_THEME_COLOR", "#663399", { require: false, mask: false }),
  SITE_DISPLAY: _build("SITE_DISPLAY", "minimal-ui", { require: false, mask: false }),
  SITE_ICON_PATH: _build("SITE_ICON_PATH", "src/images/logo.png", { require: false, mask: false }),
  SITE_UNIQUE_ID: _build("BUILD_ID", `${+new Date()}`, { require: false, mask: true }),
  SITE_EXPERIMENT_AB: _build("BRANCH", `master`, { require: false, mask: true }),

  ENV_EXIST: _build("ENV_EXIST", "false", { require: false, mask: false }),
  ENV_PATH: _build("ENV_PATH", ".env", { require: false, mask: false }),
  ENCODING: _build("ENCODING", "utf-8", { require: false, mask: false }),

  SENTRY_DSN: _build("SENTRY_DSN", "", { require: true, mask: true }),

  CONTENTFUL_SPACE_ID: _build("CONTENTFUL_SPACE_ID", "", { require: true, mask: true }),
  CONTENTFUL_DELIVERY_ACCESS_TOKEN: _build("CONTENTFUL_DELIVERY_ACCESS_TOKEN", "", { require: true, mask: true }),

  GTM_TRACKING_ID: _build("GTM_TRACKING_ID", "", { require: false, mask: true }),
  GTM_AUTH: _build("GTM_AUTH", "", { require: false, mask: true }),
  GTM_PREVIEW: _build("GTM_PREVIEW", "", { require: false, mask: true }),
  GTM_DATA_LAYER: _build("GTM_DATA_LAYER", "", { require: true, mask: false }),
};

type ConstantKeys = keyof typeof constants;

interface Option {
  defaults?: string;
  mask?: boolean;
  require?: boolean;
}

interface OptionB {
  mask?: boolean;
  require?: boolean;
}

export const getenv = (name: BuilderProps | string, option?: Option): string => {
  if (typeof name === "object") {
    if (!option) option = {};
    return getenv(name.key, { ...name.options, ...option });
  }

  const defaultValue = "";
  const defaultRequire = false;
  const defaultMask = false;

  if (!option) option = { defaults: defaultValue, mask: defaultMask, require: defaultRequire };

  const env = process.env[name];
  if (env === undefined || env === "" || env === null || env === "undefined" || env === "null") {
    // if (option.require === true) throw new Error(`${name} is a require data`);

    console.debug(
      `[debug] loading ${name}: default(${_mask(option.defaults || defaultValue, option.mask || defaultMask)})`,
    );
    return option.defaults || defaultValue;
  } else {
    console.debug(`[debug] loading ${name}: value(${_mask(env, option.mask || defaultMask)})`);
    return env;
  }
};

export const getenvs = (): Json<ConstantKeys, string> => {
  return Object.keys(constants).reduce((p, c) => {
    const prop = constants[c as ConstantKeys];

    p[c as ConstantKeys] = getenv(prop);
    return p;
  }, {} as Json<ConstantKeys, string>);
};

export const appendPlugin = (config: GatsbyConfig, name: string, options: Json<string>) => {
  if (!config.plugins) config.plugins = [];

  console.info(`[info] add '${name}' to plugins list`);

  config.plugins.push({
    resolve: name,
    options: options,
  });
};

export const normalizeArray = (...arr: Array<string | undefined>) => {
  return arr.filter((v) => v === "" || v === undefined);
};
