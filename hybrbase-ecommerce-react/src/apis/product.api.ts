import { axiosClient } from "./axios";

const getUrl = (url: string) => `${url}`;
const listProductUrl = getUrl("products?populate=*");


const getProductList = () => {
  return axiosClient.get(listProductUrl);
};

const getProductBySlug = (docId: string | undefined) => {
  const singleProductUrl = getUrl(`products/${docId}?populate=*`);
  return axiosClient.get(singleProductUrl);
};

export const productAPIs = { getProductList, getProductBySlug };
