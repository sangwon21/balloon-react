import koData from "@data/languages/ko.json";
import { LANGUAGES } from "@constants/constant";

const SET_LANGUAGE = "language/SET_LANGUAGE";

export const setLanguage = (language, data) => ({ type: SET_LANGUAGE, payload: { language, data } });

const initialState = {
  language: LANGUAGES.KO,
  langData: koData,
};

const language = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload.language,
        langData: action.payload.data,
      };
    default:
      return state;
  }
};

export default language;
