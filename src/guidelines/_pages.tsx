import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

// [optional] for custom styled
// import tw from "twin.macro";
// import styled from "../styles/styled";

const Page = (): JSX.Element => {
  const data = useStaticQuery(
    graphql`
      query InformationQuery {
        site {
          id
        }
      }
    `,
  );

  // data.site.id

  return (
    <Layout>
      <SEO title="Guidelines" />
      <h1>Guidelines of {data.site.id}</h1>
      <p>welcome to guidelines page</p>
    </Layout>
  );
};

export default Page;
