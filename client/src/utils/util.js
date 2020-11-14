import theme from "@styles/theme";
import { BACKGROUND_COLORS } from "@constants/constant";

export const checkResponseData = (response) => response.ok && response.status >= 200 && response.status <= 207;

export const checkFilterCondition = (userData, value) => {
  if (userData.name.toLowerCase().includes(value.toLowerCase())) return true;
  if (userData.englishName && userData.englishName.toLowerCase().includes(value.toLowerCase())) return true;
  if (userData.phone && userData.phone.includes(value)) return true;
  if (userData.tel && userData.tel.includes(value)) return true;
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

  return Array.from(partsMap).sort((a, b) => {
    return a[0] > b[0] ? -1 : a[0] < b[0] ? 1 : 0;
  });
};

export const changeBackgroundColor = (colorKey) => (theme.backgroundColor = BACKGROUND_COLORS[colorKey]);
