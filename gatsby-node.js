/* eslint-disable */

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);

exports.createPages = async ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions;

  const {
    data
  } = await graphql(`
    query {
      social: allContentfulSocial(filter: { node_locale: { eq: "en-US" } }) {
        accounts: nodes {
          name
          url
        }
      }
    }
  `);

  data.social.accounts.forEach(({
    url,
    name
  }) => {
    createPage({
      matchPath: `/social/${name.toLowerCase()}`,
      path: "/social",
      component: path.resolve("./src/templates/social.tsx"),
      context: {
        social: url,
      },
    });
  });
};

/* eslint-enable */
