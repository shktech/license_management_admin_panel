import { NextRequest, NextResponse } from "next/server";
import { mockTransactions } from "../mockData";

const transactions = mockTransactions;

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const transaction = transactions.find(
    (transaction) => transaction.id === parseInt(params.id)
  );
  return NextResponse.json(transaction);
}
