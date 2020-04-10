import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import classNames from "classnames";

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

const Image = styled(Img)`
  height: 600px;
  width: 400px;
`;

const IndexPage = (): JSX.Element => {
  const { info } = useStaticQuery(
    graphql`
      query PersonalQuery {
        info: contentfulInformation {
          locale: node_locale
          name
          definition
          images {
            contentful_id
            title
            description
            localFile {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `,
  );

  console.log(info);
  const firstImage = info.images[0];

  return (
    <Layout>
      <SEO lang={info.locale} />
      <Center role="main" aria-labelledby="center-panel">
        <Image title={firstImage?.title} alt={firstImage?.description} fluid={firstImage?.localFile?.sharp?.fluid} />
        <h1 className={classNames("bulma.isSize3", "bulma.isUppercase", "bulma.hasTextWeightBold")}>{info.name}</h1>
        <h2 className={classNames("bulma.isSize5", "bulma.isUppercase")}>{info.definition}</h2>
      </Center>
    </Layout>
  );
};

export default IndexPage;
