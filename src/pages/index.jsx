import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image";

import styled from "styled-components";

import layout from "../scss/bulma.module.scss";

const Button = styled.button`
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)";
  border: 0;
  borderradius: 3;
  boxshadow: "0 3px 5px 2px rgba(255, 105, 135, .3)";
  color: "white";
  height: 48;
  padding: "0 30px";
`;

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <div className={layout.columns}>
        <div className={layout.column}>
          <Button>hello, world</Button>
        </div>
        <div className={layout.column}>
          <Button>hello, world</Button>
        </div>
        <div className={layout.column}>
          <Image />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
