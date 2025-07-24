import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Generate a base64 nonce using Web Crypto API (Edge-compatible)
function generateNonce(): string {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);

  // Manual base64 encoding
  return btoa(String.fromCharCode(...array));
}

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

  const nonce = generateNonce();
  const response = NextResponse.next();

  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "no-referrer");
  // response.headers.set(
  //   "Content-Security-Policy",
  //   `
  //     default-src 'self';
  //     script-src 'self' 'nonce-${nonce}';
  //     style-src 'self' 'unsafe-inline';
  //     font-src 'self' data:;
  //     img-src 'self' data:;
  //     connect-src *;
  //   `
  //     .replace(/\s{2,}/g, " ")
  //     .trim()
  // );
  response.headers.set("x-nonce", nonce); // optional, for use in _document.tsx

  return response;
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|robots.txt|static|api/public).*)"],
};
