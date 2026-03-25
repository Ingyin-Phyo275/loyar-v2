// generatePaymentUrl.js
import crypto from "crypto";

const SECRET_KEY = Buffer.from("12345678901234567890123456789012"); // 32 bytes

const paymentData = {
  tradeType: "Buy",
  amount: 100,
  paymentType: "Card",
  userType: "Regular",
  userId: "user123",
};

const jsonData = JSON.stringify(paymentData);

// Generate random IV
const iv = crypto.randomBytes(12);

const cipher = crypto.createCipheriv("aes-256-gcm", SECRET_KEY, iv);

let encrypted = cipher.update(jsonData, "utf8");
encrypted = Buffer.concat([encrypted, cipher.final()]);

// Get auth tag
const authTag = cipher.getAuthTag();

// Append authTag to encrypted
const encryptedWithTag = Buffer.concat([encrypted, authTag]);

// Encode to Base64
const dataBase64 = encryptedWithTag.toString("base64");
const ivBase64 = iv.toString("base64");

console.log("Encrypted Data (Base64):", dataBase64);
console.log("IV (Base64):", ivBase64);

// Construct test URL
console.log(`http://localhost:3000/payment?data=${encodeURIComponent(dataBase64)}&iv=${encodeURIComponent(ivBase64)}`);