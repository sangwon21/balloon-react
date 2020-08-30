const SET_CURRENT_PAGE = "page/SET_CURRENT_PAGE";

export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page });

const initialState = {
  currentPage: window.location.pathname,
};

const page = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default page;
