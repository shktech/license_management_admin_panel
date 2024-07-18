"use client";

import { Edit, useForm } from "@refinedev/antd";
import { DatePicker, Form, Input } from "antd";
import dayjs from "dayjs";

export default function CategoryEdit() {
  const { formProps, saveButtonProps, queryResult } = useForm({});

  const formInit = {
    ...queryResult?.data?.data,
    creation_date: dayjs(),
    last_update_date: dayjs(),
  };

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical" initialValues={formInit}>
        <Form.Item
          label="Attribute 1"
          name="attribute1"
          rules={[{ required: true, max: 200 }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Attribute 2"
          name="attribute2"
          rules={[{ required: true, max: 200 }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Attribute 3"
          name="attribute3"
          rules={[{ required: true, max: 200 }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Attribute 4"
          name="attribute4"
          rules={[{ required: true, max: 200 }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Attribute 5"
          name="attribute5"
          rules={[{ required: true, max: 200 }]}
        >
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
          <DatePicker style={{ width: "100%" }} format={"YYYY-MM-DD"} />
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
      </Form>
    </Edit>
  );
}
