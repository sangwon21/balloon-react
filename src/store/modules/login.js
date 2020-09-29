import { API } from "@constants/url";
import { get, dataPush } from "@utils/request";

const USER_LOGIN = "login/USER_LOGIN";
const USER_LOGOUT = "login/USER_LOGOUT";
const GET_DATA_SUCCESS = "login/GET_DATA_SUCCESS";
const GET_DATA_ERROR = "login/GET_DATA_ERROR";

export const userLogin = ({ profileObj }) => async (dispatch) => {
  const { token } = await dataPush({ url: API.LOGIN, method: "POST", data: JSON.stringify({ email: profileObj.email }) });
  profileObj.token = token;
  dispatch({ type: USER_LOGIN, payload: { profileObj } });
  return { profileObj };
};
export const userLogout = () => ({ type: USER_LOGOUT });

export const getUserData = (email) => async (dispatch) => {
  return await get(API.GET_USER(email), dispatch, GET_DATA_SUCCESS, GET_DATA_ERROR);
};

const initialState = {
  name: "",
  email: "",
  picture: "",
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
        picture: action.payload.profileObj.imageUrl,
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
