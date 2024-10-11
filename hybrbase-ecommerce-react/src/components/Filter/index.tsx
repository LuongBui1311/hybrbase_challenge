import { Button, Checkbox, Flex } from "antd";
import Title from "antd/es/typography/Title";
import { useFilter } from "./useFilter";
import { useEffect, useState } from "react";
import { ICategory } from "../../interface/type/category.types";

const Filter = () => {
  const { getCategoryList } = useFilter;
  const [categories, setCategories] = useState<ICategory[]>();

  const populateCategory = async () => {
    const list = await getCategoryList();
    setCategories(list);
  };

  useEffect(() => {
    populateCategory();
  }, []);
  return (
    <Flex vertical className="w-2/12">
      <Flex gap={"middle"} align="baseline">
        <Title level={3}>Filters</Title>
        <Button type="link" className="p-0 text-gray-500 underline">
          Clear filters
        </Button>
      </Flex>
      <Flex vertical>
        <Title level={5} className="text-base">Categories</Title>
        {categories
          ?.filter((category: ICategory) => category.category)
          .map((category: ICategory) => (
            <Checkbox className="text-base">{category.name}</Checkbox>
          ))}
      </Flex>
    </Flex>
  );
};

export default Filter;
