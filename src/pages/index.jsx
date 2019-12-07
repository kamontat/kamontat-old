import React from "react";
import { useStaticQuery, graphql } from "gatsby";
// import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import styled from "styled-components";

const Center = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const IndexPage = (): JSX.Element => {
  const { info } = useStaticQuery(
    graphql`
      query {
        info: contentfulInformation {
          name
          definition
        }
      }
    `,
  );

  const test = (): void => {
    console.log(window.Sentry);

    window.Sentry.showReportDialog();
  };

  return (
    <Layout>
      <SEO />
      <Center>
        <h1>{info.name}</h1>
        <h3>{info.definition}</h3>
        <button onClick={test}>Break the world</button>
      </Center>
    </Layout>
  );
};

export default IndexPage;
