// import { CalendarDays, Clock, Video, Users } from 'lucide-react'

// export function EventHeader({ event }: { event: any }) {
//   return (
//     <div className="rounded-2xl bg-gradient-to-br from-teal-50 to-orange-50 p-6 mb-8">
//       <h1 className="text-3xl font-bold text-gray-900 mb-4">
//         {event.title}
//       </h1>

//       <div className="flex flex-wrap gap-3">
//         <Meta icon={<CalendarDays />} text={`${event.month} ${event.date}, ${event.dayName}`} />
//         <Meta icon={<Clock />} text={event.time} />
//         <Meta icon={<Video />} text="Virtual Zoom, Worldwide" />
//         <Meta icon={<Users />} text="2 Expert Speakers" />
//       </div>
//     </div>
//   )
// }

// function Meta({ icon, text }: any) {
//   return (
//     <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-gray-700 shadow-sm">
//       <span className="text-teal-600">{icon}</span>
//       {text}
//     </div>
//   )
// }

import {
  CalendarDays,
  Clock,
  Video,
  Users,
  Star,
  Globe,
} from 'lucide-react'

export function EventHeader({ event }: { event: any }) {
  return (
    <section className="relative overflow-hidden">
      <div className="rounded-3xl bg-gradient-to-br from-teal-50 via-white to-orange-50 px-6 sm:px-10 py-10 sm:py-14 mb-10">

        {/* Top badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {event.featured && (
            <Badge
              icon={<Star className="w-4 h-4" />}
              text="Featured"
              className="bg-orange-100 text-orange-700"
            />
          )}

          <Badge
            icon={<Video className="w-4 h-4" />}
            text="Virtual Zoom"
            className="bg-teal-100 text-teal-700"
          />

          {event.free && (
            <Badge
              text="FREE"
              className="bg-green-100 text-green-700"
            />
          )}

          <Badge
            icon={<Globe className="w-4 h-4" />}
            text="Worldwide"
            className="bg-gray-100 text-gray-700"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
         {event.title}
       </h1>

        {/* Meta info */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <MetaBig
            icon={<CalendarDays className="w-5 h-5" />}
            text={`${event.month} ${event.date}, ${event.dayName}`}
          />
          <MetaBig
            icon={<Clock className="w-5 h-5" />}
            text={event.time}
          />
          <MetaBig
            icon={<Users className="w-5 h-5" />}
            text={`${event.speakers?.length || 0} Expert Speakers`}
          />
        </div>
      </div>
    </section>
  )
}

/* ---------- Sub Components ---------- */

function Badge({
  icon,
  text,
  className,
}: {
  icon?: React.ReactNode
  text: string
  className: string
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold ${className}`}
    >
      {icon}
      {text}
    </span>
  )
}

function MetaBig({
  icon,
  text,
}: {
  icon: React.ReactNode
  text: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-base font-medium text-gray-800 shadow-sm">
      <span className="text-teal-600">{icon}</span>
      {text}
    </div>
  )
}
