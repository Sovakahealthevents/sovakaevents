export function SpeakerCard({ speaker }: { speaker: any }) {
  const isFeatured = speaker.role === 'featured'

  return (
    <div
      className={`rounded-xl border p-5 ${
        isFeatured ? 'bg-orange-50' : 'bg-teal-50'
      }`}
    >
      <span
        className={`text-xs font-semibold ${
          isFeatured ? 'text-orange-600' : 'text-teal-600'
        }`}
      >
        {isFeatured ? 'FEATURED SPEAKER' : 'OPENING SPEAKER'}
      </span>

      <h3 className="font-semibold mt-1">{speaker.name}</h3>
      {speaker.credentials && (
        <p className="text-sm text-gray-700">
          {speaker.credentials}
        </p>
      )}

      {speaker.bio && (
        <p className="text-sm text-gray-600 mt-2">
          {speaker.bio}
        </p>
      )}

      {speaker.topic && (
        <div className="mt-3 rounded-lg bg-white/60 p-3 text-sm">
          <strong>Topic:</strong> {speaker.topic}
        </div>
      )}
    </div>
  )
}
