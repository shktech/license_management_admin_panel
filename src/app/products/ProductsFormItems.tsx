import { DatePicker, Form, Input } from "antd";

interface ProductsFormItemsProps {
  isEditing?: boolean;
}

const ProductsFormItems = ({ isEditing }: ProductsFormItemsProps) => {
  return (
    <>
      <Form.Item
        label="Attribute 1"
        name="attribute1"
        rules={[{ required: true, max: 200 }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Attribute 2" name="attribute2" rules={[{ max: 200 }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Attribute 3" name="attribute3" rules={[{ max: 200 }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Attribute 4" name="attribute4" rules={[{ max: 200 }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Attribute 5" name="attribute5" rules={[{ max: 200 }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Created By"
        name="created_by"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Creation Date"
        name="creation_date"
        rules={[{ required: true }]}
      >
        <DatePicker
          style={{ width: "100%" }}
          format={"YYYY-MM-DD"}
          disabled={isEditing}
        />
      </Form.Item>

      <Form.Item
        label="Duration"
        name="duration"
        rules={[{ required: true, max: 100 }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Enabled Flag"
        name="enabled_flag"
        rules={[{ required: true, max: 1 }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Eval Set Name"
        name="eval_set_name"
        rules={[{ required: true, max: 100 }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Update Date"
        name="last_update_date"
        rules={[{ required: true }]}
      >
        <DatePicker style={{ width: "100%" }} format={"YYYY-MM-DD"} />
      </Form.Item>

      <Form.Item
        label="Last Updated By"
        name="last_updated_by"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="License Source Set"
        name="license_source_set"
        rules={[{ required: true, max: 100 }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="New Set Name"
        name="new_set_name"
        rules={[{ required: true, max: 100 }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Organization Code"
        name="organization_code"
        rules={[{ required: true, max: 5 }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="OSC Product ID"
        name="osc_product_id"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Product Description"
        name="product_description"
        rules={[{ required: true, max: 1000 }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Product ID"
        name="product_id"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Product Name"
        name="product_name"
        rules={[{ required: true, max: 100 }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Renewal Set Name"
        name="renewal_set_name"
        rules={[{ required: true, max: 100 }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Source Name"
        name="source_name"
        rules={[{ required: true, max: 200 }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Vendor Name"
        name="vendor_name"
        rules={[{ required: true, max: 100 }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Vendor Part Number"
        name="vendor_part_number"
        rules={[{ required: true, max: 100 }]}
      >
        <Input />
      </Form.Item>
    </>
  );
};

export default ProductsFormItems;
