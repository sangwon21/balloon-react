import koData from "@data/languages/ko.json";
import { LANGUAGES } from "@constants/constant";
import languageReducer, { setLanguage } from "./language";

describe("langaugeReducer", () => {
  let defaultState = {
    language: LANGUAGES.KO,
    langData: koData,
  };

  beforeEach(() => {
    defaultState = {
      langData: koData,
      language: LANGUAGES.KO,
    };
  });

  it("should return default state", () => {
    const newState = languageReducer(defaultState, {});
    expect(newState).toEqual(defaultState);
  });

  it("should return state with changed language and langData", () => {
    const expectedState = { language: LANGUAGES.JA, langData: "data" };
    const newState = languageReducer(defaultState, setLanguage(LANGUAGES.JA, "data"));
    expect(newState).toEqual(expectedState);
  });
});
