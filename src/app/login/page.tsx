"use client";
import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined, KeyOutlined } from "@ant-design/icons";
import styles from "../../styles/AuthForm.module.css";
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
      <div className={styles.titles}>
        <KeyOutlined style={{ color: "var(--primary)", fontSize: 30 }} />
        <h3>Admin Dashboard App</h3>
      </div>
      <div className={styles.authContainer}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{ width: "100%" }}
        >
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
