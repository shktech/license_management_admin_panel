"use client";
import { Form } from "antd";
import { useParams } from "next/navigation";
import AssetsDetailsFormItems from "../../AssetsDetailsFormItems";
import { Edit, ListButton, RefreshButton, useForm } from "@refinedev/antd";
import dayjs from "dayjs";
import { Navigate } from "react-router-dom";

const EditAssetDetailsPage = () => {
  const { id, detailid } = useParams();
  const { formProps, saveButtonProps, queryResult } = useForm({
    resource: `assets/${id}/assets_details`,
    id: detailid.toString(),
    action: "edit",
  });

  const formInit = {
    ...queryResult?.data?.data,
    creation_date: dayjs(),
    end_date: dayjs(),
    last_update_date: dayjs(),
    start_date: dayjs(),
    transaction_date: dayjs(),
  };

  if (queryResult?.isLoading) return <div>Loading...</div>;

  return (
    <Edit
      saveButtonProps={saveButtonProps}
      deleteButtonProps={{
        recordItemId: detailid.toString(),
        resource: `assets/${id}/assets_details`,
        meta: { assetid: id },
        onSuccess: () => window.location.replace(`/assets/show/${id}`),
      }}
      headerButtons={({ listButtonProps, refreshButtonProps }) => (
        <>
          <ListButton
            {...listButtonProps}
            meta={{ id }}
            resource={`assets_details`}
          />
          <RefreshButton {...refreshButtonProps} />
        </>
      )}
    >
      <Form {...formProps} layout="vertical" initialValues={formInit}>
        <AssetsDetailsFormItems isEditing />
      </Form>
    </Edit>
  );
};

export default EditAssetDetailsPage;
