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
      matchPath: `/links/social/${name.toLowerCase()}`,
      path: "/links/social",
      component: path.resolve("./src/templates/external.tsx"),
      context: {
        link: url,
      },
    });
  });

  createPage({
    matchPath: `/links/external/contentful`,
    path: "/links/external/contentful",
    component: path.resolve("./src/templates/external.tsx"),
    context: {
      link: `https://app.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/home`
    }
  })

  createPage({
    matchPath: ``,
    page: `/links/external/cloudinary`,
    component: path.resolve("./src/templates/external.tsx"),
    context: {
      link: "https://cloudinary.com/console/media_library/folders"
    }
  })
};

/* eslint-enable */
