'use client'

import { Mail, Handshake, Heart, Gift } from 'lucide-react'

export default function SupportCTA() {
  return (
    <section className="px-6 lg:px-16 py-12">
      <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-teal-50 to-orange-50 p-8 lg:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between">
        
        {/* Left Content */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
              <Handshake className="h-5 w-5 text-yellow-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Become a Partner, Sponsor, or Donate
            </h3>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
            Join our mission to make a difference globally. Whether you want to
            partner with us, sponsor an event, or donate to support free health
            education — every contribution helps save lives.
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
          </div>
        </div>

        {/* Right Action */}
        <div className="flex flex-col items-center lg:items-end gap-3 w-full lg:w-auto">
          <button className="w-full lg:w-auto flex items-center justify-center gap-2 rounded-full bg-teal-700 px-8 py-3 text-white font-medium hover:bg-teal-800 transition">
            <Mail className="h-4 w-4" />
            Get Involved Today →
          </button>

          <a
            href="mailto:supportmvp@sovakahealth.onmicrosoft.com"
            className="text-sm text-teal-600 hover:underline"
          >
            supportmvp@sovakahealth.onmicrosoft.com
          </a>
        </div>
      </div>
    </section>
  )
}
