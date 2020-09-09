import { API } from "@constants/url";
import { get } from "@utils/request";
import { checkFilterCondition, makePartsMap } from "@utils/util";

const CHANGE_SELECTED_TAB = "users/CHANGE_SELECTED_TAB";
const GET_DATA_SUCCESS = "users/GET_DATA_SUCCESS";
const GET_DATA_ERROR = "users/GET_DATA_ERROR";
const SET_PARTS_DATA = "users/SET_PARTS_DATA";
const SET_FILTER_PARTS_DATA = "users/SET_FILTER_PARTS_DATA";

export const changeSelectedTab = (tabIndex = 0) => ({ type: CHANGE_SELECTED_TAB, payload: tabIndex });

export const getUsersData = () => async (dispatch) => {
  const data = await get(API.GET_USERS, dispatch, GET_DATA_SUCCESS, GET_DATA_ERROR);
  const partsMap = makePartsMap(data);

  dispatch({ type: SET_PARTS_DATA, payload: Array.from(partsMap) });
};

export const filterUsersData = (usersData, value) => (dispatch) => {
  const data = usersData.filter((userData) => checkFilterCondition(userData, value));
  const partsMap = makePartsMap(data);

  dispatch({ type: SET_FILTER_PARTS_DATA, payload: Array.from(partsMap) });
};

const initialState = {
  selectedTab: 0,
  usersData: [],
  partsData: [],
  filterPartsData: [],
  error: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.payload,
      };
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
    case SET_FILTER_PARTS_DATA:
      return {
        ...state,
        filterPartsData: action.payload,
      };
    default:
      return state;
  }
};

export default users;
