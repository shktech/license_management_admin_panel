"use client";

import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

const TransactionEdit = () => {
  const { formProps, saveButtonProps, queryResult } = useForm({});

  const transactionsData = queryResult?.data?.data;

  const { selectProps: SelectProps } = useSelect({
    resource: "transactions",
    defaultValue: transactionsData?.id,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Billing address"
          name="bill_address1"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Billing Customer name"
          name="bill_customer_name"
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
          label="Quantity"
          name="quantity"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Transaction Action"
          name="transaction_action"
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
          label="Transaction Status"
          name="transaction_status"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Transaction Type"
          name="transaction_type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...SelectProps} />
        </Form.Item>
      </Form>
    </Edit>
  );
};

export default TransactionEdit;
