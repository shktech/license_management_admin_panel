import { v4 as uuidv4 } from "uuid";
import { mockTransactions } from "./mockData";

const transactions = mockTransactions;

export async function GET(req: any, res: any) {
  return new Response(JSON.stringify(transactions));
}

export async function POST(req: any, res: any) {
  const newTransaction = req.body;
  const randomId = uuidv4();
  const newTransactionWithId = { ...newTransaction, id: randomId };
  transactions.push(newTransactionWithId);
  return new Response(JSON.stringify(newTransactionWithId));
}
