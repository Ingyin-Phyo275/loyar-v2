// app/api/decrypt/route.ts
import { NextResponse } from "next/server";
import { decryptData } from "@/lib/crypto";

export async function POST(req: Request) {
  const { data, iv } = await req.json();
  try {
    const decryptedString = decryptData(data, iv);
    return NextResponse.json({ decrypted: JSON.parse(decryptedString) });
  } catch {
    return NextResponse.json({ error: "Invalid or tampered data" }, { status: 400 });
  }
}