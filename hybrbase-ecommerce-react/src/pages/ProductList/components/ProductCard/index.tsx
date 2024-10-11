import { Card, Col, Flex, Image } from "antd";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";
import defaultImg from "../../../../assets/blob.jpg";
import { ProductCartProps } from "../../../../interface/prop/productCart.props";

const ProductCard = ({key, name, slug, image, price}: ProductCartProps) => {
  return (
    <Col span={8} key={key}>
      <Link to={`/productdetail?slug=${slug}`}>
        <Card className="product_card border-none bg-slate-50">
          <Flex vertical justify="space-between" style={{ height: "100%" }}>
            <Image
              src={`http://localhost:1337${image}`}
              fallback={defaultImg}
              className="product_image"
              preview={false}
            />
            <div className="card_content">
              <Meta title={name} style={{ marginTop: "1rem" }} />
              <div className="card_price">{price}</div>
            </div>
          </Flex>
        </Card>
      </Link>
    </Col>
  );
};

export default ProductCard;
