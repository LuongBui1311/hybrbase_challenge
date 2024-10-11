import { Button, Col, Flex, Row } from "antd";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Filter from "../../components/Filter";
import SortMenu from "../../components/Menu/SortMenu";
import ProductCard from "../../components/ProductCard";

const ProductListPage = () => {
  return (
    <>
      <Header />
      <div className="w-full">
        <Flex
          justify="space-between"
          gap={100}
          className="my-28 mx-auto p-5 w-10/12"
        >
          <Filter />
          <div className="flex-grow flex flex-col gap-6 justify-center align-middle">
            <div className="clear-both flex flex-row-reverse">
              <SortMenu />
            </div>
            <p className="clear-both flex flex-row-reverse">
              Display total products
            </p>
            <Row className="clear-both" gutter={16}>
              <ProductCard />
              <Col span={8}>Product card</Col>
              <Col span={8}>Product card</Col>
            </Row>
            <Button className="w-5/12 mx-auto">Load more products</Button>
          </div>
        </Flex>
      </div>
      <Footer />
    </>
  );
};

export default ProductListPage;
