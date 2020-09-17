import { TOAST_TYPE } from "@constants/constant";

const SHOW_TOAST_MESSAGE = "toast/SHOW_TOAST_MESSAGE";
const UPDATE_TOAST_MESSAGE = "toast/UPDATE_TOAST_MESSAGE";
const UPDATE_TOAST_TYPE = "toast/UPDATE_TOAST_TYPE";
const RESET_TOAST = "toast/RESET_TOAST";

export const showToastMessage = (isShow) => ({ type: SHOW_TOAST_MESSAGE, payload: isShow });
export const updateToastMessage = (message) => ({ type: UPDATE_TOAST_MESSAGE, payload: message });
export const updateToastType = (type) => ({ type: UPDATE_TOAST_TYPE, payload: type });
export const resetToast = () => ({ type: RESET_TOAST });

const initialState = {
  isShow: false,
  message: "",
  type: TOAST_TYPE.NOMAL,
};

const toast = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TOAST_MESSAGE:
      return {
        ...state,
        isShow: action.payload,
      };
    case UPDATE_TOAST_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case UPDATE_TOAST_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    case RESET_TOAST:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default toast;
