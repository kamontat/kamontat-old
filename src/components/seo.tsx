/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import { DefaultProps } from "../typescript/properties";

type MetaType = JSX.IntrinsicElements["meta"];

interface SeoProps extends DefaultProps {
  title: string;
  description: string;
  lang: string;
  meta: MetaType[];
}

function SEO(props: SeoProps) {
  const { site, twitter, github } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            app {
              version
            }
          }
        }
        twitter: contentfulSocial(name: { eq: "Twitter" }) {
          username
        }
        github: contentfulSocial(name: { eq: "Github" }) {
          username
          url
        }
      }
    `,
  );

  const metaDescription = props.description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang: props.lang,
      }}
      title={props.title}
      defaultTitle={site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `version`,
          content: site.siteMetadata.app.version,
        } as MetaType,
        {
          name: `description`,
          content: metaDescription,
        } as MetaType,
        {
          property: `gh:account`,
          content: github.username,
          link: github.url,
        } as MetaType,
        {
          property: `og:title`,
          content: props.title,
        } as MetaType,
        {
          property: `og:description`,
          content: metaDescription,
        } as MetaType,
        {
          property: `og:type`,
          content: `website`,
        } as MetaType,
        {
          name: `twitter:card`,
          content: `summary`,
        } as MetaType,
        {
          name: `twitter:creator`,
          content: `@${twitter.username}`,
        } as MetaType,
        {
          name: `twitter:title`,
          content: props.title,
        } as MetaType,
        {
          name: `twitter:description`,
          content: metaDescription,
        } as MetaType,
      ].concat(props.meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: ``,
} as SeoProps;

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default SEO;
