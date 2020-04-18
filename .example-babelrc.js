module.exports = function (api) {
  api.cache(true);

  const plugins = []
  const presets = []

  presets.push("babel-preset-gatsby")

  // plugins.push("transform-class-properties")
  // plugins.push("macros")
  // if (process.env.WITH_COVERAGE === "true") plugins.push("istanbul")

  return {
    "presets": presets,
    "plugins": plugins
  }
}
