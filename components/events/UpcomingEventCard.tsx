// import {
//   Video,
//   Calendar,
//   Clock,
// } from 'lucide-react'

// export function UpcomingEventCard({
//   event,
//   onNotify,
// }: {
//   event: any
//   onNotify: (title: string) => void
// }) {
//   return (
//     <div className="border rounded-2xl p-6 bg-white shadow-sm space-y-5">
//       {/* Top badges */}
//       <div className="flex gap-2 text-xs">
//         <span className="px-2 py-1 rounded-full bg-teal-100 text-teal-700">
//           Virtual
//         </span>
//         <span className="px-2 py-1 rounded-full bg-green-100 text-green-700">
//           FREE
//         </span>
//         <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-600">
//           {event.category}
//         </span>
//       </div>

//       {/* Title */}
//       <h3 className="font-semibold text-lg">
//         {event.title}
//       </h3>

//       {/* Speaker Card */}
//       <div className="flex gap-4 p-4 rounded-xl bg-teal-50 border">
//         <div className="h-12 w-12 rounded-full bg-gray-300 shrink-0" />
//         <div>
//           <p className="font-medium text-sm">
//             {event.speaker}
//           </p>
//           <p className="text-xs text-gray-600">
//             {event.speakerTitle}
//           </p>
//           <p className="text-xs text-gray-500">
//             {event.speakerOrg}
//           </p>
//         </div>
//       </div>

//       {/* Meta list */}
//       <ul className="text-xs text-gray-600 space-y-1 list-disc list-inside">
//         <li>Virtual Zoom, Worldwide</li>
//         <li>Date TBA</li>
//         <li>1hr Session + Q&A</li>
//       </ul>

//       {/* Footer */}
//       <div className="flex gap-3 pt-2">
//         <button
//           onClick={() => onNotify(event.title)}
//           className="flex-1 bg-teal-600 text-white rounded-full py-3 text-sm font-medium hover:bg-teal-700"
//         >
//           Notify Me →
//         </button>

//         <button className="flex items-center gap-2 px-4 rounded-full border text-sm hover:bg-gray-50">
//           <Calendar className="h-4 w-4" />
//           Add to Calendar
//         </button>
//       </div>
//     </div>
//   )
// }
'use client'

import Image from 'next/image'
import { Calendar } from 'lucide-react'

type Event = {
  id: number
  title: string
  category: string
  speaker: string
  speakerTitle: string
  speakerOrg: string
  speakerImage?: string
}

const categoryStyles: Record<
  string,
  { badge: string; cardBg: string; text: string }
> = {
  'Bone Health': {
    badge: 'bg-teal-100 text-teal-700',
    cardBg: 'bg-teal-50',
    text: 'text-teal-700',
  },
  'Heart Health': {
    badge: 'bg-orange-100 text-orange-700',
    cardBg: 'bg-orange-50',
    text: 'text-orange-700',
  },
}

function Avatar({
  name,
  image,
}: {
  name: string
  image?: string
}) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)

  if (!image) {
    return (
      <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-600">
        {initials}
      </div>
    )
  }

  return (
    <div className="relative h-12 w-12 overflow-hidden rounded-full border">
      <Image
        src={image}
        alt={name}
        fill
        sizes="48px"
        className="
          object-cover
          transition-transform duration-300
          group-hover:scale-110
        "
      />
    </div>
  )
}

export function UpcomingEventCard({
  event,
  onNotify,
}: {
  event: Event
  onNotify: (title: string) => void
}) {
  const styles =
    categoryStyles[event.category] ||
    categoryStyles['Bone Health']

  return (
    <div
      className="
        group
        border rounded-2xl p-6 bg-white
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg
        space-y-5
      "
    >
      {/* Badges */}
      <div className="flex gap-2 text-xs">
        <span className="px-2 py-1 rounded-full bg-teal-100 text-teal-700">
          Virtual
        </span>
        <span className="px-2 py-1 rounded-full bg-green-100 text-green-700">
          FREE
        </span>
        <span
          className={`px-2 py-1 rounded-full ${styles.badge}`}
        >
          {event.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg text-gray-900">
        {event.title}
      </h3>

      {/* Speaker */}
      <div
        className={`
          flex gap-4 p-4 rounded-xl border
          transition-all duration-300
          group-hover:ring-2 group-hover:ring-teal-200
          ${styles.cardBg}
        `}
      >
        <Avatar
          name={event.speaker}
          image={event.speakerImage}
        />

        <div className="space-y-0.5">
          <p className="font-semibold text-sm text-gray-900">
            {event.speaker}
          </p>

          <p
            className={`text-xs font-medium ${styles.text}`}
          >
            {event.speakerTitle}
          </p>

          <p className="text-xs text-gray-600">
            {event.speakerOrg}
          </p>
        </div>
      </div>

      {/* Meta */}
      <ul className="text-xs text-gray-600 space-y-1 list-disc list-inside">
        <li>Virtual Zoom, Worldwide</li>
        <li>Date TBA</li>
        <li>1hr Session + Q&A</li>
      </ul>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <button
          onClick={() => onNotify(event.title)}
          className="
            flex-1 bg-teal-600 text-white
            rounded-full py-3 text-sm font-medium
            transition-all duration-200
            hover:bg-teal-700 hover:scale-[1.02]
            active:scale-[0.98]
          "
        >
          Notify Me →
        </button>

        <button
          className="
            flex items-center gap-2 px-4
            rounded-full border text-sm
            transition hover:bg-gray-50
          "
        >
          <Calendar className="h-4 w-4" />
          Add to Calendar
        </button>
      </div>
    </div>
  )
}
