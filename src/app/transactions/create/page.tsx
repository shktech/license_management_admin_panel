"use client";

import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import {
  transactionsActionsOptions,
  transactionsStatusOptions,
  transactionsTypeOptions,
} from "../data/transactionsData";

export default function BlogPostCreate() {
  const { formProps, saveButtonProps } = useForm({});

  const renderTransactionActionsOptions = transactionsActionsOptions.map(
    (option) => (
      <Select.Option key={option.value} value={option.value}>
        {option.label}
      </Select.Option>
    )
  );

  const renderTransactionsStatusOptions = transactionsStatusOptions.map(
    (option) => (
      <Select.Option key={option.value} value={option.value}>
        {option.label}
      </Select.Option>
    )
  );

  const renderTransactionsTypeOptions = transactionsTypeOptions.map(
    (option) => (
      <Select.Option key={option.value} value={option.value}>
        {option.label}
      </Select.Option>
    )
  );

  return (
    <Create saveButtonProps={saveButtonProps}>
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
          <Select placeholder="Select a transaction action">
            {renderTransactionActionsOptions}
          </Select>
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
          <Select placeholder="Select a transaction status">
            {renderTransactionsStatusOptions}
          </Select>
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
          <Select placeholder="Select a transaction type">
            {renderTransactionsTypeOptions}
          </Select>
        </Form.Item>
      </Form>
    </Create>
  );
}
