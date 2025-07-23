import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie";

export async function GET(req: NextRequest) {
  const cookieHeader = req.headers.get("cookie") || "";
  const parsedCookies = cookie.parse(cookieHeader);

  console.log("Cookies:", parsedCookies);

  return NextResponse.json({
    email: parsedCookies.user ? JSON.parse(parsedCookies.user).email : null,
    allCookies: parsedCookies,
  });
}
