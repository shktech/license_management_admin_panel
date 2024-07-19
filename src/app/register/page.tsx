"use client";
// src/LoginForm.js
import React from "react";
import { Form, Input, Button } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  KeyOutlined,
} from "@ant-design/icons";
import styles from "../../styles/AuthForm.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
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
          <h4>Register</h4>
          <Form.Item
            name="fullname"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
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
          <Form.Item
            name="confirmpassword"
            rules={[
              { required: true, message: "Please confirm your Password!" },
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: "100%" }}
            >
              Register
            </Button>

            <p className={styles.registerLink}>
              Or <Link href="/login">Login Now</Link>
            </p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
