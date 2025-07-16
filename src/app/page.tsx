import { headers } from "next/headers";
import Home from "@/components/organisms";

export default async function Page() {
  const headersList = await headers(); 
  const host = headersList.get("host");
  const protocol = host?.includes("localhost") ? "http" : "https";

  const res = await fetch(`${protocol}://${host}/api/get-key`, {
    cache: "no-store",
  });
  const { key } = await res.json();

  return <Home keyData={key} />;
}
