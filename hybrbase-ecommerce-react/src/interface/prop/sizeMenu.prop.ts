import { MenuProps } from "antd";
import { IVariant } from "../type/variant.types";

export interface SizeMenuProps extends MenuProps {
    variant: IVariant[]
}