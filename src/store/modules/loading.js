const SET_LOADING_STATE = "loading/SET_LOADING_STATE";

export const setLoadingState = (isLoading) => ({ type: SET_LOADING_STATE, payload: isLoading });

const initialState = {
  isLoading: false,
};

const loading = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default loading;
