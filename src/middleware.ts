import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const userAgent = req.headers.get("user-agent")?.toLowerCase() || "";
  const referer = req.headers.get("referer") || "";
  const allowedHost = req.nextUrl.origin;

  const blockedAgents = [
    "curl",
    "wget",
    "python",
    "scrapy",
    "axios",
    "go-http-client",
    "httpclient",
    "libwww",
    "java",
    "node-fetch",
    "postmanruntime",
    "powershell",
  ];

  const isBot = blockedAgents.some((agent) => userAgent.includes(agent));
  const isBadReferer = referer && !referer.startsWith(allowedHost);

  if (isBot || isBadReferer) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const response = NextResponse.next();

  // Add security headers
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "no-referrer");
  response.headers.set("Content-Security-Policy", "default-src 'self'");

  return response;
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|robots.txt|static|api/public).*)"], // exclude public assets and safe APIs
};
