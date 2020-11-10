import loadingReducer, { setLoadingState } from "./loading";

describe("loadingReducer", () => {
  let defaultState = {
    isLoading: false,
  };

  beforeEach(() => {
    defaultState = {
      isLoading: false,
    };
  });

  it("should return default state", () => {
    const newState = loadingReducer(defaultState, {});
    expect(newState).toEqual(defaultState);
  });

  it("should return isLoading as true", () => {
    const expectedState = { isLoading: true };
    const newState = loadingReducer(defaultState, setLoadingState(true));
    expect(newState).toEqual(expectedState);
  });
});
