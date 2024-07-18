"use client";

import { Create, useForm } from "@refinedev/antd";
import TransactionFormItems from "../TransactionFormItems";
import { Form } from "antd";

export default function BlogPostCreate() {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <TransactionFormItems />
      </Form>
    </Create>
  );
}
