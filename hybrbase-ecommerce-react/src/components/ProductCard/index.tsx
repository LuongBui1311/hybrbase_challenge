import { Card, Col, Flex, Image } from "antd";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";
import defaultImg from "../../assets/blob.jpg";

const ProductCard = () => {
  return (
    <Col span={8}>
      <Link to="/">
        <Card className="product_card border-none bg-slate-50">
          <Flex vertical justify="space-between" style={{ height: "100%" }}>
            <Image
              src=""
              fallback={defaultImg}
              className="product_image"
              preview={false}
            />
            <div className="card_content">
              <Meta title="Product name" style={{ marginTop: "1rem" }} />
              <div className="card_price">'Product price'</div>
            </div>
          </Flex>
        </Card>
      </Link>
    </Col>
  );
};

export default ProductCard;
