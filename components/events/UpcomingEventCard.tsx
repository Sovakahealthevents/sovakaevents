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
// 'use client'

// import Image from 'next/image'
// import { Calendar } from 'lucide-react'

// type Event = {
//   id: number
//   title: string
//   category: string
//   speaker: string
//   speakerTitle: string
//   speakerOrg: string
//   speakerImage?: string
// }

// const categoryStyles: Record<
//   string,
//   { badge: string; cardBg: string; text: string }
// > = {
//   'Bone Health': {
//     badge: 'bg-teal-100 text-teal-700',
//     cardBg: 'bg-teal-50',
//     text: 'text-teal-700',
//   },
//   'Heart Health': {
//     badge: 'bg-orange-100 text-orange-700',
//     cardBg: 'bg-orange-50',
//     text: 'text-orange-700',
//   },
// }

// function Avatar({
//   name,
//   image,
// }: {
//   name: string
//   image?: string
// }) {
//   const initials = name
//     .split(' ')
//     .map((n) => n[0])
//     .join('')
//     .slice(0, 2)

//   if (!image) {
//     return (
//       <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-600">
//         {initials}
//       </div>
//     )
//   }

//   return (
//     <div className="relative h-12 w-12 overflow-hidden rounded-full border">
//       <Image
//         src={image}
//         alt={name}
//         fill
//         sizes="48px"
//         className="
//           object-cover
//           transition-transform duration-300
//           group-hover:scale-110
//         "
//       />
//     </div>
//   )
// }

// export function UpcomingEventCard({
//   event,
//   onNotify,
// }: {
//   event: Event
//   onNotify: (title: string) => void
// }) {
//   const styles =
//     categoryStyles[event.category] ||
//     categoryStyles['Bone Health']

//   return (
//     <div
//       className="
//         group
//         border rounded-2xl p-6 bg-white
//         shadow-sm
//         transition-all duration-300
//         hover:-translate-y-1 hover:shadow-lg
//         space-y-5
//       "
//     >
//       {/* Badges */}
//       <div className="flex gap-2 text-xs">
//         <span className="px-2 py-1 rounded-full bg-teal-100 text-teal-700">
//           Virtual
//         </span>
//         <span className="px-2 py-1 rounded-full bg-green-100 text-green-700">
//           FREE
//         </span>
//         <span
//           className={`px-2 py-1 rounded-full ${styles.badge}`}
//         >
//           {event.category}
//         </span>
//       </div>

//       {/* Title */}
//       <h3 className="font-semibold text-lg text-gray-900">
//         {event.title}
//       </h3>

//       {/* Speaker */}
//       <div
//         className={`
//           flex gap-4 p-4 rounded-xl border
//           transition-all duration-300
//           group-hover:ring-2 group-hover:ring-teal-200
//           ${styles.cardBg}
//         `}
//       >
//         <Avatar
//           name={event.speaker}
//           image={event.speakerImage}
//         />

//         <div className="space-y-0.5">
//           <p className="font-semibold text-sm text-gray-900">
//             {event.speaker}
//           </p>

//           <p
//             className={`text-xs font-medium ${styles.text}`}
//           >
//             {event.speakerTitle}
//           </p>

//           <p className="text-xs text-gray-600">
//             {event.speakerOrg}
//           </p>
//         </div>
//       </div>

//       {/* Meta */}
//       <ul className="text-xs text-gray-600 space-y-1 list-disc list-inside">
//         <li>Virtual Zoom, Worldwide</li>
//         <li>Date TBA</li>
//         <li>1hr Session + Q&A</li>
//       </ul>

//       {/* Actions */}
//       <div className="flex gap-3 pt-2">
//         <button
//           onClick={() => onNotify(event.title)}
//           className="
//             flex-1 bg-teal-600 text-white
//             rounded-full py-3 text-sm font-medium
//             transition-all duration-200
//             hover:bg-teal-700 hover:scale-[1.02]
//             active:scale-[0.98]
//           "
//         >
//           Notify Me →
//         </button>

//         <button
//           className="
//             flex items-center gap-2 px-4
//             rounded-full border text-sm
//             transition hover:bg-gray-50
//           "
//         >
//           <Calendar className="h-4 w-4" />
//           Add to Calendar
//         </button>
//       </div>
//     </div>
//   )
// }


// 'use client'

// import { Button } from '@/components/ui/button'
// import { Video, Calendar } from 'lucide-react'
// import { useRouter } from 'next/navigation'

// type Event = {
//   id: number
//   title: string
//   category: string
//   tags: string[]
//   speaker: {
//     name: string
//     title: string
//     org: string
//     image: string
//   }
//   highlights: string[]
//   meta: {
//     mode: string
//     date: string
//     duration: string
//   }
// }

// export function UpcomingEventCard({
//   event,
//   onNotify,
// }: {
//   event: Event
//   onNotify: (title: string) => void
// }) {
//   const router = useRouter()

//   return (
//     <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition w-full">

//       {/* TAGS */}
//       <div className="flex flex-wrap gap-2 mb-4">
//         {event.tags.map((tag) => (
//           <span
//   key={tag}
//   className={`px-3 py-1 rounded-full text-xs font-semibold
//     ${
//       tag === 'Virtual'
//         ? 'bg-teal-100 text-teal-700'
//         : tag === 'FREE'
//         ? 'bg-green-500 text-white'
//         : tag === 'Hindi' || tag === 'English' || tag === 'Telugu'
//         ? 'bg-orange-100 text-orange-700'
//         : 'bg-gray-100 text-gray-700'
//     }`}
// >
//   {tag}
// </span>

//         ))}

//         <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
//           {event.category}
//         </span>
//       </div>

//       {/* TITLE */}
//       <h2 className="text-xl font-bold text-gray-900 leading-snug mb-4">
//         {event.title}
//       </h2>

