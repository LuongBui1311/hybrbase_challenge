import { axiosClient } from "./axios";

const getUrl = (url: string) => `${url}`;
const listProductUrl = getUrl("products?populate=*");


const getProductList = () => {
  return axiosClient.get(listProductUrl);
};

const getProductBySlug = (slug: string | undefined) => {
  const singleProductUrl = getUrl(`products?${slug}&populate=*`);
  return axiosClient.get(singleProductUrl);
};

export const productAPIs = { getProductList, getProductBySlug };
