import { productAPIs } from "../../apis/product.api";
import { handleError } from "../../utils/handleError";

const getSingleProduct = async (slug: string | undefined) => {
  try {
    const res = await productAPIs.getProductBySlug(slug);
    console.log(res.data.data);
    return res.data.data;
  } catch (error) {
    handleError(error);
  }
};

export const useProductDetail = { getSingleProduct };
