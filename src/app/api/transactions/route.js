import { mockTransactions } from "./mockData";

const transactions = mockTransactions;

export async function GET(req, res) {
  return new Response(JSON.stringify(transactions));
}

export async function POST(req, res) {
  const newTransaction = req.body;
  transactions.push(newTransaction);
  return new Response(JSON.stringify(newTransaction));
}

export async function PUT(req, res) {
  const updatedTransaction = req.body;
  const index = transactions.findIndex(
    (transaction) => transaction.id === updatedTransaction.id
  );
  transactions[index] = updatedTransaction;
  return new Response(JSON.stringify(updatedTransaction));
}

export async function DELETE(req, res) {
  const id = req.params.id;
  const index = transactions.findIndex((transaction) => transaction.id === id);
  const deletedTransaction = transactions[index];
  transactions.splice(index, 1);
  return new Response(JSON.stringify(deletedTransaction));
}
