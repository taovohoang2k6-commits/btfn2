import React from "react";
import { Form, Input, Button, Select } from "antd";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Lab4() {

const navigate = useNavigate();
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/categories");
      return res.data;
    },
  });


  const mutation = useMutation({
    mutationFn: async (values: any) => {
      await axios.post("http://localhost:3000/stories", values);
    },
     onSuccess: () => {
    navigate("/lab5");
  },
  });

  const onFinish = async (values: any) => {
    console.log("Success:", values);
    mutation.mutate(values);
  };

  const options = categories?.map((item: any) => ({
    value: item.id,
    label: item.title,
  }));

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Title" name="title">
        <Input />
      </Form.Item>

      <Form.Item label="Author" name="author">
        <Input />
      </Form.Item>

      <Form.Item label="Image" name="image">
        <Input />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input />
      </Form.Item>

   
      <Form.Item label="Category" name="categoryId">
        <Select options={options} placeholder="Chọn danh mục" />
      </Form.Item>

      <Button type="primary" htmlType="submit" loading={mutation.isPending}>
        Submit
      </Button>
    </Form>
  );
}

export default Lab4;
