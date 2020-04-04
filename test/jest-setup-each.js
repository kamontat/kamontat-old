// eslint-disable-next-line @typescript-eslint/no-var-requires
const enzyme = require("enzyme");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Adapter = require("enzyme-adapter-react-16");

// https://github.com/styled-components/jest-styled-components#global-installation
require("jest-styled-components");

// https://www.npmjs.com/package/enzyme-to-json
enzyme.configure({
  adapter: new Adapter(),
});
