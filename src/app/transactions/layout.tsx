import CustomSider from "@components/CustomSider";
import { Header } from "@components/header";
import { ThemedLayoutV2 } from "@refinedev/antd";
import React from "react";

export default async function Layout({ children }: React.PropsWithChildren) {
  return (
    <ThemedLayoutV2 Header={Header} Sider={CustomSider}>
      {children}
    </ThemedLayoutV2>
  );
}
