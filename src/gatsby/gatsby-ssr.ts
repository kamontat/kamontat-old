/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import { ReplaceRendererArgs } from "gatsby";

// Adds a class name to the body element
exports.onRenderBody = ({ setBodyAttributes }: ReplaceRendererArgs) => {
  setBodyAttributes({
    className: "light-dark-mode",
  });
};
