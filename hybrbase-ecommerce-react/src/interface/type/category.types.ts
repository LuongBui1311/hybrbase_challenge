import { IProduct } from "../product.type";

export interface ICategory {
  name: string;
  slug: string;
  category: ICategory;
  categories: ICategory[];
  products: IProduct[];
}
