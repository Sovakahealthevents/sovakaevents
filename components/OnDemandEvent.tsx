
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Calendar, Clock, Video, AlertTriangle } from 'lucide-react'
import { NotifyModal } from './events/NotifyModal'
import { RegisterModal } from './events/RegisterModal'


export default function OnDemandEvent() {
  const eventData = {
  id: 'a724e568-3280-467e-b73c-0c04070eb70f',
  title: 'Cancer Care in Elderly - What you need to know!',
  slug: 'cancer-care-in-elderly',
}
  const [open, setOpen] = useState(false)
  const [notifyOpen, setNotifyOpen] = useState(false)
  const [notifyTitle, setNotifyTitle] = useState('')

  return (
    <section className="px-6 lg:px-16 py-16 bg-white text-lg leading-relaxed">
      {/* Header */}
      <div className="mb-10">
        <p className="flex items-center gap-2 text-orange-500 font-medium text-base mb-2">
          ▶️ On Demand
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Watch Anytime
        </h2>
        <p className="flex items-center gap-2 text-orange-500 font-medium text-base mb-2">
          Available from March 2nd, 2026 - register to get access
        </p>
      </div>

      {/* Event Card */}
      <div className="flex flex-col lg:flex-row rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-10">
        
        {/* Image */}
        <div className="relative w-full lg:w-[40%] h-[280px] lg:h-auto">
          {/* <div className="absolute top-4 left-4 bg-white rounded-xl px-5 py-4 text-center shadow z-10">
            <p className="text-base font-semibold text-teal-600">MAR</p>
            <p className="text-4xl font-bold text-teal-700">02</p>
            <p className="text-sm text-gray-500">2026</p>
          </div> */}

            <div className="absolute top-4 left-4 bg-orange-100 rounded-full px-4 py-2 shadow z-10">
  <p className="text-sm font-semibold text-orange-700">
    ⏳ Upcoming
  </p>
</div>

          <Image
            src="/cancercareelderly.png"
            alt="Cancer Care Elderly"
            fill
            className="object-cover"
            priority
          />
          <p className="absolute bottom-3 right-3 z-10 text-xs text-white bg-black/50 px-2 py-1 rounded">
  Image created using M365 Copilot and Lovable.dev
</p>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 lg:p-10 bg-gradient-to-br from-white to-teal-50">
          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-orange-500 text-white text-sm font-semibold">
              On Demand
            </span>
            <span className="px-4 py-1.5 rounded-full bg-green-500 text-white text-sm font-semibold">
              FREE
            </span>
            <span className="px-4 py-1.5 rounded-full border text-sm font-medium text-gray-700">
              Cancer Awareness
            </span>
            <span className="px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold">
              🇮🇳 In English
            </span>
            <span className="px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold">
              1hr Session + Q&amp;A
            </span>
            
          </div>

          {/* Title */}
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {/* Cancer Awareness <br /> */}
            Cancer Care in Elderly - What you need to know!
          </h3>

         
          {/* Speakers — NOT REMOVED */}
          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4 p-5 rounded-xl bg-teal-50 border border-teal-100">
              <Image
                src="/somasundar.png"
                alt=""
                width={56}
                height={56}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  Dr. Ponnandai Somasundar
                </p>
                <p className="text-base text-teal-700 font-medium">
                  MD – Surgical Oncologist | Roger Williams Medical Center | USA, 36+ years of experience in geriatric oncology
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  Topic: Cancer Care in Elderly 
                </p>
              </div>
            </div>
            <p>
                Cancer burden in adults over 60 years in the Indian
population.Frailty, multimorbidity and financial toxicity how
they affect treatment and recovery.
            </p>

            
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 mt-8 mb-8">
  <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-orange-100 text-orange-700 text-base font-medium w-full justify-center">
    🌐 Available Worldwide ⏱️ 45min
  </div>
</div>

{/* Actions */}
<div className="flex flex-wrap gap-4">
  <button
    onClick={() => setOpen(true)}
    className="w-full rounded-full bg-teal-600 px-10 py-4 text-lg text-white font-semibold hover:bg-teal-700 transition cursor-pointer"
  >
    Register Now – It’s Free
  </button>
</div>

        </div>
      </div>

      {/* Disclaimer */}
      <div className="flex items-center gap-3 rounded-xl border border-yellow-300 bg-yellow-50 px-5 py-4 text-base text-yellow-900">
        <AlertTriangle className="w-6 h-6 text-yellow-600" />
        <p>
          <span className="font-semibold">Disclaimer:</span> Educational only. Not medical advice. Always  consult your physician.
        </p>
      </div>

      {/* Language Availability — EXACTLY BELOW DISCLAIMER */}
      <div className="mt-6 rounded-xl border border-orange-200 bg-orange-50 px-5 py-4">
        <div className="flex items-start gap-3">
          <span className="text-lg">🌐</span>
          <div>
            <p className="text-base font-semibold text-slate-900">
              Also Coming in Hindi & Telugu.
            </p>
            <p className="text-sm text-slate-600 mt-1">
              Same expert speakers, same life-saving content — in your preferred
              language. Dates to be announced.
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <button
                onClick={() => {
                  setNotifyTitle('Notify me when Hindi sessions are available')
                  setNotifyOpen(true)
                }}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 border hover:bg-slate-50 no-underline hover:underline cursor-pointer"
              >
               🇺🇸 Hindi — Notify Me
              </button>

              <button
                onClick={() => {
                  setNotifyTitle('Notify me when Telugu sessions are available')
                  setNotifyOpen(true)
                }}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 border hover:bg-slate-50 no-underline hover:underline cursor-pointer"
              >
                🇮🇳 Telugu — Notify Me
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notify Modal */}
     <NotifyModal
  open={notifyOpen}
  onClose={() => setNotifyOpen(false)}
  title={notifyTitle}
  eventId={eventData.id}
/>

      {/* Register Modal */}
            <RegisterModal
              open={open}
              onClose={() => setOpen(false)}
              eventId={eventData.id}
            />
    </section>
  )
}
