import React from 'react';
import { Flex, Space, Table, Tag , Image } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  id : number;
  name: string;
  age: number;
  major: string;
}

const columns: TableProps<DataType>['columns'] = [
      {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
  title: 'Major',
  dataIndex: 'major',
  key: 'major',
},
];

const data: DataType[] = [
  {
    key: '1',
    id: 1,
    name: 'John Brown',
    age: 32,
    major : "abc"
  },
  {
    key: '2',
     id: 2,
    name: 'Jim Green',
    age: 42,
    major : "abc"
  },
  {
    key: '3',
     id: 3,
    name: 'Joe Black',
    age: 32,
major : "abc"
  },
];

const Product: React.FC = () => <Table<DataType> columns={columns} dataSource={data} />;

export default Product;