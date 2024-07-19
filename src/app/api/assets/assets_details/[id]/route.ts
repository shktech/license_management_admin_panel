import { NextRequest, NextResponse } from "next/server";
import { mockAssetsDetails } from "../mockData";

const assetsDetails = mockAssetsDetails;

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const assetDetails = assetsDetails.find((asset) => asset.id === params.id);
  return NextResponse.json(assetDetails);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const updatedAssetDetails = req.body as any;
  const index = assetsDetails.findIndex((asset) => asset.id === params.id);
  assetsDetails[index] = updatedAssetDetails;
  return NextResponse.json(updatedAssetDetails);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const index = assetsDetails.findIndex((asset) => asset.id === params.id);
  assetsDetails.splice(index, 1);
  return NextResponse.json({ id: +params.id });
}
