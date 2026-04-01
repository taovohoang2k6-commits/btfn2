import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Image, Table, Button, Input } from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";
import { Link } from "react-router-dom";
interface Story {
  id: number;
  title: string;
  author: string;
  image: string;
  description: string;
  categoryId: number;
  createdAt: string
}

export default function Lab5() {
  const queryClient = useQueryClient();


  const [keyword, setKeyword] = useState("");

  
  const { data, isLoading, isError } = useQuery<Story[]>({
    queryKey: ["getAllStories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`http://localhost:3000/stories/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllStories"] });
    },
  });


  const filteredData = data?.filter((item) =>
    item.title.toLowerCase().includes(keyword.toLowerCase())
  );


  const columns: ColumnsType<Story> = [
    { title: "Ten truyen", dataIndex: "title" },
    { title: "Tac gia", dataIndex: "author" },
    {
      title: "Hinh anh",
      dataIndex: "image",
      render: (src: string) => <Image src={src} height={100} />,
    },
    { title: "Mo ta", dataIndex: "description" },
    { title: "Danh muc", dataIndex: "categoryId" },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (date: string) =>
        new Date(date).toLocaleDateString("vi-VN"),
    },
    {
  title: "Action",
  render: (_, record) => (
    <div style={{ display: "flex", gap: 8 }}>
      <Button
        danger
        onClick={() => deleteMutation.mutate(record.id)}
      >
        Xóa
      </Button>

<Link to={`/update/${record.id}`}>
  <Button type="primary">Sửa</Button>
</Link>
    </div>
  ),
}
  ];

  if (isError) {
    return <div>Có lỗi xảy ra</div>;
  }

  return (
    <>
    
      <Input
        placeholder="Nhập tên truyện..."
        style={{ width: 300, marginBottom: 20 }}
        onChange={(e) => setKeyword(e.target.value)}
      />

    <Link to="/lab4">
    <Button type="primary" className="ml-3">thêm</Button>
    </Link>
      <Table
        columns={columns}
        dataSource={filteredData}
        loading={isLoading}
        rowKey="id"
      />
    </>
  );
}
