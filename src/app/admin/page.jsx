"use client";
import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Page = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish = () => {
    const formValues = form.getFieldsValue();
    axios
      .post("https://api.cepatsehat.com/api/v1/login", {
        username: formValues.username,
        Password: formValues.password,
      })
      .then(function (response) {
        Cookies.set("islogin", response.data?.data?.token, { expires: 1 / 24 });

        alert("login success");
        router.push("/admin/dashboard-v2");
      })
      .catch(function (error) {
        alert(error.response.data.message);
      });
  };
  const onFinishFailed = () => {
    alert("please fill form correcly");
  };
  const handleChange = (e) => {
    form.setFieldsValue({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <html>
        <div className="mx-auto mt-5">
          <h1 className="text-center">Admin</h1>

          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 400 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="mx-auto"
            form={form}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input onChange={handleChange} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password onChange={handleChange} />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </html>
    </>
  );
};
export default Page;
