import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function GET() {
  try {
    const { data, error, count } = await supabase
      .from("event_notifications")
      .select(
        `
        id,
        event_id,
        name,
        email,
        created_at,
        events:events (
          title
        )
        `,
        { count: "exact" }
      )
      .order("created_at", { ascending: false })

    if (error) throw error

    const formattedData =
      data?.map((row: any) => ({
        id: row.id,
        event_id: row.event_id,
        event_title: row.events?.[0]?.title ?? "Unknown Event",
        name: row.name,
        email: row.email,
        created_at: row.created_at,
      })) ?? []

    return NextResponse.json({
      count: count ?? 0,
      data: formattedData,
    })
  } catch (err) {
    console.error("Admin notifications fetch error:", err)
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}
