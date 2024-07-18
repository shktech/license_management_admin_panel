"use client";

import { Create, useForm } from "@refinedev/antd";
import { DatePicker, Form, Input } from "antd";

export default function CategoryCreate() {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Vendor Name"
          name="vendor_name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Customer Name"
          name="ship_customer_name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="License Key"
          name="license_key"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Organization Code"
          name="organization_code"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Transaction Number"
          name="transaction_number"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Transaction Date"
          name="transaction_date"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item label="Start Date" name="start_date">
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item label="End Date" name="end_date">
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item label="Active Seats" name="active_seats">
          <Input />
        </Form.Item>
        <Form.Item label="Renewal Seats" name="renewal_seats">
          <Input />
        </Form.Item>
        <Form.Item label="Expired Seats" name="expired_seats">
          <Input />
        </Form.Item>
        <Form.Item label="Revoked Seats" name="revoked_seats">
          <Input />
        </Form.Item>
        <Form.Item label="Last Update Date" name="last_update_date">
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
      </Form>
    </Create>
  );
}
