// 'use client'

// import { Mail, Handshake, Heart, Gift } from 'lucide-react'

// export default function SupportCTA() {
//   return (
//     <section className="px-6 lg:px-16 py-12">
//       <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-teal-50 to-orange-50 p-8 lg:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between">
        
//         {/* Left Content */}
//         <div className="max-w-2xl">
//           <div className="flex items-center gap-3 mb-4">
//             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
//               <Handshake className="h-5 w-5 text-yellow-600" />
//             </div>
//             {/* <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
//               Become a Partner, Sponsor, or Donate
//             </h3> */}
//           </div>

//           <p className="text-gray-600 text-md leading-relaxed mb-6">
//             Join our mission to bring expert - led health education to every community - powered by trusted  health professionals, sponsors, partners and donors. Every contribution helps save lives.
//           </p>

//           <div className="flex flex-wrap gap-6 text-sm text-teal-700 font-medium">

//             <span className="flex items-center gap-2">
//               <Handshake className="h-4 w-4" /> Partner with Us
//             </span>
//             <span className="flex items-center gap-2">
//               <Gift className="h-4 w-4" /> Sponsor Events
//             </span>
//             <span className="flex items-center gap-2">
//               <Heart className="h-4 w-4" /> Donate to Support
//             </span>
//             <span className="flex items-center gap-2">
//               <img> Health Professionals</img>
//             </span>
//           </div>
//         </div>

//         {/* Right Action --- click button to open mail*/}
//         <div className="flex flex-col items-center lg:items-end gap-3 w-full lg:w-auto">
//           <button className="w-full lg:w-auto flex items-center justify-center gap-2 rounded-full bg-teal-700 px-8 py-3 text-white font-medium hover:bg-teal-800 transition">
//             <Mail className="h-4 w-4" />
//             Get Involved Today →
//           </button>

//           <a
//             href="mailto:supportmvp@sovakahealth.onmicrosoft.com"
//             className="text-sm text-teal-600 hover:underline"
//           >
//             supportmvp@sovakahealth.onmicrosoft.com
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { useState } from 'react'
import { Mail, Handshake, Heart, Gift, X } from 'lucide-react'
import Image from 'next/image'

export default function SupportCTA() {
  const email = 'supportmvp@sovakahealth.onmicrosoft.com'
  const [open, setOpen] = useState(false)

  return (
    <>
      <section className="w-full px-6 lg:px-16 py-12">
        <div className="w-full rounded-2xl border border-gray-200 bg-gradient-to-br from-teal-50 to-orange-50 p-8 lg:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between">

          {/* Left Content */}
          <div className="w-full lg:w-2/3">
            <p className="text-gray-600 text-md leading-relaxed mb-6">
              Join our mission to bring expert-led health education to every community —
              powered by trusted health professionals, sponsors, partners and donors.
              Every contribution helps save lives.
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-teal-700 font-medium">
              <span className="flex items-center gap-2">
                <Handshake className="h-4 w-4" /> Partner with Us
              </span>
              <span className="flex items-center gap-2">
                <Gift className="h-4 w-4" /> Sponsor Events
              </span>
              <span className="flex items-center gap-2">
                <Heart className="h-4 w-4" /> Donate to Support
              </span>
              <span className="flex items-center gap-2">
                <Image
                  src="/professionals.png"
                  alt="Health Professionals"
                  width={18}
                  height={18}
                />
                Health Professionals
              </span>
            </div>
          </div>

          {/* Right Action */}
          <div className="flex flex-col items-center lg:items-end gap-3 w-full lg:w-auto">
            <button
              onClick={() => setOpen(true)}
              className="w-full lg:w-auto flex items-center justify-center gap-2 rounded-full bg-teal-700 px-8 py-3 text-white font-medium hover:bg-teal-800 transition"
            >
              <Mail className="h-4 w-4" />
              Get Notified →
            </button>
          </div>
        </div>
      </section>

      {/* ================= POPUP MODAL ================= */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl relative">

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                <Mail className="h-6 w-6 text-teal-700" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                Contact Us via Email
              </h3>

              <p className="text-sm text-gray-600">
                Reach out to our team for partnerships, sponsorships, or support.
              </p>

              <p className="text-teal-700 font-medium">
                {email}
              </p>

              <a
                href={`mailto:${email}`}
                className="w-full rounded-full bg-teal-700 px-6 py-3 text-white font-medium hover:bg-teal-800 transition text-center"
              >
                Open Mail App
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
