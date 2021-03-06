import { TOAST_TYPE } from "@constants/constant";

const SHOW_TOAST_MESSAGE = "toast/SHOW_TOAST_MESSAGE";
const UPDATE_TOAST_MESSAGE = "toast/UPDATE_TOAST_MESSAGE";
const RESET_TOAST = "toast/RESET_TOAST";

export const showToastMessage = () => ({ type: SHOW_TOAST_MESSAGE });
export const updateToastMessage = ({ type, message }) => ({ type: UPDATE_TOAST_MESSAGE, payload: { type, message } });
export const resetToast = () => ({ type: RESET_TOAST });

const initialState = {
  number: 0,
  isShow: false,
  message: "",
  type: TOAST_TYPE.NOMAL,
};

const toast = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TOAST_MESSAGE:
      return {
        ...state,
        isShow: true,
      };
    case UPDATE_TOAST_MESSAGE:
      return {
        ...state,
        number: state.number + 1,
        type: action.payload.type || TOAST_TYPE.NOMAL,
        message: action.payload.message,
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
