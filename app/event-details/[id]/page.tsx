// import { notFound } from 'next/navigation'
// import { events } from '@/lib/events'
// import { EventHeader } from '@/components/events/EventHeader'
// import { SpeakersSection } from '@/components/events/SpeakersSection'
// import AboutSection from '@/components/events/AboutSection'
// import { EventSidebar } from '@/components/events/EventSidebar'

// export function generateStaticParams() {
//   return events.map((event) => ({
//     id: event.id.toString(),
//   }))
// }

// type PageProps = {
//   params: Promise<{
//     id: string
//   }>
// }

// export default async function EventDetailsPage({ params }: PageProps) {
//   const { id } = await params        // ✅ REQUIRED in Next 15
//   const eventId = Number(id)

//   if (!eventId) notFound()

//   const event = events.find((e) => e.id === eventId)

//   if (!event) notFound()

//   return (
//     <>
//       <EventHeader event={event} />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
//         <div className="grid lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-10">
//             <SpeakersSection event={event} />
//             <AboutSection event={event} />
//           </div>

//           <EventSidebar event={event} />
//         </div>
//       </div>
//     </>
//   )
// }

import { notFound } from 'next/navigation'
import { events } from '@/lib/events'
import { EventHeader } from '@/components/events/EventHeader'
import { SpeakersSection } from '@/components/events/SpeakersSection'
import AboutSection from '@/components/events/AboutSection'
import { EventSidebar } from '@/components/events/EventSidebar'
import { AlertTriangle } from 'lucide-react'

export function generateStaticParams() {
  return events.map((event) => ({
    id: event.id.toString(),
  }))
}

type PageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function EventDetailsPage({ params }: PageProps) {
  const { id } = await params
  const eventId = Number(id)

  if (!eventId) notFound()

  const event = events.find((e) => e.id === eventId)

  if (!event) notFound()

  return (
    <main className="bg-white text-lg leading-relaxed">
      {/* Header */}
      <EventHeader event={event} />

      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content */}
          <section className="lg:col-span-2 space-y-12">
            <SpeakersSection event={event} />
            <AboutSection event={event} />
            <div className="flex items-start gap-3 rounded-xl border border-yellow-300 bg-yellow-50 px-5 py-4 text-base text-yellow-900">
        <AlertTriangle className="w-6 h-6 text-yellow-600 mt-0.5" />
        <p>
          <span className="font-semibold">Disclaimer:</span>Educational only. Not medical advice. Always  consult your physician 
        </p>
      </div>
          </section>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <EventSidebar event={event} />
          </aside>
        </div>
      </div>
    </main>
  )
}
