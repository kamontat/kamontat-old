import React from "react";
import { mount } from "enzyme";

import Layout from "../layout";

describe("Layout component", () => {
  it("should set container children element to data", () => {
    const wrapper = mount(<Layout>data</Layout>);
    expect(wrapper).toMatchSnapshot();
  });
});
