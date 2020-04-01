/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
import path from "path";
import { CreatePagesArgs } from "gatsby";

interface DataProps {
  social: {
    accounts: Array<{
      name: string;
      url: string;
    }>;
  };
}

exports.createPages = async ({ graphql, actions }: CreatePagesArgs) => {
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
        path: "/go/s",
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
    matchPath: `/go/gallary`,
    path: `/go/gallary`,
    component: path.resolve("./src/templates/external.tsx"),
    context: {
      link: "https://cloudinary.com/console/media_library/folders",
    },
  });
};
