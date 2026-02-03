'use client'

import EventCard from './event-card'
import { events } from '@/lib/events'

export default function UpcomingEvents() {
  return (
    <section className="bg-gray-50 px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard
            key={event.id}
            {...event}
            onRegister={() => {}}
            onShare={() => {}}
          />
        ))}
      </div>
    </section>
  )
}
