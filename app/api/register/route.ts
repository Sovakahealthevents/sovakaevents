// import { NextResponse } from "next/server"
// import { supabaseServer } from "@/lib/supabase/server"

// export async function POST(req: Request) {
//   try {
//     const body = await req.json()
//     const { name, email, isAdult, agreed } = body

//     if (!name || !email || !isAdult || !agreed) {
//       return NextResponse.json(
//         { error: "Invalid input" },
//         { status: 400 }
//       )
//     }

//     const { error } = await supabaseServer
//       .from("event_registrations")
//       .insert([
//         {
//           name,
//           email,
//           is_adult: isAdult,
//           agreed,
//         },
//       ])

//     if (error) {
//       if (error.code === "23505") {
//         return NextResponse.json(
//           { error: "Already registered" },
//           { status: 409 }
//         )
//       }

//       throw error
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

// working code

// import { NextResponse } from "next/server"
// import { createClient } from "@/lib/supabase/server"

// export async function POST(req: Request) {
//   try {
//     const body = await req.json()
//     const { name, email, isAdult, agreed, eventId } = body

//     if (
//   typeof name !== "string" ||
//   typeof email !== "string" ||
//   typeof isAdult !== "boolean" ||
//   typeof agreed !== "boolean" ||
//   !isAdult ||
//   !agreed
// ) {
//   return NextResponse.json(
//     { error: "Invalid input" },
//     { status: 400 }
//   )
// }

//     const supabase = createClient()

//     const { error } = await supabase
//       .from("event_registrations")
//       .insert([
//         {
//           event_id: eventId,
//           name,
//           email,
//           is_adult: isAdult,
//           agreed,
//         },
//       ])

//     if (error) {
//       // Unique constraint: (event_id, email)
//       if (error.code === "23505") {
//         return NextResponse.json(
//           { error: "Already registered for this event" },
//           { status: 409 }
//         )
//       }
//       throw error
//     }

//     return NextResponse.json({ success: true })
//   } catch (err) {
//     console.error("Register error:", err)
//     return NextResponse.json(
//       { error: "Server error" },
//       { status: 500 }
//     )
//   }
// }


// import { NextResponse } from "next/server"
// import { createClient } from "@/lib/supabase/server"
// import { encrypt } from "@/lib/crypto"
// import { hashEmail } from "@/lib/hash"

// export async function POST(req: Request) {
//   try {
//     const { name, email, isAdult, agreed, eventId } = await req.json()

//     if (
//       typeof name !== "string" ||
//       typeof email !== "string" ||
//       typeof isAdult !== "boolean" ||
//       typeof agreed !== "boolean" ||
//       !isAdult ||
//       !agreed
//     ) {
//       return NextResponse.json({ error: "Invalid input" }, { status: 400 })
//     }

//     const supabase = createClient()

//     const { error } = await supabase
//       .from("event_registrations")
//       .insert([
//         {
//           event_id: eventId,
//         email: hashEmail(email),
//         email_encrypted: encrypt(email),
//         name_encrypted: encrypt(name), 
//         is_adult: isAdult,
//         agreed,
//         },
//       ])

//     if (error) {
//       if (error.code === "23505") {
//         return NextResponse.json(
//           { error: "Already registered for this event" },
//           { status: 409 }
//         )
//       }
//       throw error
//     }

//     return NextResponse.json({ success: true })
//   } catch (err) {
//     console.error("Register error:", err)
//     return NextResponse.json({ error: "Server error" }, { status: 500 })
//   }
// }

import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { encrypt, hashEmail } from "@/lib/crypto"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, isAdult, agreed, eventId } = body

    if (
      !name ||
      !email ||
      !eventId ||
      !isAdult ||
      !agreed
    ) {
      return NextResponse.json(
        { error: "Invalid input" },
        { status: 400 }
      )
    }

    const nameEncrypted = encrypt(name)
    const emailEncrypted = encrypt(email)
    const emailHash = hashEmail(email)

    const supabase = createClient()

    const { error } = await supabase
      .from("event_registrations")
      .insert({
        event_id: eventId,
        name_encrypted: nameEncrypted,
        email_encrypted: emailEncrypted,
        email_hash: emailHash,
        is_adult: isAdult,
        agreed,
      })

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Register error:", err)
    return NextResponse.json(
  { error: "You are already registered for this event" },
  { status: 409 }
)

  }
}
