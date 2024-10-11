import { ICategory } from "./category.types";
import { IImage } from "./image.type";

export interface IProduct {
    id: number,
    documentId: string
    name: string | undefined,
    slug: string,
    price: number,
    descriptions: string,
    image: IImage,
    variants: string[],
    categories: ICategory,
    stocks: number
}