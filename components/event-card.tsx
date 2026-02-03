'use client'

import { Button } from '../components/ui/button'
import { Share2, MapPin, Mic, Clock } from 'lucide-react'
import { useRouter } from "next/navigation";


export default function EventCard({
  id, // Added ID to props
  type,
  title,
  date,
  dayName,
  month,
  time,
  speaker,
  speakerCredentials,
  location,
  locationType,
  featured = false,
  free = false,
  onRegister,
  onShare,
}: any) {
  const typeStyles =
    type === 'Hybrid'
      ? 'bg-purple-100 text-purple-700'
      : 'bg-green-100 text-green-700'

  const router = useRouter();


  return (
    <div className="bg-white border border-gray-200 rounded-2xl hover:shadow-md transition h-full p-5 max-w-md">
      <div className="flex gap-4 h-full">
        {/* DATE — centered pill */}
        <div className="flex items-center flex-shrink-0">
          <div className="bg-[#F2F8F7] rounded-xl px-4 py-4 flex flex-col items-center w-[90px]">
            <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-0.5">
              {dayName}
            </p>
            <p className="text-5xl font-bold text-teal-700 leading-none my-1">
              {date}
            </p>
            <p className="text-sm text-gray-500 mb-2">{month}</p>
            <div className="flex items-center gap-1 text-[10px] text-gray-500">
              <Clock size={11} />
              {time}
            </div>
          </div>
        </div>

        {/* CONTENT — flexible & balanced */}
        <div className="flex-1 flex flex-col justify-between min-w-0">
          <div>
            {/* Top badge - only type */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1 ${typeStyles}`}
              >
                ⦿ {type}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-serif font-bold text-gray-900 leading-tight mb-4">
              {title}
            </h3>

            {/* Speaker */}
            <div className="flex items-start gap-2.5 mb-3.5">
              <span className="w-9 h-9 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 flex-shrink-0">
                <Mic size={14} />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900 truncate">
                  {speaker}
                </p>
                <p className="text-xs text-gray-500 line-clamp-2">
                  {speakerCredentials}
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-2.5 mb-3">
              <span className="w-9 h-9 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 flex-shrink-0">
                <MapPin size={14} />
              </span>
              <div className="text-sm flex-1 min-w-0">
                <p className="text-sm text-gray-700 truncate">{location}</p>
                {locationType && (
                  <p className="text-green-600 font-semibold text-xs">
                    + {locationType}
                  </p>
                )}
              </div>
            </div>

            {/* Featured and Free badges - after location */}
            <div className="flex items-center gap-2 ml-11">
              {featured && (
                <span className="text-orange-500 text-sm font-bold flex items-center gap-1">
                  ⭐ Featured
                </span>
              )}

              {free && (
                <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-bold">
                  FREE
                </span>
              )}
            </div>
          </div>

          {/* CTA — bottom aligned */}
          <div className="flex items-center gap-2.5 pt-4">
            <Button
              className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-5 rounded-xl text-sm font-semibold flex-1"
             onClick={() => router.push(`/event-details/${id}`)}
            >
              Register
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="rounded-xl h-11 w-11 border-2 flex-shrink-0"
              onClick={onShare}
            >
              <Share2 size={16} />
            </Button>
          </div>

        </div>

        {/* IMAGE — inside card, top right */}
        <div className="flex items-start flex-shrink-0">
          <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center text-3xl">
            🖼
          </div>
        </div>
      </div>
    </div>
  )
}