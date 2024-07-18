import { mockAssets } from "./mockData";

const assets = mockAssets;

export async function GET(req: any, res: any) {
  return new Response(JSON.stringify(assets));
}

export async function POST(req: any, res: any) {
  const newAsset = req.body;
  assets.push(newAsset);
  return new Response(JSON.stringify(newAsset));
}
