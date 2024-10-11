import { Button, Flex, Input, Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { useFooter } from "./useFooter";
import { useEffect, useState } from "react";
import { ICategory } from "../../interface/type/category.types";

const Footer = () => {
  const { getCategoryList } = useFooter;
  const [categories, setCategories] = useState<ICategory[]>();

  const populateCategory = async () => {
    const list = await getCategoryList();
    setCategories(list);
  };

  useEffect(() => {
    populateCategory();
  }, []);
  return (
    <div className="w-full px-5 py-20 bg-white">
      <Flex className="w-10/12 mx-auto" justify="space-between">
        <div>
          <Typography>
            <Title level={2}>Sign up for our newsletter</Title>
            <Paragraph className="text-base">
              Be the first to know about our special offers, new product
              launches, and events
            </Paragraph>
          </Typography>
          <Input
            type="text"
            placeholder="Email Address"
            className="hover:border-inherit active:border-inherit active:shadow-none text-base"
            suffix={
              <Button type="text" className="hover:bg-transparent font-bold text-base h-10">
                Sign up
              </Button>
            }
          />
        </div>
        <Flex gap={100}>
          <Flex vertical>
            <Typography.Title level={5} className="text-base">Shop</Typography.Title>
            {categories?.map((category: ICategory) => (
              <Typography.Paragraph className="text-base">{category.name}</Typography.Paragraph>
            ))}
          </Flex>
          <Flex vertical>
            <Typography.Title level={5} className="text-base">Help</Typography.Title>
            <Typography.Paragraph className="text-base">Help Center</Typography.Paragraph>
            <Typography.Paragraph className="text-base">Order Status</Typography.Paragraph>
            <Typography.Paragraph className="text-base">Size Chart</Typography.Paragraph>
            <Typography.Paragraph className="text-base">Returns & Warranty</Typography.Paragraph>
            <Typography.Paragraph className="text-base">Contact Us</Typography.Paragraph>
          </Flex>
          <Flex vertical>
            <Typography.Title level={5} className="text-base">About</Typography.Title>
            <Typography.Paragraph className="text-base">About Us</Typography.Paragraph>
            <Typography.Paragraph className="text-base">Responsibility</Typography.Paragraph>
            <Typography.Paragraph className="text-base">Technology & Innovation</Typography.Paragraph>
            <Typography.Paragraph className="text-base">Returns & Warranty</Typography.Paragraph>
            <Typography.Paragraph className="text-base">Explore our stories</Typography.Paragraph>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Footer;
