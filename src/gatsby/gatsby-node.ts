/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
import path from "path";
import { GatsbyNode } from "gatsby";

type createPages = GatsbyNode["createPages"];
type onCreateBabelConfig = GatsbyNode["onCreateBabelConfig"];

interface DataProps {
  social: {
    accounts: Array<{
      name: string;
      url: string;
    }>;
  };
}

export const createPages: createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql<DataProps>(`
    query {
      social: allContentfulSocial(filter: { node_locale: { eq: "en-US" } }) {
        accounts: nodes {
          name
          url
        }
      }
    }
  `);

  if (data)
    data.social.accounts.forEach(({ url, name }) => {
      createPage({
        matchPath: `/go/${name.toLowerCase()}`,
        path: `/go/${name.toLowerCase()}`,
        component: path.resolve("./src/templates/external.tsx"),
        context: {
          link: url,
        },
      });
    });

  createPage({
    matchPath: `/go/cms`,
    path: "/go/cms",
    component: path.resolve("./src/templates/external.tsx"),
    context: {
      link: `https://app.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/home`,
    },
  });

  createPage({
    matchPath: `/go/qhassio`,
    path: "/go/qhassio",
    component: path.resolve("./src/templates/external.tsx"),
    context: {
      link: `https://qcondo.duckdns.org:33720`,
    },
  });
};

export const onCreateBabelConfig: onCreateBabelConfig = ({ actions }) => {
  if (process.env.WITH_COVERAGE === "true") {
    console.log("[debug] add istanbul babel plugins");

    actions.setBabelPlugin({
      name: "babel-plugin-istanbul",
      options: {},
    });
  }
};
