import { Button, Col, Flex, Row } from "antd";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Filter from "../../components/Filter";
import SortMenu from "../../components/Menu/SortMenu";
import ProductCard from "./components/ProductCard";
import { useProductList } from "./useProductList";
import { useEffect, useState } from "react";
import { IProduct } from "../../interface/type/product.type";
import { Link } from "react-router-dom";

const ProductListPage = () => {
  const { getProducts } = useProductList;
  const [products, setProduct] = useState<IProduct[]>();
  const [total, setTotal] = useState<number>(0);

  const populateProductList = async () => {
    const list = await getProducts();
    setProduct(list?.data.data);
    setTotal(list?.data.meta.pagination.total)
  };

  useEffect(() => {
    populateProductList();
  }, []);

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
          <div className="w-10/12 flex flex-col gap-6 justify-center align-middle">
            <div className="clear-both flex flex-row-reverse">
              <SortMenu />
            </div>
            <p className="clear-both flex flex-row-reverse">
              Display {total} {total > 1 ? 'products' : 'product'}
            </p>
            <Row className="clear-both" gutter={16}>
            {products?.map((data: IProduct) => (
            <Col lg={8} key={data.id}>
              <Link
                to={`/productdetail/${data.documentId}`}
              >
                <ProductCard data={data} />
              </Link>
            </Col>
          ))}
            </Row>
            <Button className="w-5/12 mx-auto text-base h-10">Load more products</Button>
          </div>
        </Flex>
      </div>
      <Footer />
    </>
  );
};

export default ProductListPage;
