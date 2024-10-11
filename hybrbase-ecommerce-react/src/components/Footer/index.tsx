import { Button, Flex, Input, Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

const Footer = () => {
  return (
    <div className="w-full p-5 bg-white">
      <Flex className="w-10/12 mx-auto" justify="space-between" >
        <div>
          <Typography>
            <Title level={2}>Sign up for our newsletter</Title>
            <Paragraph>
              Be the first to know about our special offers, new product
              launches, and events
            </Paragraph>
          </Typography>
          <Input
            type="text"
            placeholder="Email Address"
            className="hover:border-inherit active:border-inherit active:shadow-none"
            suffix={<Button type="text" className="hover:bg-transparent font-bold">Sign up</Button>}
          />
        </div>
        <Flex gap={100}>
          <div>Shop</div>
          <div>Help</div>
          <div>About</div>
        </Flex>
      </Flex>
    </div>
  );
};

export default Footer;
