import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  username?: string;
  email?: string;
  password?: string;
  remember?: string;
};
const Login: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Username"
      name="username"
      rules={[{ required: true, message: 'chưa nhập tên' }]}
    >
      <Input />
    </Form.Item>
    
        <Form.Item<FieldType>
      label="email"
      name="email"
      rules={[{ required: true, message: 'chưa nhập email' }
        ,{type : "email",message : 'email chưa đúng định dạng'}
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'chưa nhập mật khẩu' },
        {min : 6 , message : "mật khẩu tối thiểu 6 ký tự"}
      ]}
    >
      <Input.Password />
    </Form.Item>



    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>




);

export default Login

