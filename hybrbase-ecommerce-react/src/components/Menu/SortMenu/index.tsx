import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Space } from "antd";

const SortMenu = () => {
  const items: MenuProps["items"] = [
    
  ];

  const menuProps = {
    items,
  };

  return (
    <Dropdown placement="bottomRight" menu={menuProps}>
      <Button>
        <Space>
          Sort
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};

export default SortMenu;
