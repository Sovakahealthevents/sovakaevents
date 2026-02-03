'use client'

import { X, Smile, Meh, Frown } from 'lucide-react'
import { useState } from 'react'
import FeedbackForm from './FeedbackForm'

export function FeedbackModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [rating, setRating] = useState<number | null>(null)

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 relative shadow-lg">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="mx-auto mb-3 h-10 w-10 flex items-center justify-center rounded-full bg-teal-100 text-teal-600">
            💬
          </div>
          <h2 className="text-lg font-semibold">
            We’d love your feedback
          </h2>
          <p className="text-sm text-gray-500">
            Help us improve your experience
          </p>
        </div>

        {/* Rating */}
        <div className="flex justify-center gap-6 mb-6">
          <button
            onClick={() => setRating(1)}
            className={`p-3 rounded-full border ${
              rating === 1 ? 'bg-red-50 border-red-400' : ''
            }`}
          >
            <Frown />
          </button>
          <button
            onClick={() => setRating(2)}
            className={`p-3 rounded-full border ${
              rating === 2 ? 'bg-yellow-50 border-yellow-400' : ''
            }`}
          >
            <Meh />
          </button>
          <button
            onClick={() => setRating(3)}
            className={`p-3 rounded-full border ${
              rating === 3 ? 'bg-green-50 border-green-400' : ''
            }`}
          >
            <Smile />
          </button>
        </div>

        {/* Form */}
        <FeedbackForm
  onSubmit={() => {
    onClose()
  }}
/>


        <p className="text-xs text-gray-400 text-center mt-4">
          No spam. Just better product ✨
        </p>
      </div>
    </div>
  )
}
