import {
  Button,
  Flex,
  InputNumber,
  Image,
} from "antd";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  ArrowLeftOutlined,
} from "@ant-design/icons";
import defaultImg from "../../assets/blob.jpg";
import SizeMenu from "../../components/Menu/SizeMenu";

const ProductDetailPage = () => {
  return (
    <>
      <Header />
      <div className="w-full mt-28 h-fit">
        <div className="w-10/12 mx-auto p-5">
          <Button type="text" className="mb-5">
            <ArrowLeftOutlined /> Back
          </Button>
          <Flex gap={100} justify="space-between">
            <div className="w-full">
              <Image alt="" src={""} fallback={defaultImg} width={"100%"} />
            </div>
            <div className="w-full">
              <Flex vertical gap={"large"}>
                <Flex vertical gap={"middle"}>
                  <h2 className="my-0 text-4xl font-bold">
                    ATVNCG - Inferno Logo Tee
                  </h2>
                  <h4 className="my-0 text-2xl">{`355.000VND`}</h4>
                </Flex>
                <p className="my-0 text-base">
                  Fabric Material: Two-way cotton material that is cool and has
                  good elasticity. It does not stretch or fade… Product Form:
                  Casual and easy to wear. Highlights: High-quality print and
                  logo, no worries about peeling. Mix & Match Suggestions: It is
                  recommended to wear it with shorts, jeans, or other ATVNCG
                  sets.
                </p>
                <Flex gap={"large"}>
                  <InputNumber min={1} max={10} defaultValue={3} />
                  <SizeMenu />
                </Flex>
                <Flex gap={"large"}>
                  <Button>Add to cart</Button>
                  <Button>Buy now</Button>
                </Flex>
              </Flex>
            </div>
          </Flex>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
