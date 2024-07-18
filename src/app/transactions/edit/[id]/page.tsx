"use client";
import { Edit, useForm } from "@refinedev/antd";
import { DatePicker, Form, Input, Select } from "antd";
import {
  transactionsActionsOptions,
  transactionsStatusOptions,
  transactionsTypeOptions,
} from "../../data/transactionsData";
import dayjs from "dayjs";

const TransactionEdit = () => {
  const { formProps, saveButtonProps, queryResult } = useForm({});

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

  const formInit = {
    ...queryResult?.data?.data,
    transaction_date: dayjs(),
    creation_date: dayjs(),
    last_update_date: dayjs(),
    notification_date: dayjs(),
    source_reference_date: dayjs(),
    start_date: dayjs(),
    end_date: dayjs(),
  };

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical" initialValues={formInit}>
        <Form.Item
          label="Billing Address 1"
          name="bill_address1"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Billing Address 2"
          name="bill_address2"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Billing Address ID"
          name="bill_address_id"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Billing City"
          name="bill_city"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Billing Contact Email"
          name="bill_contact_email"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Billing Contact First Name"
          name="bill_contact_first_name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Billing Contact ID"
          name="bill_contact_id"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Billing Contact Last Name"
          name="bill_contact_last_name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Billing Contact Phone"
          name="bill_contact_phone"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Billing Country"
          name="bill_country"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Billing Customer Account"
          name="bill_customer_account"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Billing Customer ID"
          name="bill_customer_id"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Billing Customer Name"
          name="bill_customer_name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Billing Postal Code"
          name="bill_postal_code"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Billing State"
          name="bill_state"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Created By"
          name="created_by"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Creation Date"
          name="creation_date"
          rules={[{ required: true }]}
        >
          <DatePicker style={{ width: "100%" }} format={"YYYY-MM-DD"} />
        </Form.Item>

        <Form.Item
          label="Duration"
          name="duration"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="End Date"
          name="end_date"
          rules={[{ required: true }]}
        >
          <DatePicker style={{ width: "100%" }} format={"YYYY-MM-DD"} />
        </Form.Item>

        <Form.Item
          label="Error Message"
          name="error_message"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Update Date"
          name="last_update_date"
          rules={[{ required: true }]}
        >
          <DatePicker style={{ width: "100%" }} format={"YYYY-MM-DD"} />
        </Form.Item>

        <Form.Item
          label="Last Updated By"
          name="last_updated_by"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="License Key"
          name="license_key"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Notification Date"
          name="notification_date"
          rules={[{ required: true }]}
        >
          <DatePicker style={{ width: "100%" }} format={"YYYY-MM-DD"} />
        </Form.Item>

        <Form.Item
          label="OCS Part ID"
          name="ocs_part_id"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Organization Code"
          name="organization_code"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="OSC Part Number"
          name="osc_part_number"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Quantity"
          name="quantity"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Reference Code"
          name="reference_code"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Reference Product"
          name="reference_product"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Shipping Address 1"
          name="ship_address1"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Shipping Address 2"
          name="ship_address2"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Shipping Address ID"
          name="ship_address_id"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Shipping City"
          name="ship_city"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Shipping Contact Email"
          name="ship_contact_email"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Shipping Contact First Name"
          name="ship_contact_first_name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Shipping Contact ID"
          name="ship_contact_id"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Shipping Contact Last Name"
          name="ship_contact_last_name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Shipping Contact Phone"
          name="ship_contact_phone"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Shipping Country"
          name="ship_country"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Shipping Customer Account"
          name="ship_customer_account"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Shipping Customer ID"
          name="ship_customer_id"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Shipping Customer Name"
          name="ship_customer_name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Shipping Postal Code"
          name="ship_postal_code"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Shipping State"
          name="ship_state"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Source Reference Date"
          name="source_reference_date"
          rules={[{ required: true }]}
        >
          <DatePicker style={{ width: "100%" }} format="YYYY-MM-DD" />
        </Form.Item>

        <Form.Item
          label="Source Reference ID"
          name="source_reference_id"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Source Reference Number"
          name="source_reference_number"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Start Date"
          name="start_date"
          rules={[{ required: true }]}
        >
          <DatePicker style={{ width: "100%" }} format="YYYY-MM-DD" />
        </Form.Item>

        <Form.Item
          label="Transaction Action"
          name="transaction_action"
          rules={[{ required: true }]}
        >
          <Select placeholder="Select a transaction action">
            {renderTransactionActionsOptions}
          </Select>
        </Form.Item>

        <Form.Item
          label="Transaction Date"
          name="transaction_date"
          rules={[{ required: true }]}
        >
          <DatePicker style={{ width: "100%" }} format="YYYY-MM-DD" />
        </Form.Item>

        <Form.Item
          label="Transaction Number"
          name="transaction_number"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Transaction Source"
          name="transaction_source"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Transaction Status"
          name="transaction_status"
          rules={[{ required: true }]}
        >
          <Select placeholder="Select a transaction status">
            {renderTransactionsStatusOptions}
          </Select>
        </Form.Item>

        <Form.Item
          label="Transaction Type"
          name="transaction_type"
          rules={[{ required: true }]}
        >
          <Select placeholder="Select a transaction type">
            {renderTransactionsTypeOptions}
          </Select>
        </Form.Item>
      </Form>
    </Edit>
  );
};

export default TransactionEdit;
