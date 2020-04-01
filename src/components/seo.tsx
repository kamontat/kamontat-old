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

interface PureSeoProps extends SeoProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      app: {
        name: string;
        version: string;
      };
      buildTime: string;
    };
  };
  twitter: {
    username: string;
  };
  github: {
    username: string;
    url: string;
  };
}

export const PureSEO = (result: { data: PureSeoProps }) => (
  <Helmet
    htmlAttributes={{
      lang: result.data.lang,
    }}
    title={result.data.title}
    defaultTitle={result.data.site.siteMetadata.title}
    titleTemplate={`%s | ${result.data.site.siteMetadata.title}`}
    meta={[
      {
        name: `app:name`,
        content: result.data.site.siteMetadata.app.name,
      } as MetaType,
      {
        name: `app:description`,
        content: result.data.description || result.data.site.siteMetadata.description,
      } as MetaType,
      {
        name: `app:version`,
        content: result.data.site.siteMetadata.app.version,
      } as MetaType,
      {
        name: `app:datetime`,
        content: result.data.site.siteMetadata.buildTime,
      } as MetaType,
      {
        name: `app:datetime-formatted`,
        content: new Date(result.data.site.siteMetadata.buildTime).toUTCString(),
      } as MetaType,
      {
        name: `description`,
        content: result.data.description || result.data.site.siteMetadata.description,
      } as MetaType,
      {
        property: `gh:account`,
        content: result.data.github.username,
        link: result.data.github.url,
      } as MetaType,
      {
        property: `og:title`,
        content: result.data.title,
      } as MetaType,
      {
        property: `og:description`,
        content: result.data.description || result.data.site.siteMetadata.description,
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
        content: `@${result.data.twitter.username}`,
      } as MetaType,
      {
        name: `twitter:title`,
        content: result.data.title,
      } as MetaType,
      {
        name: `twitter:description`,
        content: result.data.description || result.data.site.siteMetadata.description,
      } as MetaType,
    ].concat(result.data.meta)}
  />
);

function SEO(props: SeoProps) {
  const { site, twitter, github } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            app {
              name
              version
            }
            buildTime
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

  const data = { site, twitter, github, ...props };
  return <PureSEO data={data} />;
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
