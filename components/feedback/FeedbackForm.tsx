'use client'

import { Smile, Meh, Frown } from 'lucide-react'
import { useState } from 'react'

type FeedbackFormProps = {
  onSubmit?: (data: {
    rating: number | null
    message: string
    email?: string
  }) => void
}

export default function FeedbackForm({ onSubmit }: FeedbackFormProps) {
  const [rating, setRating] = useState<number | null>(null)
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const data = {
      rating,
      message,
      email: email || undefined,
    }

    // MVP: console log
    console.log('Feedback submitted:', data)

    onSubmit?.(data)

    // Reset (optional)
    setRating(null)
    setMessage('')
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Rating */}
      <div className="flex justify-center gap-6">
        <button
          type="button"
          onClick={() => setRating(1)}
          className={`p-3 rounded-full border transition ${
            rating === 1 ? 'bg-red-50 border-red-400' : 'hover:bg-gray-50'
          }`}
        >
          <Frown />
        </button>

        <button
          type="button"
          onClick={() => setRating(2)}
          className={`p-3 rounded-full border transition ${
            rating === 2 ? 'bg-yellow-50 border-yellow-400' : 'hover:bg-gray-50'
          }`}
        >
          <Meh />
        </button>

        <button
          type="button"
          onClick={() => setRating(3)}
          className={`p-3 rounded-full border transition ${
            rating === 3 ? 'bg-green-50 border-green-400' : 'hover:bg-gray-50'
          }`}
        >
          <Smile />
        </button>
      </div>

      {/* Message */}
      <textarea
        required
        rows={4}
        placeholder="What can we improve?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
      />

      {/* Email (optional) */}
      <input
        type="countru"
        placeholder="Country of Residence"
        value={email}
        
        className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
      <input
        type="language"
        placeholder="prefered Language"
        value={email}
        
        className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
      />

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-full bg-teal-600 py-3 text-white font-medium hover:bg-teal-700 transition"
      >
        Submit Feedback
      </button>

      <p className="text-xs text-gray-400 text-center">
        We read every response ❤️
      </p>
    </form>
  )
}
