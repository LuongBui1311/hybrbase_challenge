import { categoryAPIs } from "../../apis/category.api";
import { handleError } from "../../utils/handleError";

const getCategoryList = async () => {
  try {
    const res = await categoryAPIs.getCategoryList();
    return res.data.data;
  } catch (error) {
    handleError;
  }
};

export const useFilter = { getCategoryList };
