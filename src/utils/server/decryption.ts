import crypto from "crypto";

export const decryptClientToObject = (
  encrypted: string,
  key: string
): object => {
  // Derive AES-256 key using SHA256
  const hashedKey = crypto.createHash("sha256").update(key).digest(); // 32 bytes

  const iv = Buffer.alloc(16, 0); // same as client

  const decipher = crypto.createDecipheriv("aes-256-cbc", hashedKey, iv);

  let decrypted = decipher.update(encrypted, "base64");
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return JSON.parse(decrypted.toString("utf8"));
};
