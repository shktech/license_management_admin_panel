export const dashboardResources = [
  {
    name: "transactions",
    list: "/transactions",
    create: "/create",
    edit: "/transactions/edit/:id",
    show: "/transactions/show/:id",
    meta: {
      canDelete: true,
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
    },
  },
];
