// 'use client'

// import { Modal } from '@/components/ui/Modal'
// import { Bell } from 'lucide-react'

// export function NotifyModal({
//   open,
//   onClose,
//   title,
// }: {
//   open: boolean
//   onClose: () => void
//   title: string
// }) {
//   return (
//     <Modal open={open} onClose={onClose}>
//       <div className="space-y-5">
//         <div className="flex justify-center">
//           <Bell className="h-10 w-10 text-teal-600" />
//         </div>

//         <h2 className="text-xl font-semibold text-center">
//           Get Notified
//         </h2>

//         <p className="text-sm text-center text-gray-500">
//           {title}
//         </p>

//         <div className="space-y-3">
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="w-full border rounded-lg px-4 py-3 text-sm"
//           />
//           <input
//             type="email"
//             placeholder="Email Address"
//             className="w-full border rounded-lg px-4 py-3 text-sm"
//           />

//           <label className="flex items-start gap-2 text-xs text-gray-500">
//             <input type="checkbox" className="mt-1" />
//             I agree to the Terms of Service and Privacy Policy
//           </label>

//           <button className="w-full py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700">
//             Notify Me When It’s Live
//           </button>

//           <p className="text-xs text-center text-gray-400">
//             We’ll email you when registration opens.
//           </p>
//         </div>
//       </div>
//     </Modal>
//   )
// }


// 'use client'

// import { useState } from 'react'
// import { Modal } from '@/components/ui/Modal'
// import { Bell, User, Mail } from 'lucide-react'

// export function NotifyModal({
//   open,
//   onClose,
//   title,
// }: {
//   open: boolean
//   onClose: () => void
//   title: string
// }) {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [above18, setAbove18] = useState(false)
//   const [agreed, setAgreed] = useState(false)
//   const [emailTouched, setEmailTouched] = useState(false)

//   const emailValid =
//     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

//   const isCtaEnabled =
//     above18 && agreed && emailValid && name.trim().length > 0

//   return (
//     <Modal open={open} onClose={onClose}>
//       <div
//         className="
//           relative w-full max-w-md
//           rounded-2xl bg-white
//           px-6 py-8
//           space-y-6
//           shadow-xl
//           sm:px-8
//         "
//       >
//         {/* Icon */}
//         <div className="flex justify-center">
//           <div className="h-14 w-14 rounded-full bg-orange-50 flex items-center justify-center">
//             <Bell className="h-7 w-7 text-orange-500" />
//           </div>
//         </div>

//         {/* Header */}
//         <div className="text-center space-y-1">
//           <h2 className="text-2xl font-semibold text-gray-900">
//             Get Notified
//           </h2>
//           <p className="text-sm text-gray-500">
//             {title}
//           </p>
//         </div>

//         {/* Form */}
//         <div className="space-y-4">
//           {/* Full Name */}
//           <div className="space-y-1">
//             <label className="text-sm font-medium text-gray-700">
//               Full Name
//             </label>
//             <div className="relative">
//               <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
//               <input
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 type="text"
//                 placeholder="Enter your full name"
//                 className="
//                   w-full pl-10 pr-4 py-3
//                   rounded-lg border text-sm
//                   focus:outline-none focus:ring-2 focus:ring-teal-500
//                 "
//               />
//             </div>
//           </div>

//           {/* Email */}
//           <div className="space-y-1">
//             <label className="text-sm font-medium text-gray-700">
//               Email Address
//             </label>
//             <div className="relative">
//               <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
//               <input
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 onBlur={() => setEmailTouched(true)}
//                 type="email"
//                 placeholder="Enter your email"
//                 className={`
//                   w-full pl-10 pr-4 py-3
//                   rounded-lg border text-sm
//                   focus:outline-none focus:ring-2
//                   ${
//                     emailTouched && !emailValid
//                       ? 'border-red-400 focus:ring-red-400'
//                       : 'focus:ring-teal-500'
//                   }
//                 `}
//               />
//             </div>

//             {emailTouched && !emailValid && (
//               <p className="text-xs text-red-500">
//                 Please enter a valid email address
//               </p>
//             )}
//           </div>

//           {/* Checkboxes */}
//           <div className="space-y-3 pt-1">
//             <label className="flex items-start gap-3 text-sm text-gray-600">
//               <input
//                 type="checkbox"
//                 checked={above18}
//                 onChange={(e) => setAbove18(e.target.checked)}
//                 className="mt-1 h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
//               />
//               I confirm that I am above 18 years of age
//             </label>

//             <label className="flex items-start gap-3 text-sm text-gray-600">
//               <input
//                 type="checkbox"
//                 checked={agreed}
//                 onChange={(e) => setAgreed(e.target.checked)}
//                 className="mt-1 h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
//               />
//               <span>
//                 I agree to the{' '}
//                 <a href="/terms" className="text-teal-600 hover:underline">
//                   Terms of Service
//                 </a>{' '}
//                 and{' '}
//                 <a href="/privacy" className="text-teal-600 hover:underline">
//                   Privacy Policy
//                 </a>
//               </span>
//             </label>
//           </div>

