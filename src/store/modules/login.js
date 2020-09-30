import { API } from "@constants/url";
import { getData } from "@utils/request";
import { STORAGE_KEYS } from "@constants/constant";

const USER_LOGOUT = "login/USER_LOGOUT";
const INIT_USER_PICTURE = "login/INIT_USER_PICTURE";
const GET_DATA_SUCCESS = "login/GET_DATA_SUCCESS";
const GET_DATA_ERROR = "login/GET_DATA_ERROR";

export const userLogout = () => (disaptch) => {
  sessionStorage.removeItem(STORAGE_KEYS.GOOGLE_LOGIN_SESSION);
  disaptch({ type: USER_LOGOUT });
};

export const getUserData = (profileObj) => async (dispatch) => {
  const data = await getData(API.GET_USER(profileObj.email), dispatch, GET_DATA_SUCCESS, GET_DATA_ERROR);
  return data;
};

export const initUserPicture = (imageUrl) => ({ type: INIT_USER_PICTURE, payload: imageUrl });

const initialState = {
  userData: null,
  error: null,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGOUT:
      return {
        ...initialState,
      };
    case INIT_USER_PICTURE:
      return {
        ...state,
        userData: {
          ...state.userData,
          picture: action.payload,
        },
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        error: null,
      };
    case GET_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default login;
