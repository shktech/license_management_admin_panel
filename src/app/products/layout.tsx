import { Header } from "@components/header";
import CustomSider from "@components/sider/CustomSider";
import { ThemedLayoutV2 } from "@refinedev/antd";
import React from "react";

export default async function Layout({ children }: React.PropsWithChildren) {
  return (
    <ThemedLayoutV2 Header={Header} Sider={CustomSider}>
      {children}
    </ThemedLayoutV2>
  );
}
