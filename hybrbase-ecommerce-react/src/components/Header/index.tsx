import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Flex, Input } from "antd";
import { Link } from "react-router-dom";
import CategoryMenu from "../Menu/CategoryMenu";

const Header = () => {
  return (
    <div className="nav-bar fixed z-10 mx-auto mt-0 w-full bg-black p-5 shadow-sm">
      <Flex align="center" justify="space-between" className="mx-auto w-10/12">
        <Flex
          gap={"large"}
          justify="start"
          align="center"
          className="flex flex-grow"
        >
          <Flex className="font-sans">
            <Link to="/" className="font-sans font-bold text-base text-white">
              Ecommerce
            </Link>
          </Flex>
          <Flex className="navbar" gap={"middle"}>
            <CategoryMenu />
            <Link to="/" className="text-white">
              Stories
            </Link>
            <Link to="/" className="text-white">
              About Us
            </Link>
          </Flex>
          <Input
            prefix={
              <Button type="text" className="hover:bg-transparent text-white">
                <SearchOutlined className="hover:text-gray-100" />
              </Button>
            }
            allowClear
            className="w-5/12 text-base text-white"
            variant="borderless"
          />
        </Flex>
        <Flex gap={"middle"} justify="center" align="center">
          <Link to="/" className="text-white">
            <ShoppingCartOutlined /> {/* Number of cart items */}0
          </Link>
          <Link to="/" className="font-sans text-white">
            Log In
          </Link>
        </Flex>
      </Flex>
    </div>
  );
};

export default Header;
