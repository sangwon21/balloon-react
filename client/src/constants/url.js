const DOMAIN_ROOT = process.env.REACT_APP_DOMAIN_ROOT;

export const API = {
  LOGIN: `${DOMAIN_ROOT}${process.env.REACT_APP_LOGIN}`,
  SESSION_CHECK: `${DOMAIN_ROOT}${process.env.REACT_APP_SESSION_CHECK}`,
  GET_USERS: `${DOMAIN_ROOT}${process.env.REACT_APP_USERS_API}`,
  GET_USER: `${DOMAIN_ROOT}${process.env.REACT_APP_USER_API}`,
  UPDATE_USER_PICTURE: `${DOMAIN_ROOT}${process.env.REACT_APP_UPDATE_USER_PICTURE_API}`,
  SEND_MESSAGE: `${DOMAIN_ROOT}${process.env.REACT_APP_SEND_MESSAGE_API}`,
};
