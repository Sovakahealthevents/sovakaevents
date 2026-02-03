import Image from 'next/image'
import { Event } from '@/lib/events'

export function SpeakersSection({ event }: { event: Event }) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">
        Meet Your Speakers
      </h2>

      <div className="space-y-8">
        {event.speakers.map((speaker) => {
          const isOpening = speaker.role === 'OPENING SPEAKER'

          const roleColor = isOpening
            ? {
                badge: 'text-teal-700 bg-teal-100',
                topicBg: 'bg-teal-50',
                topicBorder: 'border-teal-500',
                topicText: 'text-teal-700',
              }
            : {
                badge: 'text-orange-700 bg-orange-100',
                topicBg: 'bg-orange-50',
                topicBorder: 'border-orange-500',
                topicText: 'text-orange-700',
              }

          return (
            <div
              key={speaker.id}
              className="rounded-xl border border-gray-200 p-6 bg-white"
            >
              {/* Role Badge */}
              <span
                className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${roleColor.badge}`}
              >
                {speaker.role}
              </span>

              {/* Header */}
              <div className="flex items-center gap-4 mt-4">
                {speaker.image && (
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                )}

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {speaker.title}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm text-gray-700 mt-4 leading-relaxed">
                {speaker.bio}
              </p>

              {/* Topic Highlight */}
              <div
                className={`mt-5 rounded-lg border-l-4 p-4 ${roleColor.topicBg} ${roleColor.topicBorder}`}
              >
                <p
                  className={`text-sm font-semibold ${roleColor.topicText}`}
                >
                  Topic: {speaker.topic}
                </p>
                <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                  {speaker.topicDescription}
                </p>
              </div>

              {/* Highlights */}
              {speaker.highlights && (
                <ul className="list-disc pl-5 mt-4 text-sm text-gray-700 space-y-1">
                  {speaker.highlights.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}

              {/* Website */}
              {speaker.website && (
                <a
                  href={speaker.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm font-medium text-teal-600 hover:underline"
                >
                  {speaker.website}
                </a>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
