import { mockTransactions } from "./mockData";

const transactions = mockTransactions;

export async function GET(req, res) {
  return new Response(JSON.stringify(transactions));
}
