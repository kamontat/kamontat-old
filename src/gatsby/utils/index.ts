import constants, { ConstantKeys, BuilderProps, Option } from "./constants";

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

export const getenvs = (): Record<ConstantKeys, string> => {
  return Object.keys(constants).reduce((p, c) => {
    const prop = constants[c as ConstantKeys];

    p[c as ConstantKeys] = getenv(prop);
    return p;
  }, {} as Record<ConstantKeys, string>);
};
