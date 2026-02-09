import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { decrypt } from "@/lib/crypto"

/**
 * 🔐 ADMIN-ONLY ENDPOINT
 * Returns decrypted name + email + total count
 */
export async function GET() {
  try {
    // TODO 🔒 add admin auth check here
    const supabase = createClient()

    const { data, error, count } = await supabase
  .from("event_registrations")
  .select(
    `
    id,
    event_id,
    created_at,
    name_encrypted,
    email_encrypted,
    events:events (
      title
    )
    `,
    { count: "exact" }
  )
  .order("created_at", { ascending: false })



    if (error) throw error

const decryptedData = (data ?? []).map(row => ({
  id: row.id,
  event_id: row.event_id,
  event_title: row.events?.[0]?.title ?? "Unknown Event",
  name: decrypt(row.name_encrypted),
  email: decrypt(row.email_encrypted),
  created_at: row.created_at,
}))




    return NextResponse.json({
      count: count ?? 0,
      data: decryptedData,
    })
  } catch (err) {
    console.error("Admin fetch error:", err)
    return NextResponse.json(
      { error: "Unauthorized or server error" },
      { status: 500 }
    )
  }
}
