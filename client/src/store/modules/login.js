import { API } from "@constants/url";
import { getData } from "@utils/request";
import { STORAGE_KEYS } from "@constants/constant";

const USER_LOGOUT = "login/USER_LOGOUT";
const GET_DATA_SUCCESS = "login/GET_DATA_SUCCESS";
const GET_DATA_ERROR = "login/GET_DATA_ERROR";
const INIT_USER_PICTURE = "login/INIT_USER_PICTURE";
const UPDATE_BALLOON_SZIE = "login/UPDATE_BALLOON_SZIE";
const UPDATE_MASSAGES_DATA = "login/UPDATE_MASSAGES_DATA";

export const userLogout = () => (disaptch) => {
  sessionStorage.removeItem(STORAGE_KEYS.GOOGLE_LOGIN_SESSION);
  disaptch({ type: USER_LOGOUT });
};

export const getUserData = () => async (dispatch) => {
  return await getData(API.GET_USER, dispatch, GET_DATA_SUCCESS, GET_DATA_ERROR);
};

export const initUserPicture = (imageUrl) => ({ type: INIT_USER_PICTURE, payload: imageUrl });

export const updateBalloonSize = (balloonSize) => ({ type: UPDATE_BALLOON_SZIE, payload: balloonSize });

export const updateMessagesData = (messageData) => ({ type: UPDATE_MASSAGES_DATA, payload: messageData });

const initialState = {
  userData: null,
  messagesData: null,
  error: null,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGOUT:
      return {
        ...initialState,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        userData: action.payload.data,
        messagesData: action.payload.messagesData,
        error: null,
      };
    case GET_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case INIT_USER_PICTURE:
      return {
        ...state,
        userData: {
          ...state.userData,
          picture: action.payload,
        },
      };
    case UPDATE_BALLOON_SZIE:
      return {
        ...state,
        userData: {
          ...state.userData,
          balloonSize: action.payload,
        },
      };
    case UPDATE_MASSAGES_DATA:
      return {
        ...state,
        messagesData: [...state.messagesData, action.payload],
      };
    default:
      return state;
  }
};

export default login;
