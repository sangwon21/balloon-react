import React from "react";
import * as redux from "react-redux";
import * as router from "react-router-dom";
import { shallow } from "enzyme";
import { findByTestAttr, makeTestStore } from "../../../../test/testUtils";
import Header from "./Header";
import { changeSelectedTab } from "@modules/users";

const mockDispatchFn = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn().mockReturnValue({ langData: {
    "L0000": "KO"
  }, page: { currentPage: 1 } }),
  useDispatch: () => mockDispatchFn,
}));

const mockPushFn = jest.fn();
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: mockPushFn,
  }),
}));

const store = makeTestStore();
const setUp = (initialState = {}) => {
  const wrapper = shallow(<Header store={store} />);

  return wrapper;
};

describe("Header Component", () => {
  let wrapper;

  beforeEach(() => {
    const initialState = {};
    wrapper = setUp();
  });

  it("should render without errors", () => {
    const component = findByTestAttr(wrapper, "header");
    expect(component.length).toBe(1);
  });
});

describe("Title is clicked", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("should dispatch changeSelectedTab", () => {
    const useDispatchSpy = jest.spyOn(redux, "useDispatch");
    useDispatchSpy.mockReturnValue(mockDispatchFn);
    const component = findByTestAttr(wrapper, "title");

    component.simulate("click");

    expect(mockDispatchFn).toHaveBeenCalled();
    expect(mockDispatchFn).toHaveBeenCalledWith(changeSelectedTab());
  });

  it("should push /users to the history", () => {
    const useHistorySpy = jest.spyOn(router, "useHistory");
    useHistorySpy.mockReturnValue(mockPushFn);
    const component = findByTestAttr(wrapper, "title");

    component.simulate("click");

    expect(mockPushFn).toHaveBeenCalled();
    expect(mockPushFn).toHaveBeenCalledWith("/users");
  });
});
