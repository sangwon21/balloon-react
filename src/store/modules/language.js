const SET_LANGUAGE = "language/SET_LANGUAGE";

export const setLanguage = (language) => ({ type: SET_LANGUAGE, payload: language });

const initialState = {
  language: "ko",
};

const language = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default language;
