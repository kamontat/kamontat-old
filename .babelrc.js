module.exports = function (api) {
  api.cache(true);

  const plugins = []
  const presets = []

  plugins.push("transform-class-properties")
  plugins.push("istanbul")

  presets.push("babel-preset-gatsby")

  return {
    "plugins": plugins,
    "presets": presets
  }
}
