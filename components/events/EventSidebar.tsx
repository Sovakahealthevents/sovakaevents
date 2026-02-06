// 'use client'

// import { useState } from 'react'
// import {
//   MapPin,
//   CalendarDays,
//   Clock,
//   CalendarPlus,
//   Share2,
//   MessageCircle,
//   Mail,
//   Link2,
// } from 'lucide-react'
// import { Event } from '@/lib/events'
// import { RegisterModal } from './RegisterModal'


// export function EventSidebar({ event }: { event: Event }) {
//   const [open, setOpen] = useState(false)

//   const downloadICS = () => {
//     const start = new Date(`${event.month} ${event.date}`)
//     const ics = `
// BEGIN:VCALENDAR
// VERSION:2.0
// BEGIN:VEVENT
// SUMMARY:${event.title}
// DESCRIPTION:${event.description ?? ''}
// LOCATION:${event.location}
// DTSTART:${start.toISOString().replace(/[-:]/g, '').split('.')[0]}
// END:VEVENT
// END:VCALENDAR
//     `.trim()

//     const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
//     const url = URL.createObjectURL(blob)

//     const link = document.createElement('a')
//     link.href = url
//     link.download = `${event.title}.ics`
//     link.click()

//     URL.revokeObjectURL(url)
//   }

//   return (
//     <>
//       <aside className="lg:sticky lg:top-24">
//         <div className="border rounded-2xl p-6 bg-white shadow-sm space-y-6">
//           <h3 className="font-semibold text-gray-900">Event Details</h3>

//           {/* Details */}
//           <div className="space-y-3 text-sm text-gray-700">
//             <div className="flex gap-2 items-start">
//               <MapPin className="h-4 w-4 text-teal-600 mt-0.5" />
//               <div>
//                 <p>{event.location}</p>
//                 {event.locationType && (
//                   <p className="text-xs text-gray-500">
//                     {event.locationType}
//                   </p>
//                 )}
//               </div>
//             </div>

//             <div className="flex gap-2 items-center p-3 rounded-lg bg-orange-50">
//               <CalendarDays className="h-4 w-4 text-orange-600" />
//               <div>
//                 <p className="font-medium">
//                   {event.month} {event.date}
//                 </p>
//                 <p className="text-xs text-gray-500">
//                   {event.dayName}
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-2 items-center p-3 rounded-lg bg-teal-50">
//               <Clock className="h-4 w-4 text-teal-600" />
//               <p className="font-medium">{event.time}</p>
//             </div>
//           </div>

//           {/* CTA */}
//           <button
//             onClick={() => setOpen(true)}
//             className="w-full py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
//           >
//             Register Now – It’s Free
//           </button>

//           {/* Calendar */}
//           <button
//             onClick={downloadICS}
//             className="w-full flex items-center justify-center gap-2 py-3 rounded-full border text-sm font-medium hover:bg-gray-50"
//           >
//             <CalendarPlus className="h-4 w-4" />
//             Add to Calendar
//           </button>

//           {/* Share */}
//           <div className="space-y-3 pt-2">
//             <p className="text-sm text-gray-500 text-center flex justify-center gap-2">
//               <Share2 className="h-4 w-4" />
//               Share with family & friends
//             </p>

//             <div className="grid grid-cols-4 gap-2 text-xs">
//               <button className="border rounded-lg py-3 flex flex-col items-center gap-1 hover:bg-gray-50">
//                 <MessageCircle className="h-4 w-4 text-green-600" />
//                 WhatsApp
//               </button>

//               <button className="border rounded-lg py-3 flex flex-col items-center gap-1 hover:bg-gray-50">
//                 <Mail className="h-4 w-4" />
//                 Email
//               </button>

//               <button className="border rounded-lg py-3 flex flex-col items-center gap-1 hover:bg-gray-50">
//                 <Link2 className="h-4 w-4" />
//                 Copy
//               </button>

//               <button className="border rounded-lg py-3 flex flex-col items-center gap-1 hover:bg-gray-50">
//                 <MessageCircle className="h-4 w-4" />
//                 SMS
//               </button>
//             </div>
//           </div>
//         </div>
//       </aside>

//       {/* 🔥 REGISTER MODAL */}
      
//       <RegisterModal open={open} onClose={() => setOpen(false)} />
//     </>
//   )
// }


'use client'

