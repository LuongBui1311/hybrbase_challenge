import { Card, Flex, Image } from "antd";
import Meta from "antd/es/card/Meta";
import defaultImg from "../../../../assets/blob.jpg";
import { ProductCartProps } from "../../../../interface/prop/productCart.props";

const ProductCard = ({data}: ProductCartProps) => {
  return (
    <Card className="product_card border-none bg-slate-50">
          <Flex vertical justify="space-between" style={{ height: "100%" }}>
            <Image
              src={`http://localhost:1337${data.image.url}`}
              fallback={defaultImg}
              className="product_image"
              preview={false}
            />
            <div className="card_content">
              <Meta title={data.name} style={{ marginTop: "1rem" }} />
              <div className="card_price">{data.price}</div>
            </div>
          </Flex>
        </Card>
  );
};

export default ProductCard;
