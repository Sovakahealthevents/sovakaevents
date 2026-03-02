import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      rating,
      message,
      email,
      country,
      preferred_language,
      next_topic,
    } = body

    // Basic validation
    if (!message || message.trim().length < 3) {
      return NextResponse.json(
        { error: "Please enter a valid message." },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from("feedback")
      .insert([
        {
          rating: rating ?? null,
          message: message.trim(),
          email: email || null,
          country: country || null,
          preferred_language: preferred_language || null,
          next_topic: next_topic || null,
        },
      ])

    if (error) {
      console.error("Supabase error:", error)
      throw error
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for your feedback ❤️",
    })
  } catch (err) {
    console.error("Feedback API error:", err)

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}