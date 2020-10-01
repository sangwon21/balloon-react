import { checkResponseData } from "@utils/util";
import { API } from "@constants/url";
import { STORAGE_KEYS } from "@constants/constant";

const getToken = () => {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEYS.GOOGLE_LOGIN_SESSION)).token;
};

export const getData = async (url, dispatch, successActionType, errorActionType) => {
  const token = getToken();
  try {
    const response = await fetch(url, { headers: { "x-access-token": token } });
    if (!checkResponseData(response)) throw new Error(response.status);
    const data = await response.json();
    dispatch({ type: successActionType, payload: data });
    return data;
  } catch (error) {
    dispatch({ type: errorActionType, payload: error });
    return error;
  }
};

export const pushData = async ({ url, method, data, token }) => {
  const fetchOption = {
    method: method,
    headers: {
      "x-access-token": token,
      "Content-Type": "application/json",
    },
    body: data,
  };
  try {
    const response = await fetch(url, fetchOption);
    if (!checkResponseData(response)) throw new Error(response.status);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const login = async (profileObj) => {
  const data = await pushData({ url: API.LOGIN, method: "POST", data: JSON.stringify({ email: profileObj.email }) });
  profileObj.token = data.token;
  return profileObj;
};

export const checkSession = async () => {
  const token = getToken();
  const response = await fetch(API.SESSION_CHECK, { headers: { "x-access-token": token } });
  const json = await response.json();
  return json.success;
};

export const updateUserPicture = async (email, imageUrl) => {
  const token = getToken();
  const data = JSON.stringify({ picture: imageUrl });
  return await pushData({ url: API.UPDATE_USER_PICTURE(email), method: "PUT", data: data, token: token });
};

export const sendMessage = async (messageData) => {
  const token = getToken();
  if (!token) return false;
  const data = JSON.stringify(messageData);
  return await pushData({ url: API.SEND_MESSAGE, method: "POST", data: data, token: token });
};
