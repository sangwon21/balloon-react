import { checkResponseData } from "@utils/util";

export const get = async (url, dispatch, successActionType, errorActionType) => {
  try {
    const response = await fetch(url);
    if (!checkResponseData(response)) throw new Error(response.status);
    const data = await response.json();
    dispatch({ type: successActionType, payload: data });
    return data;
  } catch (error) {
    dispatch({ type: errorActionType, payload: error });
    return error;
  }
};

export const put = async (url, data) => {
  return await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });
};
