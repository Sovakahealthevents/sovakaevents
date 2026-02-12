// 'use client'

// import { useState } from 'react'
// import { UpcomingEventsGrid } from '@/components/events/UpcomingEventsGrid'
// import { NotifyModal } from '@/components/events/NotifyModal'


// export default function EventsPage() {
//   const [notifyOpen, setNotifyOpen] = useState(false)
//   const [title, setTitle] = useState('')

//   return (
//     <>
//       <section className="w-full px-6 sm:px-10 lg:px-16 py-12">
//         {/* Header */}
//         <div className="flex justify-between items-start mb-8">
//           <div>
//             <h1 className="text-2xl font-semibold">Upcoming Events</h1>
//             <p className="text-sm text-gray-500">
//               Join our expert-led health education sessions
//             </p>
//           </div>

//           {/* <button className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm hover:bg-gray-50">
//             View Calendar →
//           </button> */}
//         </div>

//         <UpcomingEventsGrid
//           onNotify={(eventTitle) => {
//             setTitle(eventTitle)
//             setNotifyOpen(true)
//           }}
//         />
//       </section>

//       <NotifyModal
//   open={notifyOpen}
//   onClose={() => setNotifyOpen(false)}
//   title={event.title}
//   eventId={event.id}
// />
//     </>
//   )
// }


// 'use client'

// import { useState } from 'react'
// import { UpcomingEventsGrid } from '@/components/events/UpcomingEventsGrid'
// import { NotifyModal } from '@/components/events/NotifyModal'

// export default function EventsPage() {
//   const [notifyOpen, setNotifyOpen] = useState(false)
//   const [title, setTitle] = useState("")
//   const [eventId, setEventId] = useState("")

//   return (
//     <>
//       <section className="w-full px-6 sm:px-10 lg:px-16 py-12">
//         <div className="flex justify-between items-start mb-8">
//           <div>
//             <h1 className="text-2xl font-semibold">Upcoming Events</h1>
//             <p className="text-sm text-gray-500">
//               Join our expert-led health education sessions
//             </p>
//           </div>
//         </div>

//         <UpcomingEventsGrid
//           onNotify={(event) => {
//             setTitle(event.title)
//             setEventId(event.id)
//             setNotifyOpen(true)
//           }}
//         />
//       </section>

//       <NotifyModal
//         open={notifyOpen}
//         onClose={() => setNotifyOpen(false)}
//         title={title}
//         eventId={eventId}
//       />
//     </>
//   )
// }


'use client'

import { useState } from 'react'
import { UpcomingEventsGrid } from '@/components/events/UpcomingEventsGrid'
import { NotifyModal } from '@/components/events/NotifyModal'
import { type Event } from '@/components/events/events-data'

export default function EventsPage() {
  const [notifyOpen, setNotifyOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  return (
    <>
      <section className="w-full px-6 sm:px-10 lg:px-16 py-12">
        <h1 className="text-2xl font-semibold mb-8">
          Upcoming Events
        </h1>

        <UpcomingEventsGrid
          onNotify={(event) => {
            setSelectedEvent(event)
            setNotifyOpen(true)
          }}
        />
      </section>

      {selectedEvent && (
        <NotifyModal
          open={notifyOpen}
          onClose={() => setNotifyOpen(false)}
          title={selectedEvent.title}
          eventId={selectedEvent.id}
        />
      )}
    </>
  )
}
