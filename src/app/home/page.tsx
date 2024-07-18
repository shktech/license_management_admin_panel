"use client";
import Dashbox from "@components/ui/DashboardCard";
import styles from "../../styles/Dashboard.module.css";
import {
  BuildOutlined,
  FileTextOutlined,
  TransactionOutlined,
} from "@ant-design/icons";
import TransactionsList from "@app/transactions/TransactionsList";
import { useTable } from "@refinedev/antd";

const Dashboard = () => {
  const { tableProps } = useTable({
    resource: "transactions",
    pagination: {
      pageSize: 5,
    },
  });

  return (
    <main className={styles.dashboardPage}>
      <section className={styles.dashboardCardsGrid}>
        <Dashbox
          icon={<BuildOutlined style={{ fontSize: 38, color: "#fff" }} />}
          name="Assets"
          value="75"
          sublabel="This Year"
        />
        <Dashbox
          icon={<BuildOutlined style={{ fontSize: 38, color: "#fff" }} />}
          name="Expired Assets"
          value="15"
          sublabel="This Year"
        />
        <Dashbox
          icon={<FileTextOutlined style={{ fontSize: 38, color: "#fff" }} />}
          name="Licenses"
          value="125"
          sublabel="This Month"
        />
        <Dashbox
          icon={<TransactionOutlined style={{ fontSize: 38, color: "#fff" }} />}
          name="Transactions"
          value="450"
          sublabel="This Month"
        />
      </section>
      <section className={styles.recentTransactions}>
        <TransactionsList
          tableTitle="Recent Transactions"
          tableProps={tableProps}
        />
      </section>
    </main>
  );
};

export default Dashboard;
