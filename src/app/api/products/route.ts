import { mockProducts } from "./mockData";

const products = mockProducts;

export async function GET(req: any, res: any) {
  return new Response(JSON.stringify(products));
}

export async function POST(req: any, res: any) {
  const newProduct = req.body;
  products.push(newProduct);
  return new Response(JSON.stringify(newProduct));
}
