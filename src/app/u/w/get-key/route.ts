import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json({
    key: process.env.SECRET_KEY,
  });
}
