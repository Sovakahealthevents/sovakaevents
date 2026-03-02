// 'use client'

// import { Smile, Meh, Frown } from 'lucide-react'
// import { useState } from 'react'

// type FeedbackFormProps = {
//   onSubmit?: (data: {
//     rating: number | null
//     message: string
//     email?: string
//   }) => void
// }

// export default function FeedbackForm({ onSubmit }: FeedbackFormProps) {
//   const [rating, setRating] = useState<number | null>(null)
//   const [message, setMessage] = useState('')
//   const [email, setEmail] = useState('')

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()

//     const data = {
//       rating,
//       message,
//       email: email || undefined,
//     }

//     // MVP: console log
//     console.log('Feedback submitted:', data)

//     onSubmit?.(data)

//     // Reset (optional)
//     setRating(null)
//     setMessage('')
//     setEmail('')
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       {/* Rating */}
//       <div className="flex justify-center gap-6">
//         <button
//           type="button"
//           onClick={() => setRating(1)}
//           className={`p-3 rounded-full border transition ${
//             rating === 1 ? 'bg-red-50 border-red-400' : 'hover:bg-gray-50'
//           }`}
//         >
//           <Frown />
//         </button>

//         <button
//           type="button"
//           onClick={() => setRating(2)}
//           className={`p-3 rounded-full border transition ${
//             rating === 2 ? 'bg-yellow-50 border-yellow-400' : 'hover:bg-gray-50'
//           }`}
//         >
//           <Meh />
//         </button>

//         <button
//           type="button"
//           onClick={() => setRating(3)}
//           className={`p-3 rounded-full border transition ${
//             rating === 3 ? 'bg-green-50 border-green-400' : 'hover:bg-gray-50'
//           }`}
//         >
//           <Smile />
//         </button>
//       </div>

//       {/* Message */}
//       <textarea
//         required
//         rows={4}
//         placeholder="What can we improve?"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
//       />

//       {/* Email (optional) */}
//       <input
//         type="countru"
//         placeholder="Country of Residence"
//         value={email}
        
//         className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
//       />
//       <input
//         type="language"
//         placeholder="prefered Language"
//         value={email}
        
//         className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
//       />

//       {/* Submit */}
//       <button
//         type="submit"
//         className="w-full rounded-full bg-teal-600 py-3 text-white font-medium hover:bg-teal-700 transition"
//       >
//         Submit Feedback
//       </button>

//       <p className="text-xs text-gray-400 text-center">
//         We read every response ❤️
//       </p>
//     </form>
//   )
// }

'use client'

import { Smile, Meh, Frown } from 'lucide-react'
import { useState } from 'react'

type FeedbackFormProps = {
  onSubmit?: () => void
}

export default function FeedbackForm({ onSubmit }: FeedbackFormProps) {
  const [rating, setRating] = useState<number | null>(null)
  const [message, setMessage] = useState('')
  const [nextTopic, setNextTopic] = useState('')
  const [country, setCountry] = useState('')
  const [language, setLanguage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!message || message.trim().length < 3) {
      setError('Please enter a valid message.')
      return
    }

    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rating,
          message,
          email: email || null, // if you collect email, pass it here
          country,
          preferred_language: language, // ✅ snake_case
          next_topic: nextTopic,        // ✅ snake_case
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong.')
      } else {
        setSuccess(data.message || 'Feedback submitted ❤️')

        // Reset form
        setRating(null)
        setMessage('')
        setNextTopic('')
        setCountry('')
        setLanguage('')

        // OPTIONAL: close modal after 1.5 seconds
        setTimeout(() => {
          onSubmit?.()
        }, 1500)
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
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

      {/* What Next */}
      <input
        type="text"
        placeholder="What would you like us to cover next?"
        value={nextTopic}
        onChange={(e) => setNextTopic(e.target.value)}
        className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
      <input
  type="email"
  placeholder="Your Email (optional)"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
/>

      {/* Country */}
      <input
        type="text"
        placeholder="Country of Residence"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
      />

      {/* Language */}
      <input
        type="text"
        placeholder="Preferred Language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
      />

      {/* Error */}
      {error && (
        <p className="text-sm text-red-500 text-center">{error}</p>
      )}

      {/* Success */}
      {success && (
        <p className="text-sm text-green-600 text-center font-medium">
          {success}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-teal-600 py-3 text-white font-medium hover:bg-teal-700 transition disabled:opacity-50"
      >
        {loading ? 'Submitting...' : 'Submit Feedback'}
      </button>

      <p className="text-xs text-gray-400 text-center">
        We read every response ❤️
      </p>
    </form>
  )
}