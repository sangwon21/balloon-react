import { API } from "@constants/url";
import { get } from "@utils/request";

const GET_DATA_SUCCESS = "users/GET_DATA_SUCCESS";
const GET_DATA_ERROR = "users/GET_DATA_ERROR";

export const getUsersData = () => (dispatch) => {
  get(API.GET_USERS, dispatch, GET_DATA_SUCCESS, GET_DATA_ERROR);
};

const initialState = {
  usersData: [],
  error: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return {
        ...state,
        usersData: action.payload,
        error: null,
      };
    case GET_DATA_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default users;
