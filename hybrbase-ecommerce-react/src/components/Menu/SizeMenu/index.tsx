import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Space } from "antd";

const SizeMenu = () => {
  const items: MenuProps["items"] = [
    
  ];

  const menuProps = {
    items,
  };
  return (
    <Dropdown menu={menuProps} className="w-5/12 text-base">
      <Button>
        <Space>
          Size
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};

export default SizeMenu;
