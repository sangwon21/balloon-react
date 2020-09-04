const DOMAIN_ROOT = process.env.REACT_APP_DOMAIN_ROOT;

export const API = {
  GET_USER: (email) => `${DOMAIN_ROOT}${process.env.REACT_APP_USER_API}`.replace(":email", email),
  GET_USERS: `${DOMAIN_ROOT}${process.env.REACT_APP_USERS_API}`,
};
