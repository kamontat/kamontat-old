import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import classNames from "classnames";

import Layout from "../components/layout";
import SEO from "../components/seo";

import styled from "styled-components";
import bulma from "../scss/bulma.module.scss";
import { DefaultProps } from "../typescript/properties";

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

const IndexPage = (props: DefaultProps): JSX.Element => {
  const { info } = useStaticQuery(
    graphql`
      query {
        info: contentfulInformation {
          locale: node_locale
          name
          definition
          images {
            contentful_id
            title
            description
            localFile {
              cloudinary: childCloudinaryAsset {
                fluid {
                  ...CloudinaryAssetFluid
                }
              }
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
        <Image title={firstImage?.title} alt={firstImage?.description} fluid={firstImage?.localFile.cloudinary.fluid} />
        <h1 className={classNames(bulma.isSize3, bulma.isUppercase, bulma.hasTextWeightBold)}>{info.name}</h1>
        <h3 className={classNames(bulma.isSize5, bulma.isUppercase)}>{info.definition}</h3>
      </Center>
    </Layout>
  );
};

export default IndexPage;
