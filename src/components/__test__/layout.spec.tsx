import React from "react";
import { shallow } from "enzyme";

import Layout from "../layout";

describe("Layout component", () => {
  it("should set container children element to data", () => {
    const wrapper = shallow(<Layout>data</Layout>);
    expect(wrapper).toMatchSnapshot();
  });
});
