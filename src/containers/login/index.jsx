import { Form, Input, Button, Checkbox, message } from "antd";

import "./index.scss";

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values.password);

    if(values.username === "guest" && values.password === '123123') {
      sessionStorage.setItem("access_token", "guest");
      window.location.hash = "/"
    } else {
      message.error("Please check your username and password and try again.");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h1>This is login page:</h1>
      
      <hr />
      <hr />
      <hr />
      username is: guest
      <br />
      password is: 123123
      <hr />
      <hr />
      <hr />

      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'guest' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: '123123' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};


export default Login;