//           {/* CTA */}
//           <button
//             disabled={!isCtaEnabled}
//             className={`
//               w-full mt-2 py-3 rounded-full
//               font-semibold text-sm
//               transition
//               ${
//                 isCtaEnabled
//                   ? 'bg-teal-600 text-white hover:bg-teal-700 active:scale-[0.98]'
//                   : 'bg-gray-200 text-gray-400 cursor-not-allowed'
//               }
//             `}
//           >
//             Notify Me When It's Live
//           </button>

//           <p className="text-xs text-center text-gray-400">
//             We&apos;ll email you when registration opens. No spam, ever.
//           </p>
//         </div>

//         {/* Divider */}
//         <div className="border-t pt-4" />

//         {/* Medical Disclaimer */}
//         <p className="text-[11px] leading-relaxed text-gray-400">
//           <span className="font-semibold">MEDICAL DISCLAIMER:</span>{' '}
//           The services provided by Sovaka Health are for general informational
//           purposes only and are not a substitute for professional medical care,
//           diagnosis, or treatment. Always seek the advice of a licensed
//           physician or other qualified health provider.
//         </p>
//       </div>
//     </Modal>
//   )
// }


"use client"
 
import { useState } from "react"

import { Bell, User, Mail } from "lucide-react"
import { Modal } from "../ui/Modal"
 
export function NotifyModal({
  open,
  onClose,
  title,
}: {
  open: boolean
  onClose: () => void
  title: string
}) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [above18, setAbove18] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [emailTouched, setEmailTouched] = useState(false)
 
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const isCtaEnabled =
    above18 && agreed && emailValid && name.trim().length > 0
 
  return (
    <Modal open={open} onClose={onClose}>
      <div
        className="
          relative w-full
          max-w-[92vw] sm:max-w-md
          rounded-2xl sm:rounded-3xl
         
          px-4 py-6 sm:px-8 sm:py-8
          shadow-xl
          space-y-5 sm:space-y-6
        "
      >
        {/* Icon */}
        <div className="flex justify-center">
          <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-orange-50 flex items-center justify-center">
            <Bell className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" />
          </div>
        </div>
 
        {/* Header */}
        <div className="text-center space-y-1">
          <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
            Get Notified
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 px-2">
            {title}
          </p>
        </div>
 
        {/* Form */}
        <div className="space-y-4">
          {/* Full Name */}
          <div className="space-y-1">
            <label className="text-xs sm:text-sm font-medium text-slate-700">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="
                  w-full rounded-xl border border-slate-200
                  pl-10 pr-4 py-2.5 sm:py-3
                  text-sm
                  placeholder:text-slate-400
                  focus:outline-none focus:ring-2 focus:ring-teal-500
                "
              />
            </div>
          </div>
 
          {/* Email */}
          <div className="space-y-1">
            <label className="text-xs sm:text-sm font-medium text-slate-700">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setEmailTouched(true)}
                placeholder="Enter your email"
                className={`
                  w-full rounded-xl border
                  pl-10 pr-4 py-2.5 sm:py-3
                  text-sm
                  placeholder:text-slate-400
                  focus:outline-none focus:ring-2
                  ${
                    emailTouched && !emailValid
                      ? "border-red-300 focus:ring-red-400"
                      : "border-slate-200 focus:ring-teal-500"
                  }
                `}
              />
            </div>
 
            {emailTouched && !emailValid && (
              <p className="text-xs text-red-500">
                Please enter a valid email address
              </p>
            )}
          </div>
 
          {/* Checkboxes */}
          <div className="space-y-3 pt-1">
            <label className="flex gap-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <input
                type="checkbox"
                checked={above18}
                onChange={(e) => setAbove18(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
              />
              I confirm that I am above 18 years of age
            </label>
 
            <label className="flex gap-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
              />
              <span>
                I agree to the{" "}
                <a
  href="/files/SovakaHealthTermsofUse2.1.26.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="text-teal-600 font-medium hover:underline"
>
  Terms of Service
</a>{" "}
and{" "}
<a
  href="/files/SovakaHealthPrivacyPolicy2.1.26.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="text-teal-600 font-medium hover:underline"
>
  Privacy Policy
</a>

              </span>
            </label>
          </div>
 
          {/* CTA */}
          <button
            disabled={!isCtaEnabled}
            className={`
              w-full rounded-full py-2.5 sm:py-3
              text-sm font-semibold transition
              ${
                isCtaEnabled
                  ? "bg-teal-600 text-white hover:bg-teal-700 active:scale-[0.98]"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
              }
            `}
          >
            Notify Me When It&apos;s Live
          </button>
 
          <p className="text-[11px] sm:text-xs text-center text-slate-400 px-2">
            We&apos;ll email you when registration opens. No spam, ever.
          </p>
        </div>
 
        {/* Divider */}
        <div className="border-t pt-3 sm:pt-4" />
 
        {/* Disclaimer */}
        <p className="text-[10px] sm:text-[11px] leading-relaxed text-slate-400">
          <span className="font-semibold">MEDICAL DISCLAIMER:</span>{" "}
           The services provided by Sovaka Health are for general informational purposes only and are not a substitute for professional medical care, diagnosis, or treatment.
Sovaka Health does not provide medical advice, and nothing on the services should be interpreted as such. Always seek the advice of a licensed physician or other
qualified health provider in your country or place of residence with any questions you may have regarding a medical or health condition. Never disregard professional
medical advice or delay seeking it because of something you have read, heard, or received through the services.
        </p>
      </div>
    </Modal>
  )
}