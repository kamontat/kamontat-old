import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import tw from "twin.macro";
import styled from "@emotion/styled";

const Center = styled.div`
  ${tw`flex flex-col text-center items-center justify-center py-5`}
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

  const firstImage = info.images[0];

  return (
    <Layout>
      <SEO lang={info.locale} />
      <Center>
        <Image title={firstImage?.title} alt={firstImage?.description} fluid={firstImage?.localFile?.sharp?.fluid} />
        <h1 id="page-title">{info.name}</h1>
        <h2>{info.definition}</h2>
      </Center>
    </Layout>
  );
};

export default IndexPage;
