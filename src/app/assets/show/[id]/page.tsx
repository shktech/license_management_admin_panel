"use client";

import { Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";
import AssetsDetailsList from "./assets_details/AssetsDetailsList";
import AssetsTransactionsList from "@app/assets/AssetsTransactionsList";

const { Title } = Typography;

export default function AssetShow() {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <>
      <Show isLoading={isLoading} title="Asset (Asset Details Below)">
        <Title level={5}>ID</Title>
        <TextField value={record?.id} />
        <Title level={5}>Active Seats</Title>
        <TextField value={record?.active_seats} />
        <Title level={5}>Created By</Title>
        <TextField value={record?.created_by} />
        <Title level={5}>Creation Date</Title>
        <TextField value={record?.creation_date} />
        <Title level={5}>Duration</Title>
        <TextField value={record?.duration} />
        <Title level={5}>Enabled Flag</Title>
        <TextField value={record?.enabled_flag} />
        <Title level={5}>End Date</Title>
        <TextField value={record?.end_date} />
        <Title level={5}>Expired Seats</Title>
        <TextField value={record?.expired_seats} />
        <Title level={5}>Last Update Date</Title>
        <TextField value={record?.last_update_date} />
        <Title level={5}>Last Update Status Date</Title>
        <TextField value={record?.last_update_status_date} />
        <Title level={5}>Last Updated By</Title>
        <TextField value={record?.last_updated_by} />
        <Title level={5}>License Key</Title>
        <TextField value={record?.license_key} />
        <Title level={5}>License Server Seat Count</Title>
        <TextField value={record?.license_server_seat_count} />
        <Title level={5}>OCS Part ID</Title>
        <TextField value={record?.ocs_part_id} />
        <Title level={5}>Organization Code</Title>
        <TextField value={record?.organization_code} />
        <Title level={5}>OSC Part Number</Title>
        <TextField value={record?.osc_part_number} />
        <Title level={5}>OSC Seat Count</Title>
        <TextField value={record?.osc_seat_count} />
        <Title level={5}>Renewal Seats</Title>
        <TextField value={record?.renewal_seats} />
        <Title level={5}>Revoked Seats</Title>
        <TextField value={record?.revoked_seats} />
        <Title level={5}>Ship Customer Account</Title>
        <TextField value={record?.ship_customer_account} />
        <Title level={5}>Ship Customer ID</Title>
        <TextField value={record?.ship_customer_id} />
        <Title level={5}>Ship Customer Name</Title>
        <TextField value={record?.ship_customer_name} />
        <Title level={5}>Start Date</Title>
        <TextField value={record?.start_date} />
        <Title level={5}>Suspended Seats</Title>
        <TextField value={record?.suspended_seats} />
        <Title level={5}>Terminated Seats</Title>
        <TextField value={record?.terminated_seats} />
        <Title level={5}>Transaction Date</Title>
        <TextField value={record?.transaction_date} />
        <Title level={5}>Transaction Number</Title>
        <TextField value={record?.transaction_number} />
        <Title level={5}>Vendor Name</Title>
        <TextField value={record?.vendor_name} />
        <Title level={5}>Vendor Part Number</Title>
        <TextField value={record?.vendor_part_number} />
      </Show>
      <div style={{ height: 30 }} />
      <AssetsDetailsList />
      <AssetsTransactionsList />
    </>
  );
}
