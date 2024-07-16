"use client";
// src/LoginForm.js
import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "../styles/AuthForm.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {

  const router = useRouter();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    router.push("/");
  };

  return (
    <div className={styles.authPage}>
      <h3>Admin Dashboard App</h3>
      <div className={styles.authContainer}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{ width: "100%" }}
        >
          <div className={styles.logo} />
          <h4>Log in</h4>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: "100%" }}
            >
              Log in
            </Button>

            <p className={styles.registerLink}>
              Or <Link href="/register">Register Now</Link>
            </p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
