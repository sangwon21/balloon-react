const CHANGE_VALUE = "searchBar/CHANGE_VALUE";

export const changeValue = (value = "") => ({ type: CHANGE_VALUE, payload: value });

const initalState = {
  value: "",
};

const searchBar = (state = initalState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export default searchBar;
