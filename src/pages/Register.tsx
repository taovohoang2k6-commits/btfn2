import { Form, Input, Button, message } from "antd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAuthStore } from "../stores/useAuthStore";

const Register = () => {
  const { setUser } = useAuthStore();

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: any) => {
      return await axios.post("http://localhost:3000/register", values);
    },

    onSuccess: ({ data }) => {
     
      setUser({
        user: data.user,
        token: data.accessToken,
      });

      message.success("Đăng ky thành công!");
    },

    onError: () => {
      message.error("Sai email hoặc password!");
    },
  });

  const onFinish = (values: any) => {
    mutate(values);
  };

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 400, margin: "50px auto" }}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Nhập email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Nhập password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isPending} block>
          Đăng ky
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;