import { useTable, List, DateField } from "@refinedev/antd";
import { Table } from "antd";
import { useParams } from "next/navigation";

const AssetsTransactionsList = () => {
  const { id } = useParams();
  const { tableProps } = useTable({
    syncWithLocation: true,
    resource: `assets/${id}/transactions`,
  });

  return (
    <List title="Asset Transactions" breadcrumb={null} headerButtons={<></>}>
      <Table {...tableProps} rowKey="id">
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
      </Table>
    </List>
  );
};

export default AssetsTransactionsList;
