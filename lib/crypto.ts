// import crypto from "crypto"

// const algorithm = "aes-256-gcm"
// const key = Buffer.from(process.env.ENCRYPTION_KEY!, "hex")

// export function encrypt(text: string) {
//   const iv = crypto.randomBytes(12)
//   const cipher = crypto.createCipheriv(algorithm, key, iv)

//   let encrypted = cipher.update(text, "utf8", "hex")
//   encrypted += cipher.final("hex")

//   const authTag = cipher.getAuthTag().toString("hex")

//   return `${iv.toString("hex")}:${authTag}:${encrypted}`
// }

// export function decrypt(payload: string) {
//   const [ivHex, authTagHex, encrypted] = payload.split(":")

//   const decipher = crypto.createDecipheriv(
//     algorithm,
//     key,
//     Buffer.from(ivHex, "hex")
//   )

//   decipher.setAuthTag(Buffer.from(authTagHex, "hex"))

//   let decrypted = decipher.update(encrypted, "hex", "utf8")
//   decrypted += decipher.final("utf8")

//   return decrypted
// }

import crypto from "crypto"

const ALGORITHM = "aes-256-gcm"

const SECRET = process.env.ENCRYPTION_KEY
if (!SECRET) {
  throw new Error("❌ ENCRYPTION_KEY is missing")
}

// ✅ Support 64-char HEX or 32-char UTF-8
const SECRET_KEY =
  SECRET.length === 64
    ? Buffer.from(SECRET, "hex")   // 64 hex → 32 bytes
    : Buffer.from(SECRET, "utf8")  // 32 utf8 → 32 bytes

if (SECRET_KEY.length !== 32) {
  throw new Error("❌ ENCRYPTION_KEY must resolve to 32 bytes")
}

/**
 * 🔐 Encrypt text (AES-256-GCM)
 */
export function encrypt(text: string) {
  const iv = crypto.randomBytes(12) // GCM standard
  const cipher = crypto.createCipheriv(ALGORITHM, SECRET_KEY, iv)

  const encrypted = Buffer.concat([
    cipher.update(text, "utf8"),
    cipher.final(),
  ])

  const tag = cipher.getAuthTag()

  // iv (12) + tag (16) + encrypted
  return Buffer.concat([iv, tag, encrypted]).toString("base64")
}

/**
 * 🔓 Decrypt text
 */
export function decrypt(payload: string) {
  const buffer = Buffer.from(payload, "base64")

  const iv = buffer.subarray(0, 12)
  const tag = buffer.subarray(12, 28)
  const encrypted = buffer.subarray(28)

  const decipher = crypto.createDecipheriv(ALGORITHM, SECRET_KEY, iv)
  decipher.setAuthTag(tag)

  return decipher.update(encrypted, undefined, "utf8") + decipher.final("utf8")
}

/**
 * 🔎 Deterministic email hash (for uniqueness / lookup)
 */
export function hashEmail(email: string) {
  return crypto
    .createHash("sha256")
    .update(email.trim().toLowerCase())
    .digest("hex")
}
