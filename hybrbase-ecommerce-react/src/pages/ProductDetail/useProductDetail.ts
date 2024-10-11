import { productAPIs } from "../../apis/product.api";
import { handleError } from "../../utils/handleError";

const getSingleProduct = async (docId: string | undefined) => {
  try {
    const res = await productAPIs.getProductBySlug(docId);
    console.log(res.data.data);
    return res.data.data;
  } catch (error) {
    handleError(error);
  }
};

export const useProductDetail = { getSingleProduct };
