"use client";
import { useTable } from "@refinedev/antd";
import TransactionsList from "./TransactionsList";

const TransactionsPage = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
    pagination: {
      pageSize: 7,
    },
  });

  return <TransactionsList tableTitle="Transactions" tableProps={tableProps} />;
};

export default TransactionsPage;
