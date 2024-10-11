import { IProduct } from "./product.type";

export interface IVariant {
    id: number,
    name: string,
    product: IProduct,
    variant: IVariant,
    variants: IVariant[],
}