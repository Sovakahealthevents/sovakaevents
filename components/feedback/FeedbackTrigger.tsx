'use client'

import { useState } from 'react'
import FeedbackModal from './FeedbackModal'

export function FeedbackTrigger() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
      >
        Give Feedback
      </button>

      <FeedbackModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  )
}