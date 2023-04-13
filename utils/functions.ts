import {
  GET_REQUEST_TOKEN_URL,
  LOADER_IMG_URL,
  NO_IMG_URL,
  POSTER_IMGS_URL,
  REDIRECT_URL,
} from "./constants";

export const getImgUrl = (imgPath: string) => {
  if (!imgPath) return NO_IMG_URL;
  return `${POSTER_IMGS_URL}${imgPath}`;
};

export const getLoaderImg = () => {
  return LOADER_IMG_URL;
};

export const getRequestTokenURL = (requestToken: string) => {
  return `${GET_REQUEST_TOKEN_URL}${requestToken}${REDIRECT_URL}`;
};

export const saveToLocalStorage = (key: string, value: string) =>
  localStorage.setItem(key, value);

export const getFromLocalStorage = (key: string) => localStorage.getItem(key);
export const removeFromLocalStorage = (key: string) =>
  localStorage.removeItem(key);
