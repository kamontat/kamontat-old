import React from "react";
import { createCipheriv } from "crypto";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import classNames from "classnames";

import bulma from "../scss/bulma.module.scss";

// Step to decrypt data
// 1. const crypto = require("crypto")
// 2. const decipher = crypto.createDecipheriv('aes-256-cbc', ACCESS_TOKEN, ACCESS_SALT);
// 3. let decrypted = decipher.update(Buffer.from(DATA, 'hex'));
// 4. decrypted = Buffer.concat([decrypted, decipher.final()]);
// 5. decrypted.toString();

const InformationPage = (): JSX.Element => {
  const { site } = useStaticQuery(
    graphql`
      query InformationQuery {
        site {
          siteMetadata {
            description
            buildTime
            app {
              name
              version
              license
              repository {
                url
              }
              author {
                name
              }
            }
            environment {
              BRANCH
              BUILD_ID
              NODE_ENV
              ACCESS_TOKEN
              ACCESS_SALT
            }
          }
        }
      }
    `,
  );

  const token = site.siteMetadata.environment.ACCESS_TOKEN;
  const salt = site.siteMetadata.environment.ACCESS_SALT;

  const cipher = createCipheriv("aes-256-cbc", token, salt);
  const experiment = cipher.update(site.siteMetadata.environment.BRANCH, "utf8", "hex") + cipher.final("hex");

  const keyvalues = [
    { key: "Application Environment", value: site.siteMetadata.environment.NODE_ENV },
    { key: "Application name", value: site.siteMetadata.app.name },
    { key: "Application description", value: site.siteMetadata.description },
    { key: "Application build date", value: new Date(site.siteMetadata.buildTime).toString() },
    {
      key: "Application version",
      value: `${site.siteMetadata.app.version} (${site.siteMetadata.environment.BUILD_ID})`,
    },
    { key: "Application experiment", value: experiment },
    { key: "Application author", value: site.siteMetadata.app.author.name },
    { key: "Application license", value: site.siteMetadata.app.license },
    { key: "Application repository", value: site.siteMetadata.app.repository.url },
  ];

  return (
    <Layout>
      <SEO title="Information" lang="en" />
      <section className={bulma.section}>
        <div className={bulma.container}>
          <h1 className={bulma.title}>Information</h1>
          {keyvalues.map(({ key, value }) => (
            <div key={key} className={bulma.columns}>
              <div className={classNames(bulma.column, bulma.is1)}></div>
              <div className={classNames(bulma.column, bulma.is2)}>
                <span className={bulma.hasTextWeightBold}>{key}</span>
              </div>
              <div className={classNames(bulma.column)}>{value}</div>
              <div className={classNames(bulma.column, bulma.is3)}></div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default InformationPage;