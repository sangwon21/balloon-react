import { API } from "@constants/url";
import { get } from "@utils/request";

const GET_DATA_SUCCESS = "users/GET_DATA_SUCCESS";
const GET_DATA_ERROR = "users/GET_DATA_ERROR";
const SET_PARTS_DATA = "users/SET_PARTS_DATA";

export const getUsersData = () => async (dispatch) => {
  const data = await get(API.GET_USERS, dispatch, GET_DATA_SUCCESS, GET_DATA_ERROR);

  const partsMap = new Map();
  data.forEach((user) => {
    if (!partsMap.get(user.part)) {
      partsMap.set(user.part, {});
      partsMap.get(user.part)[user.team] = [user];
    } else if (!partsMap.get(user.part)[user.team]) {
      partsMap.get(user.part)[user.team] = [user];
    } else {
      partsMap.get(user.part)[user.team].push(user);
    }
  });
  dispatch({ type: SET_PARTS_DATA, payload: Array.from(partsMap) });
};

const initialState = {
  usersData: [],
  partsData: [],
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
    case GET_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_PARTS_DATA:
      return {
        ...state,
        partsData: action.payload,
      };
    default:
      return state;
  }
};

export default users;
