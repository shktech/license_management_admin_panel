import { NextRequest } from "next/server";
import { mockTransactions } from "@app/api/transactions/mockData";
import { mockAssets } from "../../mockData";

const transactions = mockTransactions;
const assets = mockAssets;

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const assetId = params.id;
  const asset = assets.find((asset) => asset.id === assetId);
  const assetTransactions = transactions.filter(
    (transaction) =>
      asset?.transaction_number === transaction.transaction_number
  );
  return new Response(JSON.stringify(assetTransactions));
}
