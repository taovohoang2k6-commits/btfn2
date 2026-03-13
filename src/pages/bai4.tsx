import { useState } from "react";
import { Form, Input, Button, Select } from "antd";

const Bai4lab3 = () => {
  const [data, setData] = useState<any>(null);

  const onFinish = (values: any) => {
    console.log(values);
    setData(values);
  };

  return (
    <>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Title" name="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Slug" name="Slug" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Category" name="Category" rules={[{ required: true }]}>
          <Select
            options={[
              { label: "Demo", value: "demo" },
              { label: "Demo1", value: "demo1" },
            ]}
          />
        </Form.Item>

        <Form.Item label="Content" name="Content">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Image URL" name="ImageURL" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Thêm sản phẩm
        </Button>
      </Form>


      {data && (
        <pre style={{ marginTop: 20 }}>
          {JSON.stringify(data)}
        </pre>
      )}
    </>
  );
};

export default Bai4lab3;
