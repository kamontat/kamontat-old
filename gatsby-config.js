/* eslint-disable */

const ts = require("gatsby-plugin-ts-config");

module.exports = ts.generateConfig({
  // projectRoot: __dirname,
  configDir: "src/gatsby",
  babel: false,
  tsNode: true
});

/* eslint-enable */
