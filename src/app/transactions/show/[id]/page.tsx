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
      <Title level={5}>Transaction Number</Title>
      <TextField value={record?.transaction_number} />
      <Title level={5}>Transaction Date</Title>
      <DateField value={record?.transaction_date} />
      <Title level={5}>Transaction Type</Title>
      <TextField value={record?.transaction_type} />
      <Title level={5}>Transaction Status</Title>
      <TextField value={record?.transaction_status} />
      <Title level={5}>License Key</Title>
      <TextField value={record?.license_key} />
      <Title level={5}>Quantity</Title>
      <TextField value={record?.quantity} />
      <Title level={5}>Reference Code</Title>
      <TextField value={record?.reference_code} />
      <Title level={5}>Billing Customer</Title>
      <TextField value={record?.bill_customer_name} />
      <Title level={5}>Organization Code</Title>
      <TextField value={record?.organization_code} />
    </Show>
  );
};

export default TransactionShow;
