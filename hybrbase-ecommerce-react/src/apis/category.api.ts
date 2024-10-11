import { axiosClient } from "./axios";

const getUrl = (url: string) => `${url}`;
const listCategoryUrl = getUrl("categories?populate=*");


const getCategoryList = () => {
  return axiosClient.get(listCategoryUrl);
};

export const categoryAPIs = { getCategoryList };
