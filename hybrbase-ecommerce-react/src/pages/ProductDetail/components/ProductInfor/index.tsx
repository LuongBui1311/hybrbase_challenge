import { Button, Flex, InputNumber } from "antd";
import SizeMenu from "../../../../components/Menu/SizeMenu";
import { ProductInforProps } from "../../../../interface/prop/productInfo.prop";

const ProductInfor = ({
  name,
  price,
  descriptions,
  stocks,
}: ProductInforProps) => {
  return (
    <>
      <Flex vertical gap={"large"}>
        <Flex vertical gap={"middle"}>
          <h2 className="my-0 text-3xl font-bold">{name}</h2>
          <h4 className="my-0 text-2xl font-semibold">{`${price} VND`}</h4>
        </Flex>
        <p className="my-0 text-base">{descriptions}</p>
        <Flex justify="space-between">
          <Flex gap={"large"}>
            <InputNumber
              min={1}
              max={stocks}
              defaultValue={1}
              className="w-5/12 text-base"
            />
            <SizeMenu />
          </Flex>
          <p className="font-semibold">In stock: {stocks}</p>
        </Flex>
        <Flex gap={"large"}>
          <Button variant="outlined" className="w-full text-base font-bold p-5 ">
            Add to cart
          </Button>
          <Button type="primary" className="w-full text-base font-bold p-5 ">
            Buy now
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default ProductInfor;