import { useState } from 'react'
import {
  MapPin,
  CalendarDays,
  Clock,
  CalendarPlus,
  Share2,
  MessageCircle,
  Mail,
  Link2,
  Video,
} from 'lucide-react'
import { Event } from '@/lib/events'
import { RegisterModal } from './RegisterModal'

export function EventSidebar({ event }: { event: Event }) {
  const [open, setOpen] = useState(false)

  const eventUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/event-details/${event.id}`
      : ''

  /* ---------- Actions ---------- */

  const downloadICS = () => {
    const start = new Date(`${event.month} ${event.date}`)
    const ics = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.title}
DESCRIPTION:${event.aboutEvent ?? ''}
LOCATION:${event.location}
DTSTART:${start
      .toISOString()
      .replace(/[-:]/g, '')
      .split('.')[0]}
END:VEVENT
END:VCALENDAR
    `.trim()

    const blob = new Blob([ics], {
      type: 'text/calendar;charset=utf-8',
    })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = `${event.title}.ics`
    link.click()

    URL.revokeObjectURL(url)
  }

  const shareWhatsApp = () => {
    const text = `${event.title}\n${eventUrl}`
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      '_blank'
    )
  }

  const shareEmail = () => {
    const subject = event.title
    const body = `${event.title}\n\n${eventUrl}`
    window.location.href = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  const copyLink = async () => {
    await navigator.clipboard.writeText(eventUrl)
    alert('Link copied!')
  }

  return (
    <>
      <aside className="lg:sticky lg:top-24">
        <div className="border rounded-2xl p-6 bg-white shadow-sm space-y-6">

          {/* Header */}
          <h3 className="font-semibold text-gray-900">
            Event Details
          </h3>

          {/* Details */}
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex gap-2 items-start">
              <Video className="h-4 w-4 text-teal-600 mt-0.5" />
              <div>
               <p className="font-semibold text-gray-800">{event.location}</p>

                {event.locationType && (
                  <p className="text-xs text-gray-500">
                    {event.locationType}
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-3 items-center p-4 rounded-xl bg-orange-50">
              <CalendarDays className="h-5 w-5 text-orange-600" />
              <div>
                <p className="font-semibold text-gray-900">
                  {event.month} {event.date}, 2026
                </p>
                <p className="text-xs text-gray-500">
                  {event.dayName}
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-center p-4 rounded-xl bg-teal-50">
              <Clock className="h-5 w-5 text-teal-600" />
              <p className="font-semibold text-gray-900">
                {event.time}
              </p>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => setOpen(true)}
            className="w-full py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
          >
            Register Now – It’s Free
          </button>

          {/* Calendar */}
          {/* <button
            onClick={downloadICS}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-full border text-sm font-medium hover:bg-gray-50"
          >
            <CalendarPlus className="h-4 w-4" />
            Add to Calendar
          </button> */}

          {/* Share */}
          <div className="space-y-4 pt-4 border-t">
            <p className="text-sm text-gray-500 text-center flex justify-center gap-2">
              <Share2 className="h-4 w-4" />
              Share with family & friends
            </p>

            <div className="grid grid-cols-3 gap-3 text-xs">
              <button
                onClick={shareWhatsApp}
                className="border rounded-xl py-3 flex flex-col items-center gap-1 hover:bg-gray-50"
              >
                <MessageCircle className="h-4 w-4 text-green-600" />
                WhatsApp
              </button>

              <button
                onClick={shareEmail}
                className="border rounded-xl py-3 flex flex-col items-center gap-1 hover:bg-gray-50"
              >
                <Mail className="h-4 w-4" />
                Email
              </button>

              <button
                onClick={copyLink}
                className="border rounded-xl py-3 flex flex-col items-center gap-1 hover:bg-gray-50"
              >
                <Link2 className="h-4 w-4" />
                Copy
              </button>
            </div>
          </div>

          {/* Sponsors / Ads */}
          <div className="pt-6 border-t space-y-3">
            <p className="text-xs text-gray-500 text-center">
              Proudly supported by
            </p>

            <div className="rounded-xl bg-orange-50 px-4 py-3 text-center text-sm font-semibold text-orange-700">
              KIMS-USHALAKSHMI Centre for Breast Diseases, Hyderabad, India
            </div>

            <div className="rounded-xl bg-teal-50 px-4 py-3 text-center text-sm font-semibold text-teal-700">
              
              Ushalakshmi Breast Cancer Foundation, Hyderabad, India 
            </div>
          </div>
        </div>
      </aside>

      {/* Register Modal */}
      <RegisterModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  )
}
