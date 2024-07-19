import {
  BuildOutlined,
  ContactsOutlined,
  DashboardOutlined,
  DatabaseOutlined,
  FileProtectOutlined,
  FileSearchOutlined,
  FileTextOutlined,
  FolderViewOutlined,
  MailOutlined,
  MoneyCollectFilled,
  MonitorOutlined,
  ProductOutlined,
  ScheduleOutlined,
  SettingOutlined,
  SubnodeOutlined,
  TransactionOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";

export const dashboardResources = [
  {
    name: "dashboard",
    list: "/home",
    meta: {
      isDashboard: true,
      label: "Dashboard",
      icon: <DashboardOutlined />,
    },
  },
  {
    name: "transaction",
    meta: {
      label: "Transaction",
      icon: <TransactionOutlined />,
    },
  },
  {
    name: "transactions",
    list: "/transactions",
    create: "/transactions/create",
    edit: "/transactions/edit/:id",
    show: "/transactions/show/:id",
    meta: {
      canDelete: true,
      label: "Transactions",
      parent: "transaction",
      warnWhenUnsavedChanges: true,
      icon: <TransactionOutlined />,
    },
  },
  {
    name: "collections",
    list: "/transactions/collections",
    meta: {
      parent: "transaction",
      label: "Collection",
      disabled: true,
      hide: true,
      icon: <MoneyCollectFilled />,
    },
  },
  {
    name: "mastermgmt",
    meta: {
      label: "Master MGMT",
      icon: <DatabaseOutlined />,
    },
  },
  {
    name: "assets",
    list: "/assets",
    create: "/assets/create",
    edit: "/assets/edit/:id",
    show: "/assets/show/:id",
    meta: {
      canDelete: true,
      label: "Assets",
      parent: "mastermgmt",
      warnWhenUnsavedChanges: true,
      icon: <BuildOutlined />,
    },
  },
  {
    name: "assets_details",
    list: "/assets/show/:id",
    create: "/assets/show/:id/assets_details/create",
    edit: "/assets/show/:id/assets_details/edit/:id",
    show: "/assets/show/:id/assets_details/show/:id",
    meta: {
      canDelete: true,
      label: "Assets Details",
      parent: "assets",
      hide: true,
      warnWhenUnsavedChanges: true,
    },
  },
  {
    name: "products",
    list: "/products",
    create: "/products/create",
    edit: "/products/edit/:id",
    show: "/products/show/:id",
    meta: {
      canDelete: true,
      label: "Products",
      parent: "mastermgmt",
      warnWhenUnsavedChanges: true,
      icon: <ProductOutlined />,
    },
  },
  {
    name: "partners",
    list: "/partners",
    meta: {
      label: "Partners",
      parent: "mastermgmt",
      disabled: true,
      hide: true,
      icon: <UsergroupAddOutlined />,
    },
  },
  {
    name: "maintenance",
    meta: {
      label: "Maintenance",
      disabled: true,
      hide: true,
    },
  },
  {
    name: "lookups",
    list: "/maintenance/lookups",
    meta: {
      label: "Lookups",
      parent: "maintenance",
      icon: <FolderViewOutlined />,
    },
  },
  {
    name: "licensecode",
    list: "/maintenance/license-code",
    meta: {
      label: "License Code",
      parent: "maintenance",
      icon: <FileTextOutlined />,
    },
  },
  {
    name: "emailtemplates",
    list: "/maintenance/email-templates",
    meta: {
      label: "Email Templates",
      parent: "maintenance",
      icon: <MailOutlined />,
    },
  },
  {
    name: "unsubscribe",
    list: "/maintenance/unsubscribe",
    meta: {
      label: "Unsubscribe",
      parent: "maintenance",
      icon: <SubnodeOutlined />,
    },
  },
  {
    name: "reports",
    meta: {
      label: "Reports",
      disabled: true,
      hide: true,
      icon: <FileSearchOutlined />,
    },
  },
  {
    name: "business",
    list: "/reports/business",
    meta: {
      label: "Business",
      parent: "reports",
      icon: <FileProtectOutlined />,
    },
  },
  {
    name: "logs",
    list: "/reports/logs",
    meta: {
      label: "Logs",
      parent: "reports",
      icon: <MonitorOutlined />,
    },
  },
  {
    name: "scheduleview",
    list: "/reports/schedule-view",
    meta: {
      label: "Schedule View",
      parent: "reports",
      icon: <ScheduleOutlined />,
    },
  },
  {
    name: "settings",
    meta: {
      label: "Settings",
      disabled: true,
      hide: true,
      icon: <SettingOutlined />,
    },
  },
  {
    name: "profile",
    list: "/settings/profile",
    meta: {
      label: "Profile",
      parent: "settings",
      icon: <UserSwitchOutlined />,
    },
  },
  {
    name: "user",
    list: "/settings/user",
    meta: {
      label: "User",
      parent: "settings",
      icon: <UserOutlined />,
    },
  },
  {
    name: "orgsetup",
    list: "/settings/org-setup",
    meta: {
      label: "Org Setup",
      parent: "settings",
      icon: <ContactsOutlined />,
    },
  },
];
