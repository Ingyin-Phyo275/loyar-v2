// /lib/crypto.ts
import crypto from "crypto";

const SECRET_KEY = Buffer.from("12345678901234567890123456789012");

export function decryptData(
  encryptedBase64: string,
  ivBase64: string
): string {
  const encryptedBuffer = Buffer.from(encryptedBase64, "base64");
  const iv = Buffer.from(ivBase64, "base64");

  const decipher = crypto.createDecipheriv(
    "aes-256-gcm",
    SECRET_KEY,
    iv
  );

  // AES-GCM: last 16 bytes = authTag
  const authTag = encryptedBuffer.slice(-16);
  const ciphertext = encryptedBuffer.slice(0, -16);

  decipher.setAuthTag(authTag);

  let decrypted = decipher.update(ciphertext);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString("utf8");
}