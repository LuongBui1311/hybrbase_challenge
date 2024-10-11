import { Button, Checkbox, Flex } from "antd"
import Title from "antd/es/typography/Title"

const Filter = () => (
    <Flex vertical>
        <Flex gap={"middle"} align="baseline">
            <Title level={3}>Filters</Title>
            <Button type="link" className="p-0 text-gray-500 underline">Clear filters</Button>
        </Flex>
        <Flex vertical>
            <Title level={4}>Categories</Title>
            <Checkbox value={'A'}>A</Checkbox>
            <Checkbox value={'A'}>A</Checkbox>
            <Checkbox value={'A'}>A</Checkbox>
            <Checkbox value={'A'}>A</Checkbox>
        </Flex>
    </Flex>
)

export default Filter
