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
    resource: "transactions",
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
        <Table.Column dataIndex="transaction_number" title="Transaction #" />
        <Table.Column dataIndex="transaction_date" title="Transaction Date" />
        <Table.Column dataIndex="transaction_type" title="Type" />
        <Table.Column dataIndex="transaction_status" title="Status" />
        <Table.Column dataIndex="quantity" title="Quantity" />
        <Table.Column dataIndex="reference_code" title="Reference Code" />
        <Table.Column dataIndex="bill_customer_name" title="Billing Customer" />
        <Table.Column
          dataIndex="ship_customer_name"
          title="Shipping Customer"
        />
        <Table.Column dataIndex="creation_date" title="Date Created" />
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
