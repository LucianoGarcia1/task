import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  // Remover o cookie de autenticação
  response.cookies.delete("token");
  return response;
}
