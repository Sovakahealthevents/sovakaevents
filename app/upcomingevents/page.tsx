'use client'

import { useState } from 'react'
import { UpcomingEventsGrid } from '@/components/events/UpcomingEventsGrid'
import { NotifyModal } from '@/components/events/NotifyModal'

export default function EventsPage() {
  const [notifyOpen, setNotifyOpen] = useState(false)
  const [title, setTitle] = useState('')

  return (
    <>
      <section className="w-full px-6 sm:px-10 lg:px-16 py-12">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-semibold">Upcoming Events</h1>
            <p className="text-sm text-gray-500">
              Join our expert-led health education sessions
            </p>
          </div>

          {/* <button className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm hover:bg-gray-50">
            View Calendar →
          </button> */}
        </div>

        <UpcomingEventsGrid
          onNotify={(eventTitle) => {
            setTitle(eventTitle)
            setNotifyOpen(true)
          }}
        />
      </section>

      <NotifyModal
        open={notifyOpen}
        onClose={() => setNotifyOpen(false)}
        title={title}
      />
    </>
  )
}
