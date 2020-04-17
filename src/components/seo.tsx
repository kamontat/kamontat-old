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

import { DefaultProps } from "../typescript/ui/models/properties";
import SeoMetaData from "../typescript/ui/models/metadata";

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

export const PureSEO = (result: { data: PureSeoProps }) => {
  const siteMeta = result?.data?.site?.siteMetadata;
  const metaList = new SeoMetaData();

  metaList.addNameContent("app:name", [siteMeta?.app?.name]);

  metaList.addNameContent("app:description", [result?.data?.description, siteMeta?.description]);

  metaList.addNameContent("app:version", [siteMeta?.app?.version]);

  metaList.addNameContent("app:buildtime", [siteMeta?.buildTime]);

  metaList.addNameContent("app:buildtime:formatted", [new Date(siteMeta?.buildTime).toUTCString()]);

  metaList.addNameContent("description", [result?.data?.description, siteMeta?.description]);

  metaList.addNameContent("twitter:card", ["summary"]);

  metaList.addNameContent("twitter:creator", [`@${result?.data?.twitter?.username}`]);

  metaList.addNameContent("twitter:title", [result?.data?.title]);

  metaList.addNameContent("twitter:description", [result?.data?.description, siteMeta?.description]);

  metaList.addPropertyContent("gh:account", [result?.data?.github?.username], { link: result?.data?.github?.url });

  metaList.addPropertyContent("og:title", [result?.data?.title]);

  metaList.addPropertyContent("og:description", [result?.data?.description, siteMeta?.description]);

  metaList.addPropertyContent("og:type", ["website"]);

  return (
    <Helmet
      htmlAttributes={{
        lang: result.data.lang,
      }}
      title={result.data.title}
      defaultTitle={result.data.site.siteMetadata.title}
      titleTemplate={`%s | ${result.data.site.siteMetadata.title}`}
      meta={metaList.show().concat(result.data.meta)}
    />
  );
};

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
