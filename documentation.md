
#Documentation For License Manager Dashboard CRUD App

##Overview

This application is a basic CRUD (Create, Read, Update, Delete) app built with Refine JS. It manages the following entities:

	•	Transactions
	•	Assets
	•	Assets Details
	•	Products

Each entity can be created, edited, deleted, and displayed in a table format.

##Entities and Routes

###Transactions

	•	List Transactions: /transactions
	•	Create Transaction: /transactions/create
	•	Edit Transaction: /transactions/edit/:id
	•	Show Transaction: /transactions/show/:id

###Assets

	•	List Assets: /assets
	•	Create Asset: /assets/create
	•	Edit Asset: /assets/edit/:id
	•	Show Asset: /assets/show/:id

###Assets Details

	•	List Asset Details: /assets/:id/assets_details
	•	Create Asset Detail: /assets/show/:id/assets_details/create
	•	Edit Asset Detail: /assets/show/:id/assets_details/edit/:id
	•	Show Asset Detail: /assets/show/:id/assets_details/show/:id

###Products

	•	List Products: /products
	•	Create Product: /products/create
	•	Edit Product: /products/edit/:id
	•	Show Product: /products/show/:id

U##sage

###Adding a New Entity

	1.	Navigate to the relevant entity list page (e.g., /transactions).
	2.	Click the “Create” button.
	3.	Fill in the required fields in the form.
	4.	Click “Save” to create the new entity.

###Editing an Entity

	1.	Navigate to the entity list page.
	2.	Find the entity you want to edit in the table.
	3.	Click the “Edit” button next to the entity.
	4.	Update the fields in the form.
	5.	Click “Save” to apply the changes.

###Viewing an Entity

	1.	Navigate to the entity list page.
	2.	Find the entity you want to view in the table.
	3.	Click the “Show” button next to the entity.
	4.	The details page for the entity will be displayed.

###Deleting an Entity

	1.	Navigate to the entity list page.
	2.	Find the entity you want to delete in the table.
	3.	Click the “Delete” button next to the entity.
	4.	Confirm the deletion in the pop-up dialog.

##Customizing Routes

###Customizing Action Buttons

To customize the actions like edit, show, and delete buttons for routing to specific URLs, you can use the to prop of these buttons.

Example:
```
<Table.Column
    title="Actions"
    dataIndex="actions"
    render={(_, record: BaseRecord) => (
        <Space>
            <EditButton 
                hideText 
                size="small" 
                to={`/custom-edit-url/${record.id}`} 
            />
            <ShowButton 
                hideText 
                size="small" 
                to={`/custom-show-url/${record.id}`} 
            />
            <DeleteButton 
                hideText 
                size="small" 
                to={`/custom-delete-url/${record.id}`} 
            />
        </Space>
    )}
/>
```

###Sidebar Customization

To add custom menu items in the sidebar, modify the CustomSider component.

Example:

```
"use client";
import { ThemedSiderV2 } from "@refinedev/antd";
import { Menu } from "antd";
import Link from "next/link";
import styles from "../styles/CustomSidebar.module.css";

const menuItems = [
  { key: "1", label: <Link href="/transactions">Transactions</Link> },
  { key: "2", label: <Link href="/assets">Assets</Link> },
  { key: "3", label: <Link href="/products">Products</Link> },
];

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
      menuItems={() => <Menu theme="dark" mode="inline" items={menuItems} />}
    />
  );
};

export default CustomSider;
```


##Conclusion

This documentation provides a brief overview of the CRUD functionalities and customization options available in the Refine JS app. You can create, edit, delete, and display various entities with ease and customize the application to suit your specific needs.