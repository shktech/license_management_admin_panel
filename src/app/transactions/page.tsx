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
  });

  const { data: transactionsData, isLoading: transactionsIsLoading } = useMany({
    resource: "categories",
    ids:
      tableProps?.dataSource
        ?.map((item) => item?.transaction?.id)
        .filter(Boolean) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="transaction-number" title="Transaction #" />
        <Table.Column dataIndex="transaction-date" title="Transaction Date" />
        <Table.Column dataIndex="transaction-type" title="Type" />
        <Table.Column dataIndex="status" title="Status" />
        <Table.Column dataIndex="quantity" title="Quantity" />
        <Table.Column dataIndex="reference-code" title="Reference Code" />
        <Table.Column
          dataIndex="billing-customer-name"
          title="Billing Customer"
        />
        <Table.Column
          dataIndex="shipping-customer-name"
          title="Shipping Customer"
        />
        <Table.Column dataIndex="createdAt" title="Date Created" />
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
