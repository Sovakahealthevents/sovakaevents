// import { NextResponse } from "next/server"
// import { createClient } from "@supabase/supabase-js"

// /* ------------------------------------------------------------------ */
// /* Supabase (SERVER ONLY – Service Role Key)                            */
// /* ------------------------------------------------------------------ */
// const supabase = createClient(
//   process.env.SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// )

// /* ------------------------------------------------------------------ */
// /* POST /api/notify                                                     */
// /* ------------------------------------------------------------------ */
// export async function POST(req: Request) {
//   try {
//     const body = await req.json()

//     const {
//       name,
//       email,
//       above18,
//       agreed,
//       eventId,
//     } = body

//     /* ---------------- Validation ---------------- */
//     if (
//       !name ||
//       !email ||
//       !above18 ||
//       !agreed ||
//       !eventId
//     ) {
//       return NextResponse.json(
//         { error: "Invalid input" },
//         { status: 400 }
//       )
//     }

//     /* ---------------- Insert ---------------- */
//     const { error } = await supabase
//       .from("event_registrations")
//       .insert({
//         name,
//         email,
//         is_adult: above18,
//         agreed,
//         event_id: eventId,
//       })

//     /* ---------------- Duplicate Email ---------------- */
//     if (error?.code === "23505") {
//       return NextResponse.json(
//         { error: "You are already registered for this event" },
//         { status: 409 }
//       )
//     }

//     if (error) {
//       console.error("Supabase insert error:", error)
//       return NextResponse.json(
//         { error: "Something went wrong" },
//         { status: 500 }
//       )
//     }

//     /* ---------------- Success ---------------- */
//     return NextResponse.json({ success: true })
//   } catch (err) {
//     console.error("API error:", err)
//     return NextResponse.json(
//       { error: "Invalid request" },
//       { status: 400 }
//     )
//   }
// }
