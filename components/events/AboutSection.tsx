import { Event } from '@/lib/events'
import { CheckCircle2 } from 'lucide-react'

export default function AboutSection({ event }: { event: Event }) {
  if (!event.aboutEvent) return null

  // Speaker with highlights (Dr. Somasundar)
  const highlightedSpeaker = event.speakers.find(
    (speaker) => speaker.highlights && speaker.highlights.length > 0
  )

  return (
    <section className="space-y-10">
      {/* About This Event */}
      <div>
        <h2 className="text-xl font-semibold mb-3">
          About This Event
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {event.aboutEvent}
        </p>
      </div>

      {/* Key Highlights Section */}
      {highlightedSpeaker && (
        <div
          className="
            relative rounded-xl
            bg-gray-50
            p-6 sm:p-7
            border border-gray-200
            before:absolute before:left-0 before:top-0
            before:h-full before:w-1.5
            before:bg-teal-600
            before:rounded-l-xl
          "
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Key Highlights from {highlightedSpeaker.name}
            &apos;s Session:
          </h3>

          <ul className="space-y-3 text-gray-600">
            {highlightedSpeaker.highlights?.map(
              (point, index) => (
                <li
                  key={index}
                  className="flex gap-3 items-start"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-500 shrink-0" />
                  <span>{point}</span>
                </li>
              )
            )}
          </ul>
        </div>
      )}

      {/* Why Attend */}
      <div>
        <h3 className="text-lg font-semibold mb-4">
          ✨ Why Attend?
        </h3>

        <ul className="grid sm:grid-cols-2 gap-4">
          {[
            'Expert insights from leading specialists',
            'Culturally relevant health education',
            'Live Q&A with experienced oncologists',
            'Actionable prevention and early-detection guidance',
          ].map((item) => (
            <li
              key={item}
              className="flex gap-3 text-gray-600"
            >
              <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
