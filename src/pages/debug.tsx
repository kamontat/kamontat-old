import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { encrypter } from "../typescript/src/utils/transformer";

import tw from "twin.macro";
import styled from "../styles/styled";

const Section = styled.section`
  ${tw`flex flex-col self-center p-6`}
`;

const Cards = styled.div`
  ${tw`flex flex-wrap flex-row flex-auto`}
`;

const Card = styled.div`
  ${tw`rounded overflow-hidden shadow-lg m-2`}
`;

const CardTitle = styled.div`
  ${tw`px-4 py-2`}
`;
const Title = styled.h1`
  ${tw`text-base font-bold`}
`;

const CardBody = styled.div`
  ${tw`px-4 py-2`}
`;
const Body = styled.p``;

const DebugPage = (): JSX.Element => {
  const { site } = useStaticQuery(
    graphql`
      query DebuggingQuery {
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
              dependencies {
                _emotion_core
                _emotion_styled
                emotion_theming
                gatsby
                gatsby_image
                gatsby_plugin_emotion
                gatsby_plugin_gdpr_cookies
                gatsby_plugin_google_tagmanager
                gatsby_plugin_netlify
                gatsby_plugin_manifest
                gatsby_plugin_offline
                gatsby_plugin_sentry
                gatsby_plugin_react_helmet
                gatsby_plugin_sharp
                gatsby_plugin_sitemap
                gatsby_source_contentful
                gatsby_source_filesystem
                gatsby_transformer_sharp
                prop_types
                react
                react_cookie
                react_cookie_consent
                react_dom
                react_helmet
              }
              devDependencies {
                _babel_core
                _babel_preset_typescript
                _storybook_addon_actions
                _storybook_addons
                _storybook_addon_links
                _storybook_react
                _testing_library_cypress
                _types_classnames
                _types_enzyme
                _types_jest
                _types_node
                _types_react
                _types_react_dom
                _types_react_helmet
                _types_react_test_renderer
                _typescript_eslint_eslint_plugin
                _typescript_eslint_parser
                axe_core
                babel_jest
                babel_loader
                babel_plugin_remove_graphql_queries
                babel_preset_gatsby
                babel_preset_react_app
                classnames
                cypress
                cypress_axe
                enzyme
                enzyme_adapter_react_16
                enzyme_to_json
                eslint
                eslint_config_prettier
                eslint_config_react_app
                eslint_plugin_prettier
                eslint_plugin_react
                gatsby_plugin_ts_config
                gatsby_plugin_typescript
                identity_obj_proxy
                jaeger_client
                jest
                jest_chain
                jest_emotion
                jest_extended
                jest_junit
                prettier
                react_test_renderer
                start_server_and_test
                tailwindcss
                twin_macro
                typescript
              }
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

  const token = site.siteMetadata.environment.ACCESS_TOKEN;
  const salt = site.siteMetadata.environment.ACCESS_SALT;

  const experiment = encrypter(site.siteMetadata.environment.SITE_EXPERIMENT_AB, token, salt);

  const keyvalues = [
    { key: "Environment", value: site.siteMetadata.environment.NODE_ENV },
    { key: "Name", value: site.siteMetadata.app.name },
    { key: "Build date", value: new Date(site.siteMetadata.buildTime).toString() },
    {
      key: "Version",
      value: site.siteMetadata.app.version,
    },
    {
      key: "Unique ID",
      value: site.siteMetadata.environment.SITE_UNIQUE_ID,
    },
    { key: "Experiment", value: experiment },
    { key: "Author", value: site.siteMetadata.app.author.name },
    { key: "License", value: site.siteMetadata.app.license },
    { key: "Repository", value: site.siteMetadata.app.repository.url },
  ];

  const dependencies = site?.siteMetadata?.app?.dependencies || {};
  Object.keys(dependencies).forEach((name) => {
    const ver = dependencies[name];
    keyvalues.push({ key: `${name} (dependency)`, value: `v${ver}` });
  });

  const devDependencies = site?.siteMetadata?.app?.devDependencies || {};
  Object.keys(devDependencies).forEach((name) => {
    const ver = devDependencies[name];
    keyvalues.push({ key: `${name} (develop dependency)`, value: `v${ver}` });
  });

  const [data, setData] = useState(keyvalues);
  const [searchData, setSearch] = useState("");

  useEffect(() => {
    if (searchData !== "") setData(keyvalues.filter((v) => v.key.toLowerCase().includes(searchData.toLowerCase())));
    else setData(keyvalues);
  }, [searchData]);

  return (
    <Layout search={true} onSearch={setSearch}>
      <SEO title="Information" lang="en" />
      <Section>
        <Cards>
          {data.map(({ key, value }) => (
            <Card key={key}>
              <CardTitle>
                <Title>{key}</Title>
              </CardTitle>
              <CardBody>
                <Body>{value}</Body>
              </CardBody>
            </Card>
          ))}
        </Cards>
      </Section>
    </Layout>
  );
};

export default DebugPage;
