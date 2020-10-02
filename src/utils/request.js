import { checkResponseData } from "@utils/util";
import { API } from "@constants/url";
import { STORAGE_KEYS } from "@constants/constant";

const getToken = () => {
  const sessionData = JSON.parse(sessionStorage.getItem(STORAGE_KEYS.GOOGLE_LOGIN_SESSION));
  return sessionData ? sessionData.token : null;
};

export const getData = async (url, dispatch, successActionType, errorActionType) => {
  const token = getToken();
  if (!token) return false;

  try {
    const response = await fetch(url, { headers: { "x-access-token": token } });
    if (!checkResponseData(response)) throw new Error(response.status);
    const json = await response.json();
    dispatch({ type: successActionType, payload: json.data });
    return json;
  } catch (error) {
    dispatch({ type: errorActionType, payload: error });
    return error;
  }
};

export const pushData = async ({ url, method, data }) => {
  const token = getToken();
  if (!token) return false;

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
  const fetchOption = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: profileObj.email }),
  };
  try {
    const response = await fetch(API.LOGIN, fetchOption);
    if (!checkResponseData(response)) throw new Error(response.status);
    const data = await response.json();
    profileObj.token = data.token;
    return profileObj;
  } catch (error) {
    return error;
  }
};

export const checkSession = async () => {
  const token = getToken();
  if (!token) return;

  const response = await fetch(API.SESSION_CHECK, { headers: { "x-access-token": token } });
  const { result } = await response.json();
  return result;
};

export const updateUserPicture = async (imageUrl) => {
  const data = JSON.stringify({ picture: imageUrl });
  return await pushData({ url: API.UPDATE_USER_PICTURE, method: "PUT", data: data });
};

export const sendMessage = async (messageData) => {
  const data = JSON.stringify(messageData);
  return await pushData({ url: API.SEND_MESSAGE, method: "POST", data: data });
};
