import { productAPIs } from "../../apis/product.api";
import { handleError } from "../../utils/handleError";

const getProducts = async () => {
  try {
    const res = await productAPIs.getProductList();
    return res;
  } catch (error) {
    handleError(error);
  }
};

export const useProductList = { getProducts };
