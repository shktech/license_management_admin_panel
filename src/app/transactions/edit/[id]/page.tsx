"use client";
import TransactionFormItems from "@app/transactions/TransactionFormItems";
import { Edit, useForm } from "@refinedev/antd";
import { Form } from "antd";
import dayjs from "dayjs";

const TransactionEdit = () => {
  const { formProps, saveButtonProps, queryResult } = useForm({});

  const formInit = {
    ...queryResult?.data?.data,
    transaction_date: dayjs(),
    creation_date: dayjs(),
    last_update_date: dayjs(),
    notification_date: dayjs(),
    source_reference_date: dayjs(),
    start_date: dayjs(),
    end_date: dayjs(),
  };

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical" initialValues={formInit}>
        <TransactionFormItems isEditing />
      </Form>
    </Edit>
  );
};

export default TransactionEdit;
