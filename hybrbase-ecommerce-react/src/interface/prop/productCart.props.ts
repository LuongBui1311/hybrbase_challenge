import { CardProps } from "antd";
import { IProduct } from "../type/product.type";

export interface ProductCartProps extends CardProps {
  data: IProduct;
}
