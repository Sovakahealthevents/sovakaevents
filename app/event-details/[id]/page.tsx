import { notFound } from 'next/navigation'
import { events } from '@/lib/events'
import { EventHeader } from '@/components/events/EventHeader'
import { SpeakersSection } from '@/components/events/SpeakersSection'
import AboutSection from '@/components/events/AboutSection'
import { EventSidebar } from '@/components/events/EventSidebar'

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
  const { id } = await params        // ✅ REQUIRED in Next 15
  const eventId = Number(id)

  if (!eventId) notFound()

  const event = events.find((e) => e.id === eventId)

  if (!event) notFound()

  return (
    <>
      <EventHeader event={event} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">
            <SpeakersSection event={event} />
            <AboutSection event={event} />
          </div>

          <EventSidebar event={event} />
        </div>
      </div>
    </>
  )
}
