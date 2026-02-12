// import { NextResponse } from "next/server"
// import { createClient } from "@supabase/supabase-js"

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY! // use service role here
// )

// export async function POST(req: Request) {
//   try {
//     const body = await req.json()
//     const { name, email, above18, agreed, eventId } = body

//     if (!name || !email || !eventId || !above18 || !agreed) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       )
//     }

//     const { error } = await supabase
//       .from("event_notifications")
//       .insert([
//         {
//           name,
//           email,
//           event_id: eventId,
//           above18,
//           agreed,
//         },
//       ])

//     if (error) {
//       // duplicate entry
//       if (error.code === "23505") {
//         return NextResponse.json(
//           { error: "You are already subscribed for this event 🎉" },
//           { status: 409 }
//         )
//       }

//       return NextResponse.json(
//         { error: error.message },
//         { status: 500 }
//       )
//     }

//     return NextResponse.json({ success: true })
//   } catch (err) {
//     console.error(err)
//     return NextResponse.json(
//       { error: "Server error" },
//       { status: 500 }
//     )
//   }
// }



import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, above18, agreed, eventId } = body

    // Basic validation
    if (!name || !email || !eventId || !above18 || !agreed) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from("event_notifications")
      .insert([
        {
          name,
          email,
          event_id: eventId,
          above18,
          agreed,
        },
      ])

    if (error) {
      // Duplicate registration
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "You are already registered for this event 🎉" },
          { status: 409 }
        )
      }

      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Successfully registered! 🎉",
    })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}
