const DOMAIN_ROOT = process.env.REACT_APP_DOMAIN_ROOT;

export const API = {
  LOGIN: `${DOMAIN_ROOT}${process.env.REACT_APP_LOGIN}`,
  GET_USERS: `${DOMAIN_ROOT}${process.env.REACT_APP_USERS_API}`,
  GET_USER: (email) => `${DOMAIN_ROOT}${process.env.REACT_APP_USER_API}`.replace(":email", email),
  UPDATE_USER_PICTURE: (email) => `${DOMAIN_ROOT}${process.env.REACT_APP_UPDATE_USER_PICTURE_API}`.replace(":email", email),
  SEND_MESSAGE: `${DOMAIN_ROOT}${process.env.REACT_APP_SEND_MESSAGE_API}`,
};
