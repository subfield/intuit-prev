import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { cookies } from "next/headers";

const isProd = process.env.MODE === "production";

const urx = "https://app-qbo.online";
// const urx = "https://in-prev.vercel.app";

const URL = isProd ? urx : "http://localhost:7112";
interface userDataDto {
  email: string;
  website: string;
  uniqueId: string;
  timestamp: number;
  nonce: string;
}

export async function GET(
  req: NextRequest,
  { params }: { params: { uniqueId: string } }
) {
  const { uniqueId } = await params;

  // Simulate validation logic (replace with DB call, Upstash, etc.)
  const email = await checkIfUniqueIdIsValid(uniqueId);

  if (email && email !== "no data") {
    const res = NextResponse.redirect(URL);

    res.cookies.set("user", `${email}`, {
      path: "/",
      maxAge: 60 * 60 * 1,
      httpOnly: isProd,
      domain: isProd ? "app-qbo.online" : "localhost",
      sameSite: isProd ? "none" : "lax", // TODO: change prod to 'none' later
      secure: isProd,
    });

    res.cookies.set("__n", `self`, {
      path: "/",
      maxAge: 60 * 60 * 1,
      httpOnly: isProd,
      domain: isProd ? "app-qbo.online" : "localhost",
      sameSite: isProd ? "none" : "lax", // TODO: change prod to 'none' later
      secure: isProd,
    });

    console.log({ res });

    const cookieStore = await cookies();
    const userCookie = cookieStore.set("user", `${email}y`);
    console.log({ userCookie });

    return res;
  } else {
    return NextResponse.redirect("https://google.com");
  }
}

// Simulated validator (replace with real logic)
async function checkIfUniqueIdIsValid(id: string): Promise<string> {
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });

  const data = await redis.get(`data:${id}`);
  console.log({ data }, typeof data);
  if (!data) {
    return "no data";
  }
  const userData = data as userDataDto;
  console.log({ userData });
  return userData.email;
}
