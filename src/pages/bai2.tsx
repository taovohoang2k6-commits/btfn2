import React from "react";
import { Flex, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";

interface DataType {
  key: string;
  ID: number;
  name: string;
  Email: string;
  Status: string[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "ID",
    dataIndex: "ID",
    key: "ID",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "Email",
    key: "Email",
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    render: (_, { Status }) => (
      <Flex gap="small" wrap>
        {Status.map((status) => {
          let color = "default";

          if (status === "active") {
            color = "green";
          } else if (status === "inactive") {
            color = "red";
          }
 

          return (
            <Tag color={color} key={status}>
              {status.toUpperCase()}
            </Tag>
          );
        })}
      </Flex>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    ID: 1,
    name: "John Brown",
    Email: "abc@gmail.com",
    Status: ["active"],
  },
  {
    key: "2",
    ID: 2,
    name: "Jim Green",
    Email: "abc@gmail.com",
    Status: ["inactive"],
  },
  {
    key: "3",
    ID: 3,
    name: "Joe Black",
    Email: "abc@gmail.com",
    Status: ["active"],
  },
];

const Bai2: React.FC = () => (
  <Table<DataType> columns={columns} dataSource={data} />
);

export default Bai2;
