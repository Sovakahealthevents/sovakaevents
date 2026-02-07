// 'use client'

// import { Modal } from '@/components/ui/Modal'
// import { CheckCircle } from 'lucide-react'

// export function RegisterModal({
//   open,
//   onClose,
// }: {
//   open: boolean
//   onClose: () => void
// }) {
//   return (
//     <Modal open={open} onClose={onClose}>
//       <div className="space-y-5">
//         <div className="flex justify-center">
//           <CheckCircle className="h-10 w-10 text-teal-600" />
//         </div>

//         <h2 className="text-xl font-semibold text-center">
//           Register for Free
//         </h2>

//         <p className="text-sm text-center text-gray-500">
//           Cancer Awareness Camp: Elderly & Breast Cancer
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
//             Complete Registration
//           </button>
//         </div>
//       </div>
//     </Modal>
//   )
// }

"use client"
 
import { useState } from "react"

import { CheckCircle, User, Mail } from "lucide-react"
import { Modal } from "../modal"
 
export function RegisterModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isAdult, setIsAdult] = useState(false)
  const [agreed, setAgreed] = useState(false)
 
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
 
  const isDisabled =
    !name.trim() || !isEmailValid || !isAdult || !agreed
 
  return (
    <Modal open={open} onClose={onClose}>
      <div
        className="
          bg-white rounded-2xl
          w-full max-w-lg
          max-h-[90vh] overflow-y-auto
          px-4 py-5
          sm:px-6 sm:py-6
          md:px-8
          space-y-6
        "
      >
        {/* Top Icon */}
        <div className="flex justify-center">
          <div className="rounded-full bg-teal-50 p-3">
            <CheckCircle className="h-6 w-6 text-teal-600" />
          </div>
        </div>
 
        {/* Title */}
        <div className="text-center space-y-1">
          <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
            Register for Free
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
             Cancer Care in Elderly & Breast Cancer In Women
          </p>
        </div>
 
        {/* Form */}
        <div className="space-y-4">
          {/* Full Name */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full rounded-lg border pl-10 pr-4 py-3 text-sm outline-none focus:border-teal-600"
              />
            </div>
          </div>
 
          {/* Email */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={`w-full rounded-lg border pl-10 pr-4 py-3 text-sm outline-none
                  ${
                    email && !isEmailValid
                      ? "border-red-400"
                      : "focus:border-teal-600"
                  }
                `}
              />
            </div>
 
            {email && !isEmailValid && (
              <p className="text-xs text-red-500">
                Please enter a valid email address
              </p>
            )}
          </div>
 
          {/* Checkboxes */}
          <div className="space-y-2 text-xs sm:text-sm text-slate-600">
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                className="mt-1 accent-teal-600"
                checked={isAdult}
                onChange={(e) => setIsAdult(e.target.checked)}
              />
              I confirm that I am above 18 years of age
            </label>
 
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                className="mt-1 accent-teal-600"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
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

            </label>
          </div>
 
          {/* Button */}
          <button
            disabled={isDisabled}
            className={`
              w-full rounded-full py-3 text-sm font-semibold transition
              ${
                isDisabled
                  ? "bg-teal-300 text-white cursor-not-allowed"
                  : "bg-teal-600 text-white hover:bg-teal-700"
              }
            `}
          >
            Complete Registration
          </button>
 
          {/* Secure text */}
          <p className="text-[11px] sm:text-xs text-center text-slate-400">
            Your information is secure and will never be shared.
          </p>
        </div>
 
        {/* Medical Disclaimer */}
        <p className="text-[10px] leading-relaxed text-slate-400 pt-2">
          <span className="font-semibold">MEDICAL DISCLAIMER:</span> The services provided by Sovaka Health are for general informational purposes only and are not a substitute for professional medical care,
diagnosis, or treatment. Sovaka Health does not provide medical advice, and nothing on the services should be interpreted as such.
Always seek the advice of a licensed physician or other qualified health provider in your country or place of residence with any questions
you may have regarding a medical or health condition. Never disregard professional medical advice or delay seeking it because of
something you have read, heard, or received through the services.
        </p>
      </div>
    </Modal>
  )
}