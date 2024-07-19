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

export default function ProductsList() {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column title="Attribute1" dataIndex="attribute1" />
        <Table.Column title="Creation Date" dataIndex="creation_date" />
        <Table.Column title="License Src Set" dataIndex="license_source_set" />
        <Table.Column title="Organization Code" dataIndex="organization_code" />
        <Table.Column title="Product ID" dataIndex="product_id" />
        <Table.Column
          title="Product Description"
          dataIndex="product_description"
        />
        <Table.Column title="Product Name" dataIndex="product_name" />
        <Table.Column title="Vendor Name" dataIndex="vendor_name" />
        <Table.Column
          title={"Actions"}
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
