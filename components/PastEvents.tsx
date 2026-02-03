'use client'

import Image from 'next/image'

export default function PastEvents() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
          Past Events & Resources
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Access recordings, slides, and materials from our previous health
          education sessions.
        </p>
      </div>

      {/* Event Card */}
      <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
        {/* Banner */}
        <div className="relative h-56 bg-gradient-to-r from-red-700 to-pink-600">
          <div className="absolute inset-0 flex flex-col justify-center px-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-white/90 text-red-700 px-4 py-1 rounded-full text-sm font-semibold">
                Sovaka Health
              </span>
              <span className="bg-white/90 text-red-700 px-4 py-1 rounded-full text-sm font-semibold">
                South Asian Heart Center
              </span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold mb-2">
              Halt Heart Attacks! Stop Diabetes!
            </h3>
            <p className="text-white/90 max-w-xl">
              How to Prevent the Twin Epidemics of the South Asian Community
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
          {/* Speaker */}
          <div className="lg:col-span-2 bg-red-50 rounded-xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-gray-300" />
              <div>
                <h4 className="font-semibold text-lg text-gray-900">
                  Cesar Molina, M.D., FACC
                </h4>
                <p className="text-sm text-red-700 font-medium">
                  Cardiologist & Internal Medicine Specialist
                </p>
                <p className="text-sm text-gray-600">
                  Co-Founder & Medical Director, SAHC at El Camino Hospital
                </p>
              </div>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              An experienced cardiologist at El Camino Hospital specializing in
              cardiovascular medicine, South Asian heart health, and preventive
              cardiology.
            </p>

            <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
              <li>MD from Yale University</li>
              <li>Fellowship at Stanford Medical Center</li>
              <li>Expert in diet, exercise & stress reduction</li>
              <li>Research in lifestyle & coronary artery disease</li>
            </ul>

            <div className="mt-4 flex gap-4 text-sm text-red-700 font-medium">
              <span className="hover:underline cursor-pointer">
                Learn more about Dr. Molina
              </span>
              <span className="hover:underline cursor-pointer">
                Read Patient Testimonials
              </span>
            </div>
          </div>

          {/* Event Details */}
          <div className="bg-blue-50 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h5 className="font-semibold text-gray-900 mb-3">
                In-Person Attendance
              </h5>

              <ul className="text-sm text-gray-700 space-y-3">
                <li>
                  📍 Meeting Room F & G, El Camino Hospital <br />
                  2500 Grant Road, Mountain View, CA
                </li>
                <li>📅 September 28th</li>
                <li>⏰ 3:00 PM PST</li>
              </ul>

              <p className="text-sm text-gray-700 mt-4">
                💬 1-hour educational session including Q&A and direct
                interaction with cardiology experts.
              </p>
            </div>

            <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold text-sm">
              View Recording & Resources
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
