import { mockAssetsDetails } from "./mockData";

const assetsDetails = mockAssetsDetails;

export async function GET(req: any, res: any) {
  return new Response(JSON.stringify(assetsDetails));
}

export async function POST(req: any, res: any) {
  const newAssetDetail = req.body;
  assetsDetails.push(newAssetDetail);
  return new Response(JSON.stringify(newAssetDetail));
}
