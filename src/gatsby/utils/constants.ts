export interface Option {
  defaults?: string;
  mask?: boolean;
  require?: boolean;
}

export interface BuilderProps {
  key: string;
  options: Option;
}

interface BuildOption {
  mask?: boolean;
  require?: boolean;
}

const _build = (key: string, defaults = "", options: BuildOption = {}): BuilderProps => {
  return {
    key: key,
    options: { ...options, defaults: defaults },
  };
};

const constants = {
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

export type ConstantKeys = keyof typeof constants;

export default constants;
