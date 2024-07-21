"use client";

import { Create, SaveButton, useForm } from "@refinedev/antd";
import { Form } from "antd";
import AssetsDetailsFormItems from "../AssetsDetailsFormItems";
import { useParams } from "next/navigation";

export default function CreateAssetDetailPage() {
  const { id } = useParams();
  const { formProps, saveButtonProps, queryResult } = useForm({
    resource: `assets/${id}/assets_details`,
    id: id.toString(),
    action: "create",
    onMutationSuccess: () => {
      window.location.href = `/assets/show/${id}`;
    },
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <AssetsDetailsFormItems />
      </Form>
    </Create>
  );
}
