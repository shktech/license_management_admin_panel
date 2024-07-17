export const dashboardResources = [
  {
    name: "dashboard",
    list: "/",
    meta: {
      isDashboard: true,
      label: "Dashboard",
    },
  },
  {
    name: "transaction",
    meta: {
      label: "Transaction",
    },
  },
  {
    name: "transactions",
    list: "/transactions",
    create: "/create",
    edit: "/transactions/edit/:id",
    show: "/transactions/show/:id",
    meta: {
      canDelete: true,
      label: "Transaction",
      parent: "transaction",
      warnWhenUnsavedChanges: true,
    },
  },
  {
    name: "collections",
    list: "/transactions/collections",
    meta: {
      parent: "transaction",
      label: "Collection",
      disabled: true,
    },
  },
  {
    name: "mastermgmt",
    meta: {
      label: "Master MGMT",
    },
  },
  {
    name: "assets",
    list: "/master-mgmt/assets",
    create: "/assets/create",
    edit: "/assets/edit/:id",
    show: "/assets/show/:id",
    meta: {
      canDelete: true,
      label: "Assets",
      parent: "mastermgmt",
      warnWhenUnsavedChanges: true,
    },
  },
  {
    name: "products",
    list: "/master-mgmt/products",
    create: "/products/create",
    edit: "/products/edit/:id",
    show: "/products/show/:id",
    meta: {
      canDelete: true,
      label: "Products",
      parent: "mastermgmt",
      warnWhenUnsavedChanges: true,
    },
  },
  {
    name: "partners",
    list: "/master-mgmt/partners",
    meta: {
      label: "Partners",
      parent: "mastermgmt",
      disabled: true,
    },
  },
  {
    name: "maintenance",
    meta: {
      label: "Maintenance",
      disabled: true,
    },
  },
  {
    name: "lookups",
    list: "/maintenance/lookups",
    meta: {
      label: "Lookups",
      parent: "maintenance",
    },
  },
  {
    name: "licensecode",
    list: "/maintenance/license-code",
    meta: {
      label: "License Code",
      parent: "maintenance",
    },
  },
  {
    name: "emailtemplates",
    list: "/maintenance/email-templates",
    meta: {
      label: "Email Templates",
      parent: "maintenance",
    },
  },
  {
    name: "unsubscribe",
    list: "/maintenance/unsubscribe",
    meta: {
      label: "Unsubscribe",
      parent: "maintenance",
    },
  },
  {
    name: "reports",
    meta: {
      label: "Reports",
      disabled: true,
    },
  },
  {
    name: "business",
    list: "/reports/business",
    meta: {
      label: "Business",
      parent: "reports",
    },
  },
  {
    name: "logs",
    list: "/reports/logs",
    meta: {
      label: "Logs",
      parent: "reports",
    },
  },
  {
    name: "scheduleview",
    list: "/reports/schedule-view",
    meta: {
      label: "Schedule View",
      parent: "reports",
    },
  },
  {
    name: "settings",
    meta: {
      label: "Settings",
      disabled: true,
    },
  },
  {
    name: "profile",
    list: "/settings/profile",
    meta: {
      label: "Profile",
      parent: "settings",
    },
  },
  {
    name: "user",
    list: "/settings/user",
    meta: {
      label: "User",
      parent: "settings",
    },
  },
  {
    name: "orgsetup",
    list: "/settings/org-setup",
    meta: {
      label: "Org Setup",
      parent: "settings",
    },
  },
];
