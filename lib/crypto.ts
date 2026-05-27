"use client"
import crypto from "crypto";

// Must be 32 bytes for AES-256
let SECRET_KEY: Buffer | null = null;

function getSecretKey(): Buffer {
  if (SECRET_KEY) return SECRET_KEY;

  if (!process.env.NEXT_SECRET_KEY) {
    throw new Error("NEXT_SECRET_KEY is missing");
  }

  SECRET_KEY = Buffer.from(process.env.NEXT_SECRET_KEY, "utf8");
  if (SECRET_KEY.length !== 32) {
    throw new Error(`Invalid key length: ${SECRET_KEY.length}`);
  }

  return SECRET_KEY;
}
export function decryptData(encryptedBase64: string, ivBase64: string): string {
  // Convert Base64 strings to buffers
  const encryptedBuffer = Buffer.from(encryptedBase64, "base64");
  const iv = Buffer.from(ivBase64, "base64");

  // AES-GCM: last 16 bytes = authTag
  const authTag = encryptedBuffer.slice(-16);
  const ciphertext = encryptedBuffer.slice(0, -16);

  const decipher = crypto.createDecipheriv("aes-256-gcm", getSecretKey(), iv);
  decipher.setAuthTag(authTag);

  let decrypted = decipher.update(ciphertext);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString("utf8");
}

/**
 * Optional helper: encrypts JSON data for testing purposes
 */
export function encryptData(obj: any): { data: string; iv: string } {
  const jsonData = JSON.stringify(obj);
  const iv = crypto.randomBytes(12);

  const cipher = crypto.createCipheriv("aes-256-gcm", getSecretKey(), iv);
  let encrypted = cipher.update(jsonData, "utf8");
  encrypted = Buffer.concat([encrypted, cipher.final()]);

  const authTag = cipher.getAuthTag();
  const encryptedWithTag = Buffer.concat([encrypted, authTag]);

  return {
    data: encryptedWithTag.toString("base64"),
    iv: iv.toString("base64"),
  };
}