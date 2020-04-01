import React from "react";
import renderer from "react-test-renderer";

import { PureSEO } from "../seo";

describe("Header", () => {
  const data = {
    title: "",
    description: "",
    lang: "en",
    meta: [],
    site: {
      siteMetadata: {
        title: "",
        description: "",
        app: {
          name: "",
          version: "",
        },
        buildTime: "",
      },
    },
    twitter: {
      username: "",
    },
    github: {
      username: "",
      url: "",
    },
  };

  it("renders correctly", () => {
    const tree = renderer.create(<PureSEO data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
