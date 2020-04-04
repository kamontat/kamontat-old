import React from "react";
import { mount } from "enzyme";

import Redirect from "../redirect";

describe("Redirect component", () => {
  it("render correctly", () => {
    const component = mount(<Redirect url="https://google.com" />);

    expect(component).toMatchSnapshot();
  });
});
