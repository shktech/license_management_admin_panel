"use client";
import { ThemedSiderV2 } from "@refinedev/antd";
import styles from "../styles/CustomSidebar.module.css";

const CustomSider = () => {
  return (
    <ThemedSiderV2
      fixed
      Title={() => (
        <div className={styles.sidebarTitle}>
          <div className={styles.sidebarLogo} />
          <h4>License Manager</h4>
        </div>
      )}
    />
  );
};

export default CustomSider;
