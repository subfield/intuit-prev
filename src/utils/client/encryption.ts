import CryptoJS from "crypto-js";

export const encryptObject = (data: object, key: string): string => {
  const jsonString = JSON.stringify(data);

  // Derive AES-256 key using SHA256
  const hashedKey = CryptoJS.SHA256(key).toString(CryptoJS.enc.Hex);

  // Use fixed IV (16 zero bytes)
  const iv = CryptoJS.enc.Hex.parse("00000000000000000000000000000000");

  const encrypted = CryptoJS.AES.encrypt(
    jsonString,
    CryptoJS.enc.Hex.parse(hashedKey),
    {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }
  );

  return encrypted.toString(); // base64 output
};

export const decryptString = (encrypted: string, key: string): string => {
  const bytes = CryptoJS.AES.decrypt(encrypted, key);
  return bytes.toString(CryptoJS.enc.Utf8); // returns string
};
