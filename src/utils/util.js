import { API } from "@constants/url";
import { put, post } from "@utils/request";

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
  return await put(API.UPDATE_USER_PICTURE(email), data);
};

export const sendMessage = async (messageData) => {
  const data = JSON.stringify(messageData);
  return await post(API.SEND_MESSAGE, data);
};
