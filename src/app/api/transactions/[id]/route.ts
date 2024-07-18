import { NextRequest, NextResponse } from "next/server";
import { mockTransactions } from "../mockData";

const transactions = mockTransactions;

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const transaction = transactions.find(
    (transaction) => transaction.id === params.id
  );
  return NextResponse.json(transaction);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const updatedTransaction = req.body as any;
  const index = transactions.findIndex(
    (transaction) => transaction.id === params.id
  );
  transactions[index] = updatedTransaction;
  return NextResponse.json(updatedTransaction);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const index = transactions.findIndex(
    (transaction) => transaction.id === params.id
  );
  transactions.splice(index, 1);
  return NextResponse.json({ id: +params.id });
}
