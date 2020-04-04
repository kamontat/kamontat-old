import React from "react";
import { mount } from "enzyme";

import { PureSEO } from "../seo";
import Helmet from "react-helmet";

describe("Seo component", () => {
  const data = {
    title: "First title",
    description: "Description",
    lang: "en",
    meta: [],
    site: {
      siteMetadata: {
        title: "Second title",
        description: "Description",
        app: {
          name: "hello",
          version: "v1.0.0",
        },
        buildTime: "1586018684444",
      },
    },
    twitter: {
      username: "name",
    },
    github: {
      username: "ghname",
      url: "https://gh.com",
    },
  };

  it("render correctly", () => {
    const component = mount(<PureSEO data={data} />);

    const helmet = Helmet.peek();

    expect(helmet).toMatchSnapshot();

    component.unmount();
  });
});
