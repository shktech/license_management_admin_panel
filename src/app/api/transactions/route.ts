import { mockTransactions } from "./mockData";

const transactions = mockTransactions;

export async function GET(req: any, res: any) {
  return new Response(JSON.stringify(transactions));
}

export async function POST(req: any, res: any) {
  const newTransaction = req.body;
  transactions.push(newTransaction);
  return new Response(JSON.stringify(newTransaction));
}
