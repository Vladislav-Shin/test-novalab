import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import { useHttp } from "../../hooks/http.hook";
import useService from "../../services/Services";

const Forma: React.FC = () => {
  const [newUser, setNewUser] = useState();
  const {request} = useHttp()

  const {registerUser} = useService();

  function onFinish(values: any) {
    setNewUser(values);
    (async() => {
      const response = await fetch('https://reqres.in/api/register', {
        method: 'POST',
         headers: {
          "Content-type": "application/json"
         },
         body: JSON.stringify({
          email: "charles.morris@reqres.in",
          password: "12335"
         })
        });
        if (!response.ok) {
          console.error("запрос не удался")
         }
         
         const data = await response.json();
         console.log(data);
    })();
  }
  console.log(newUser);

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
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
      <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please input your username!" }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
        <Input.Password />
      </Form.Item>
      {/* 
      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Forma;
