'use client'

import { useState } from 'react'
import { FeedbackModal } from './FeedbackModal'

export function FeedbackTrigger() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full border px-5 py-2 text-sm font-medium hover:bg-gray-50"
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