//       {/* SPEAKER CARD */}
//       <div className="flex gap-4 bg-teal-50 rounded-xl p-4 mb-4">
//         <img
//           src={event.speaker.image}
//           alt={event.speaker.name}
//           className="w-14 h-14 rounded-full object-cover"
//         />

//         <div>
//           <p className="font-bold text-gray-900">
//             {event.speaker.name}
//           </p>
//           <p className="text-sm text-teal-700 font-medium">
//             {event.speaker.title}
//           </p>
//           <p className="text-sm text-gray-600">
//             {event.speaker.org}
//           </p>
//         </div>
//       </div>

//       {/* HIGHLIGHTS */}
//       <ul className="text-sm text-gray-600 space-y-1 mb-5 list-disc pl-5">
//         {event.highlights.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>

//       {/* META STRIP (HORIZONTAL HIGHLIGHT) */}
//       <div className="flex flex-wrap items-center gap-3 bg-teal-50 border border-teal-100 rounded-xl px-4 py-3 mb-5 text-sm">

//         <span className="flex items-center gap-2 text-teal-700 font-semibold">
//           <Video size={16} />
//           {event.meta.mode}
//         </span>

//         <span className="flex items-center gap-2 text-gray-600">
//           <Calendar size={16} />
//           {event.meta.date}
//         </span>

//         <span className="ml-auto px-3 py-1 rounded-full bg-orange-100 text-orange-600 font-semibold text-xs">
//           {event.meta.duration}
//         </span>
//       </div>

//       {/* CTA */}
//       <div className="flex gap-3">
//         <Button
//           className="flex-1 bg-teal-700 hover:bg-teal-800 text-white rounded-xl py-5 text-sm font-semibold"
//           onClick={() => onNotify(event.title)}
//         >
//           Notify Me →
//         </Button>

//         <Button
//           variant="outline"
//           className="rounded-xl px-5 text-sm font-semibold"
//           onClick={() => router.push(`/event-details/${event.id}`)}
//         >
//           Add to Calendar
//         </Button>
//       </div>
//     </div>
//   )
// }

'use client'

import { Button } from '@/components/ui/button'
import { Video, Calendar, Globe } from 'lucide-react'
import { useRouter } from 'next/navigation'
type Speaker = {
  name: string
  title: string
  org: string
  image: string
}

type Event = {
  id: number
  title: string
  category: string
  tags: string[]
  speakers: Speaker[]
  highlights: string[]
  meta: {
    mode: string
    date: string
    duration: string
    platform?: string
    region?: string
  }
}

export function UpcomingEventCard({
  event,
  onNotify,
}: {
  event: Event
  onNotify: (title: string) => void
}) {
  const router = useRouter()

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition w-full flex flex-col">

      {/* TOP CONTENT */}
      <div>
        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mb-4">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full text-xs font-semibold
                ${
                  tag === 'Virtual'
                    ? 'bg-teal-100 text-teal-700'
                    : tag === 'FREE'
                    ? 'bg-green-500 text-white'
                    : tag === 'Hindi' || tag === 'English' || tag === 'Telugu'
                    ? 'bg-orange-100 text-orange-700'
                    : 'bg-gray-100 text-gray-700'
                }`}
            >
              {tag}
            </span>
          ))}

          <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
            {event.category}
          </span>
        </div>

        {/* TITLE */}
        {/* <h2 className="text-xl font-bold text-gray-900 leading-snug mb-4"> */}
        <h2 className="text-2xl font-bold mb-4">

          {event.title}
        </h2>

        {/* SPEAKER CARD */}
        {/* SPEAKERS */}
<div className="space-y-3 mb-4">
  {event.speakers.map((speaker, index) => (
    <div
      key={index}
      className="flex gap-4 bg-teal-50 rounded-xl p-4"
    >
      <img
        src={speaker.image}
        alt={speaker.name}
        className="w-14 h-14 rounded-full object-cover"
      />
      <div>
        <p className="font-bold text-gray-900">{speaker.name}</p>
        <p className="text-sm text-teal-700 font-medium">
          {speaker.title}
        </p>
        <p className="text-sm text-gray-600">{speaker.org}</p>
      </div>
    </div>
  ))}
</div>


        {/* HIGHLIGHTS */}
        {/* <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5"> */}
        <ul className="text-base text-gray-700 space-y-2 list-disc pl-5">
          {event.highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* BOTTOM FIXED SECTION */}
      <div className="mt-auto pt-6">

        {/* META ROW — CENTERED */}
        <div className="flex flex-wrap justify-center items-center gap-4 bg-teal-50 border border-teal-100 rounded-xl px-4 py-3 mb-4 text-sm">

          <span className="flex items-center gap-2 text-teal-700 font-semibold">
            <Video size={16} />
            {event.meta.mode}
          </span>

          <span className="flex items-center gap-2 text-gray-600">
            <Calendar size={16} />
            {event.meta.date}
          </span>

          <span className="flex items-center gap-2 text-gray-600">
            <Globe size={16} />
            {event.meta.region ?? 'Worldwide'}
          </span>

          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 font-semibold text-xs">
            {event.meta.duration}
          </span>
        </div>

        {/* CTA */}
        <div className="flex gap-3">
          <Button
            className="flex-1 bg-teal-700 hover:bg-teal-800 text-white rounded-xl py-5 text-sm font-semibold"
            onClick={() => onNotify(event.title)}
          >
            Notify Me →
          </Button>

          {/* <Button
            variant="outline"
            className="rounded-xl px-5 text-sm font-semibold"
            onClick={() => router.push(`/event-details/${event.id}`)}
          >
            Add to Calendar
          </Button> */}
        </div>
      </div>
    </div>
  )
}
