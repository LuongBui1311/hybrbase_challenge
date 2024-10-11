import { Button, Flex, Image } from "antd";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ArrowLeftOutlined } from "@ant-design/icons";
import defaultImg from "../../assets/blob.jpg";
import ProductInfor from "./components/ProductInfor";
import { useProductDetail } from "./useProductDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../../interface/type/product.type";

const ProductDetailPage = () => {
  const params = useParams();
  const { getSingleProduct } = useProductDetail;
  const [product, setProduct] = useState<IProduct[]>();

  const populateProduct = async (slug: string | undefined) => {
    const product = await getSingleProduct(slug);
    setProduct(product);
  };

  useEffect(() => {
    populateProduct(params.slug);
  }, []);
  return (
    <>
      <Header />
      <div className="w-full mt-28 mb-36 h-fit">
        <div className="w-10/12 mx-auto p-5">
          <Button
            type="link"
            href="/"
            className="mb-5 text-black text-base hover:text-slate-600"
          >
            <ArrowLeftOutlined /> Back
          </Button>
          <Flex gap={100} justify="space-between">
            {product?.map((product: any) => (
              <>
                <div className="w-full">
                  <Image
                    alt=""
                    src={`http://localhost:1337${product.image.url}`}
                    fallback={defaultImg}
                    width={"100%"}
                  />
                </div>
                <div className="w-full">
                  <ProductInfor
                    name={product.name}
                    price={product.price}
                    descriptions={product.descriptions}
                    stocks={product.stocks}
                  />
                </div>
              </>
            ))}
          </Flex>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
