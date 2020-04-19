import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { encrypter } from "../typescript/src/utils/transformer";

// [optional] for custom styled
// import tw from "twin.macro";
// import styled from "../styles/styled";

const Page = (): JSX.Element => {
  const { site } = useStaticQuery(
    graphql`
      query PageQuery {
        site {
          siteMetadata {
            buildTime
            app {
              name
              description
              version
              license
            }
            environment {
              SITE_EXPERIMENT_AB
              SITE_UNIQUE_ID
              NODE_ENV
              ACCESS_TOKEN
              ACCESS_SALT
            }
          }
        }
      }
    `,
  );

  const data = site.siteMetadata;

  const environment = data.environment.NODE_ENV;

  const name = data.app.name;
  const description = data.app.description;
  const version = data.app.version;
  const license = data.app.license;
  const buildtime = new Date(data.buildTime).toString();

  const uniqueID = data.environment.SITE_UNIQUE_ID;

  const token = data.environment.ACCESS_TOKEN;
  const salt = data.environment.ACCESS_SALT;

  const experiment = encrypter(site.siteMetadata.environment.SITE_EXPERIMENT_AB, token, salt);

  return (
    <Layout>
      <SEO title="Information" />
      <h1 id="page-title">Information</h1>

      <ul>
        <li>Appname: {name}</li>
        <li>Description: {description}</li>
        <li>License: {license}</li>

        <li>Environment: {environment}</li>

        <li>Build time: {buildtime}</li>
        <li>Version: {version}</li>
        <li>Unique id: {uniqueID}</li>
        <li>Experiment: {experiment}</li>
      </ul>
    </Layout>
  );
};

export default Page;
