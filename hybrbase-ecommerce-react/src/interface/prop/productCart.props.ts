import { CardProps } from "antd";

export interface ProductCartProps extends CardProps {
  key: number,
  name: string;
  slug: string;
  image: string;
  price: number;
}
