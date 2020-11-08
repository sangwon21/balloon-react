import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../test/testUtils";
import Footer from "./Footer";

const setup = (props = {}) => {
  const wrapper = shallow(<Footer {...props} />);

  return wrapper;
};

describe("Footer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({});
  });
  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "footer");
    expect(component.length).toBe(1);
  });
});
