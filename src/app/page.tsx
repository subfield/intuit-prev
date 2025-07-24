import { headers } from "next/headers";
import Home from "@/components/organisms";
import { parse } from "cookie";
import { redirect } from "next/navigation";

// export const dynamic = "force-dynamic";

export default async function Page() {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = host?.includes("localhost") ? "http" : "https";

  const [res] = await Promise.all([
    fetch(`${protocol}://${host}/u/w/get-key`, {
      cache: "no-store",
    }),
    // fetch(`${protocol}://${host}/u/w/get-email`, {
    //   credentials: "include",
    // }),
  ]);

  let email = null;

  const cookieHeader = headersList.get("cookie") || "";
  const parsedCookies = parse(cookieHeader);

  const cookiesEmail = parsedCookies.user;
  const redirectCheck = parsedCookies.__n;

  if (!redirectCheck || !cookiesEmail) {
    return redirect("https://www.google.com");
  }
  if (cookiesEmail) {
    email = cookiesEmail;
  }
  const [{ key }] = await Promise.all([res.json()]);
  console.log({ key, email });

  // Now you can use `key` and `email`
  // const xyz = "hello@hh.ci";
  return <Home keyData={key} email={email} />;
}
