"use client";

import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  MarkdownField,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { type BaseRecord, useMany } from "@refinedev/core";
import { Space, Table } from "antd";

const TransactionsList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
    pagination: {
      pageSize: 5,
    },
    sorters: {
      initial: [
        {
          field: "transaction_type",
          order: "asc",
        },
      ],
    },
  });

  const { data: transactionsData, isLoading: transactionsIsLoading } = useMany({
    resource: "transactions",
    ids:
      tableProps?.dataSource
        ?.map((item) => item?.transaction?.transaction_number)
        .filter(Boolean) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="transaction_number">
        <Table.Column dataIndex="transaction_number" title="Transaction #" />
        <Table.Column
          dataIndex="transaction_date"
          title="Transaction Date"
          render={(value) => <DateField value={value} />}
        />
        <Table.Column dataIndex="transaction_type" title="Type" />
        <Table.Column dataIndex="transaction_status" title="Status" />
        <Table.Column dataIndex="license_key" title="License Key" />
        <Table.Column dataIndex="quantity" title="Quantity" />
        <Table.Column dataIndex="reference_code" title="Reference Code" />
        <Table.Column dataIndex="bill_customer_name" title="Billing Customer" />
        <Table.Column dataIndex="organization_code" title="Organization Code" />
        <Table.Column
          title="Actions"
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};

export default TransactionsList;
