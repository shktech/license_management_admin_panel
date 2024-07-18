"use client";

import { DateField, MarkdownField, Show, TextField } from "@refinedev/antd";
import { useOne, useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

const TransactionShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  const { data: transactionsData, isLoading: transactionsIsLoading } = useOne({
    resource: "transactions",
    id: record?.transactions?.id || "",
    queryOptions: {
      enabled: !!record,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>ID</Title>
      <TextField value={record?.id} />
      <Title level={5}>Billing Address 1</Title>
      <TextField value={record?.bill_address1} />
      <Title level={5}>Billing Address 2</Title>
      <TextField value={record?.bill_address2} />
      <Title level={5}>Billing Address ID</Title>
      <TextField value={record?.bill_address_id} />
      <Title level={5}>Billing City</Title>
      <TextField value={record?.bill_city} />
      <Title level={5}>Billing Contact Email</Title>
      <TextField value={record?.bill_contact_email} />
      <Title level={5}>Billing Contact First Name</Title>
      <TextField value={record?.bill_contact_first_name} />
      <Title level={5}>Billing Contact ID</Title>
      <TextField value={record?.bill_contact_id} />
      <Title level={5}>Billing Contact Last Name</Title>
      <TextField value={record?.bill_contact_last_name} />
      <Title level={5}>Billing Contact Phone</Title>
      <TextField value={record?.bill_contact_phone} />
      <Title level={5}>Billing Country</Title>
      <TextField value={record?.bill_country} />
      <Title level={5}>Billing Customer Account</Title>
      <TextField value={record?.bill_customer_account} />
      <Title level={5}>Billing Customer ID</Title>
      <TextField value={record?.bill_customer_id} />
      <Title level={5}>Billing Customer Name</Title>
      <TextField value={record?.bill_customer_name} />
      <Title level={5}>Billing Postal Code</Title>
      <TextField value={record?.bill_postal_code} />
      <Title level={5}>Billing State</Title>
      <TextField value={record?.bill_state} />
      <Title level={5}>Created By</Title>
      <TextField value={record?.created_by} />
      <Title level={5}>Creation Date</Title>
      <TextField value={record?.creation_date} />
      <Title level={5}>Duration</Title>
      <TextField value={record?.duration} />
      <Title level={5}>End Date</Title>
      <TextField value={record?.end_date} />
      <Title level={5}>Error Message</Title>
      <TextField value={record?.error_message} />
      <Title level={5}>Last Update Date</Title>
      <TextField value={record?.last_update_date} />
      <Title level={5}>Last Updated By</Title>
      <TextField value={record?.last_updated_by} />
      <Title level={5}>License Key</Title>
      <TextField value={record?.license_key} />
      <Title level={5}>Notification Date</Title>
      <TextField value={record?.notification_date} />
      <Title level={5}>OCS Part ID</Title>
      <TextField value={record?.ocs_part_id} />
      <Title level={5}>Organization Code</Title>
      <TextField value={record?.organization_code} />
      <Title level={5}>OSC Part Number</Title>
      <TextField value={record?.osc_part_number} />
      <Title level={5}>Quantity</Title>
      <TextField value={record?.quantity} />
      <Title level={5}>Reference Code</Title>
      <TextField value={record?.reference_code} />
      <Title level={5}>Reference Product</Title>
      <TextField value={record?.reference_product} />
      <Title level={5}>Shipping Address 1</Title>
      <TextField value={record?.ship_address1} />
      <Title level={5}>Shipping Address 2</Title>
      <TextField value={record?.ship_address2} />
      <Title level={5}>Shipping Address ID</Title>
      <TextField value={record?.ship_address_id} />
      <Title level={5}>Shipping City</Title>
      <TextField value={record?.ship_city} />
      <Title level={5}>Shipping Contact Email</Title>
      <TextField value={record?.ship_contact_email} />
      <Title level={5}>Shipping Contact First Name</Title>
      <TextField value={record?.ship_contact_first_name} />
      <Title level={5}>Shipping Contact ID</Title>
      <TextField value={record?.ship_contact_id} />
      <Title level={5}>Shipping Contact Last Name</Title>
      <TextField value={record?.ship_contact_last_name} />
      <Title level={5}>Shipping Contact Phone</Title>
      <TextField value={record?.ship_contact_phone} />
      <Title level={5}>Shipping Country</Title>
      <TextField value={record?.ship_country} />
      <Title level={5}>Shipping Customer Account</Title>
      <TextField value={record?.ship_customer_account} />
      <Title level={5}>Shipping Customer ID</Title>
      <TextField value={record?.ship_customer_id} />
      <Title level={5}>Shipping Customer Name</Title>
      <TextField value={record?.ship_customer_name} />
      <Title level={5}>Shipping Postal Code</Title>
      <TextField value={record?.ship_postal_code} />
      <Title level={5}>Shipping State</Title>
      <TextField value={record?.ship_state} />
      <Title level={5}>Source Reference Date</Title>
      <TextField value={record?.source_reference_date} />
      <Title level={5}>Source Reference ID</Title>
      <TextField value={record?.source_reference_id} />
      <Title level={5}>Source Reference Number</Title>
      <TextField value={record?.source_reference_number} />
      <Title level={5}>Start Date</Title>
      <TextField value={record?.start_date} />
      <Title level={5}>Transaction Action</Title>
      <TextField value={record?.transaction_action} />
      <Title level={5}>Transaction Date</Title>
      <TextField value={record?.transaction_date} />
      <Title level={5}>Transaction Number</Title>
      <TextField value={record?.transaction_number} />
      <Title level={5}>Transaction Source</Title>
      <TextField value={record?.transaction_source} />
      <Title level={5}>Transaction Status</Title>
      <TextField value={record?.transaction_status} />
      <Title level={5}>Transaction Type</Title>
      <TextField value={record?.transaction_type} />
      <Title level={5}>Vendor Name</Title>
      <TextField value={record?.vendor_name} />
      <Title level={5}>Vendor Part Number</Title>
      <TextField value={record?.vendor_part_number} />
    </Show>
  );
};

export default TransactionShow;
