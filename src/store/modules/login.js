import { API } from "@constants/url";
import { get, put } from "@utils/request";

const USER_LOGIN = "login/USER_LOGIN";
const USER_LOGOUT = "login/USER_LOGOUT";
const GET_DATA_SUCCESS = "login/GET_DATA_SUCCESS";
const GET_DATA_ERROR = "login/GET_DATA_ERROR";

export const userLogin = ({ profileObj, tokenObj }) => ({ type: USER_LOGIN, payload: { profileObj, tokenObj } });
export const userLogout = () => ({ type: USER_LOGOUT });

export const getUserData = (email) => async (dispatch) => {
  return await get(API.GET_USER(email), dispatch, GET_DATA_SUCCESS, GET_DATA_ERROR);
};

export const updateUserPicture = (email, imageUrl) => async () => {
  const data = JSON.stringify({ picture: imageUrl });
  return await put(API.UPDATE_USER_PICTURE(email), data);
};

const initialState = {
  name: "",
  email: "",
  imageUrl: "",
  tokenData: null,
  userData: null,
  error: null,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        name: action.payload.profileObj.name,
        email: action.payload.profileObj.email,
        imageUrl: action.payload.profileObj.imageUrl,
        tokenData: action.payload.tokenObj,
      };
    case USER_LOGOUT:
      return {
        ...initialState,
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
