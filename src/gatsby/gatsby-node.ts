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

const goPath = (linkpath: string, url: string) => {
  return {
    matchPath: `/go/${linkpath.toLowerCase()}`,
    path: `/go/${linkpath.toLowerCase()}`,
    component: path.resolve("./src/templates/external.tsx"),
    context: {
      link: url,
    },
  };
};

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
      createPage(goPath(name, url));
    });

  createPage(goPath("cms", `https://app.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/home`));

  createPage(goPath("v1/resume", `https://drive.google.com/open?id=1-k5yF2xCvhmr4fgF01RNxgAQG1lDq2-G`));
  createPage(goPath("v2/resume", `https://drive.google.com/open?id=1I_3irkDKGGcIwHCtySu350C8f6ghFETl`));
  createPage(goPath("resume", `https://drive.google.com/open?id=1I_3irkDKGGcIwHCtySu350C8f6ghFETl`));

  createPage(goPath("v2/cv", `https://drive.google.com/open?id=1UY9U7ujY38lq1VOOLinuxCsVCa362Lfi`));
  createPage(goPath("v3/cv", `https://drive.google.com/open?id=1LmBxSkbe1re5i8bM6nRZ9iVq0nP3bwjB`));
  createPage(goPath("cv", `https://drive.google.com/open?id=1LmBxSkbe1re5i8bM6nRZ9iVq0nP3bwjB`));
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
