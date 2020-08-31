const USER_LOGIN = "login/USER_LOGIN";
const USER_LOGOUT = "login/USER_LOGOUT";

export const userLogin = ({ profileObj, tokenObj }) => ({ type: USER_LOGIN, payload: { profileObj, tokenObj } });
export const userLogout = () => ({ type: USER_LOGOUT });

const initialState = {
  isLogin: false,
  name: null,
  email: null,
  imageUrl: null,
  tokenData: null,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLogin: true,
        name: action.payload.profileObj.name,
        email: action.payload.profileObj.email,
        imageUrl: action.payload.profileObj.imageUrl,
        tokenData: action.payload.tokenObj,
      };
    case USER_LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default login;
