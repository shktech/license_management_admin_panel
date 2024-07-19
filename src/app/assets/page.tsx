"use client";

import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import type { BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";

export default function AssetsList() {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="active_seats" title="Active Seats" />
        <Table.Column dataIndex="vendor_name" title="Vendor Name" />
        <Table.Column dataIndex="ship_customer_name" title="Customer Name" />
        <Table.Column dataIndex="license_key" title="License Key" />
        <Table.Column dataIndex="organization_code" title="Organization Code" />
        <Table.Column
          dataIndex="transaction_number"
          title="Transaction Number"
        />
        <Table.Column dataIndex="transaction_date" title="Transaction Date" />
        <Table.Column dataIndex="start_date" title="Start Date" />
        <Table.Column dataIndex="end_date" title="End Date" />
        <Table.Column dataIndex="active_seats" title="Active Seats" />
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
}
