import React, { useState } from "react";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu, theme, Table, Modal, Button, Form, Input, Select } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const columns = [
  { title: "Name", dataIndex: "name" },
  { title: "Email", dataIndex: "email" },
  { title: "Role", dataIndex: "role" },
];

const items = [
  {
    key: "1",
    icon: <VideoCameraOutlined />,
    label: <Link to="/dashboard">Dashboard</Link>,
  },
  {
    key: "2",
    icon: <UserOutlined />,
    label: <Link to="/users">Danh sách user</Link>,
  },
];

const Uers: React.FC = () => {

  const [open, setOpen] = useState(false);

  const [data, setData] = useState([
    { key: 1, name: "Admin", email: "admin@gmail.com", role: "admin" },
    { key: 2, name: "User", email: "user@gmail.com", role: "user" },
  ]);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onFinish = (values: any) => {
    const newUser = {
      key: Date.now(),
      ...values,
    };

    setData([...data, newUser]);
    setOpen(false);
  };

  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["2"]} items={items} />
      </Sider>

      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          Users
        </Header>

        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >

           
            <Button className="ml-185" type="primary" onClick={() => setOpen(true)}>
              Thêm User
            </Button>

            <br /><br />

            <Table columns={columns} dataSource={data} />

            
            <Modal
              title="Thêm User"
              open={open}
              footer={null}
              onCancel={() => setOpen(false)}
            >

              <Form layout="vertical" onFinish={onFinish}>

                <Form.Item
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: "Nhập tên!" }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: "Nhập email!" }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Role"
                  name="role"
                  rules={[{ required: true, message: "Chọn role!" }]}
                >
                  <Select
                    options={[
                      { value: "admin", label: "Admin" },
                      { value: "user", label: "User" },
                    ]}
                  />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                  Thêm
                </Button>

              </Form>

            </Modal>

          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Uers;
