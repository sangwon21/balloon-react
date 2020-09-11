const DOMAIN_ROOT = process.env.REACT_APP_DOMAIN_ROOT;

export const API = {
  GET_USERS: `${DOMAIN_ROOT}${process.env.REACT_APP_USERS_API}`,
  GET_USER: (email) => `${DOMAIN_ROOT}${process.env.REACT_APP_USER_API}`.replace(":email", email),
  UPDATE_USER_PICTURE: (email) => `${DOMAIN_ROOT}${process.env.REACT_APP_UPDATE_USER_PICTURE_API}`.replace(":email", email),
};
