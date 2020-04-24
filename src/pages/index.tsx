import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import tw from "twin.macro";
import styled from "@emotion/styled";

const Container = styled.div`
  ${tw`flex py-5`}
`;

const Information = styled.div`
  ${tw`flex flex-col justify-center pl-3`}
`;

const Image = styled(Img)`
  ${tw`rounded-full h-auto w-5/12 sm:w-3/12 lg:w-2/12`}
`;

const MyName = styled.h1`
  ${tw`font-sans text-lg md:text-xl font-bold`}
`;

const MyJob = styled.h2`
  ${tw`font-sans text-base md:text-lg`}
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
                  ...GatsbyImageSharpFluid_withWebp_noBase64
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
      <Container>
        <Image title={firstImage?.title} alt={firstImage?.description} fluid={firstImage?.localFile?.sharp?.fluid} />
        <Information>
          <MyName id="page-title">{info.name}</MyName>
          <MyJob>{info.definition}</MyJob>
        </Information>
      </Container>
    </Layout>
  );
};

export default IndexPage;
