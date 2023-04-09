import { LOADER_IMG_URL, NO_IMG_URL, POSTER_IMGS_URL } from "./constants";

export const getImgUrl = (imgPath: string) => {
  if (!imgPath) return NO_IMG_URL;
  return `${POSTER_IMGS_URL}${imgPath}`;
};

export const getLoaderImg = () => {
  return LOADER_IMG_URL;
};
