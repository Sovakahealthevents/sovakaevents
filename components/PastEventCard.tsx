'use client'

import { motion } from 'framer-motion'

type PastEventCardProps = {
  title: string
  subtitle: string
  topic: string
  year: number
  speaker: {
    name: string
    title: string
    org: string
    bio: string
    points: string[]
  }
  location: string
  date: string
  time: string
  recordingUrl?: string
  slidesUrl?: string
}

export default function PastEventCard({
  title,
  subtitle,
  speaker,
  location,
  date,
  time,
  recordingUrl,
  slidesUrl,
}: PastEventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm"
    >
      {/* Banner */}
      <div className="bg-gradient-to-r from-red-700 to-pink-600 px-8 py-10 text-white">
        <h3 className="text-2xl font-bold mb-1">{title}</h3>
        <p className="text-white/90">{subtitle}</p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
        {/* Speaker */}
        <div className="lg:col-span-2 bg-red-50 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-gray-900">
            {speaker.name}
          </h4>
          <p className="text-sm font-medium text-red-700">
            {speaker.title}
          </p>
          <p className="text-sm text-gray-600 mb-3">{speaker.org}</p>

          <p className="text-sm text-gray-700 mb-4">{speaker.bio}</p>

          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {speaker.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Details */}
        <div className="bg-blue-50 rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">
              Event Details
            </h5>

            <ul className="text-sm text-gray-700 space-y-2">
              <li>📍 {location}</li>
              <li>📅 {date}</li>
              <li>⏰ {time}</li>
            </ul>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            {recordingUrl && (
              <a
                href={recordingUrl}
                target="_blank"
                className="text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-semibold"
              >
                Watch Recording
              </a>
            )}

            {slidesUrl && (
              <a
                href={slidesUrl}
                target="_blank"
                className="text-center border border-blue-600 text-blue-700 hover:bg-blue-100 py-2 rounded-lg text-sm font-semibold"
              >
                Download Slides
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
