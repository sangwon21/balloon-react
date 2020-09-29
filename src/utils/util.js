import { API } from "@constants/url";
import { STORAGE_KEYS } from "@constants/constant";
import { dataPush } from "@utils/request";

export const checkResponseData = (response) => response.ok && response.status >= 200 && response.status <= 207;

export const checkFilterCondition = (userData, value) => {
  if (userData.name.toLowerCase().includes(value.toLowerCase())) return true;
  if (userData.englishName && userData.englishName.toLowerCase().includes(value.toLowerCase())) return true;
  return false;
};

export const makePartsMap = (data) => {
  const partsMap = new Map();
  data.forEach((user) => {
    if (!partsMap.get(user.part)) {
      partsMap.set(user.part, {});
      partsMap.get(user.part)[user.team] = [user];
    } else if (!partsMap.get(user.part)[user.team]) {
      partsMap.get(user.part)[user.team] = [user];
    } else {
      partsMap.get(user.part)[user.team].push(user);
    }
  });
  return partsMap;
};

export const updateUserPicture = async (email, imageUrl) => {
  const data = JSON.stringify({ picture: imageUrl });
  return await dataPush({ url: API.UPDATE_USER_PICTURE(email), method: "PUT", data: data });
};

export const sendMessage = async (messageData) => {
  const { token } = JSON.parse(sessionStorage.getItem(STORAGE_KEYS.GOOGLE_LOGIN_SESSION)).profileObj;
  const data = JSON.stringify(messageData);
  return await dataPush({ url: API.SEND_MESSAGE, method: "POST", data: data, token: token });
};
