// generatePaymentUrl.js
import crypto from "crypto";

const SECRET_KEY = Buffer.from("12345678901234567890123456789012"); // 32 bytes

const paymentData = {
    "tradeType" : "PWAAPP",
    "amount" : 2000,
    "paymentType": "TOPUP",
    "userType" : "DRIVER",
    "userId": "6d4f286e-3caf-46b5-a065-d1a75c3d8cf2",
    "paymentMethodId": "ee7568ef-581d-43e7-8409-a5cd8d6a653a"
}

// const paymentData = {
//     "tradeType" : "PWAAPP",
//     "amount" : 2000,
//     "paymentType": "BOOKING",
//     "userType" : "USER",
//     "userId": "5e39dfe3-e183-4154-96c9-9c201af850af",
//     "paymentMethodId": "ee7568ef-581d-43e7-8409-a5cd8d6a653a",
//     "paymentMethod" : "KBZ Pay",
//     "tripData" : {
//         "userId": "5e39dfe3-e183-4154-96c9-9c201af850af",
//         "latitude": "16.885608063885872",
//         "longitude": "96.13736200428403",
//         "dropoffLatitude": "16.904836871018095",
//         "dropoffLongitude": "96.13161159588017"
//         // "distanceKm": "",
//         // "promoCode": ""
//     }
// }

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