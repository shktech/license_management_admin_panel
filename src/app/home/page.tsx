import Dashbox from "@components/ui/DashboardCard";
import styles from "../../styles/Dashboard.module.css";
import {
  BuildOutlined,
  FileTextOutlined,
  ProductOutlined,
  TransactionOutlined,
} from "@ant-design/icons";

const Dashboard = () => {
  return (
    <section className={styles.dashboardPage}>
      <Dashbox
        icon={<FileTextOutlined style={{ fontSize: 40, color: "#fff" }} />}
        name="Licenses"
        value="125"
        sublabel="This Year"
      />
      <Dashbox
        icon={<TransactionOutlined style={{ fontSize: 40, color: "#fff" }} />}
        name="Transactions"
        value="450"
        sublabel="This Month"
      />
      <Dashbox
        icon={<ProductOutlined style={{ fontSize: 40, color: "#fff" }} />}
        name="Products"
        value="85"
        sublabel="This Month"
      />
      <Dashbox
        icon={<BuildOutlined style={{ fontSize: 40, color: "#fff" }} />}
        name="Assets"
        value="75"
        sublabel="This Month"
      />
    </section>
  );
};

export default Dashboard;
