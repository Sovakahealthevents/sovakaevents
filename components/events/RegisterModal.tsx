'use client'

import { Modal } from '@/components/ui/Modal'
import { CheckCircle } from 'lucide-react'

export function RegisterModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="space-y-5">
        <div className="flex justify-center">
          <CheckCircle className="h-10 w-10 text-teal-600" />
        </div>

        <h2 className="text-xl font-semibold text-center">
          Register for Free
        </h2>

        <p className="text-sm text-center text-gray-500">
          Cancer Awareness Camp: Elderly & Breast Cancer
        </p>

        <div className="space-y-3">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-3 text-sm"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-3 text-sm"
          />

          <label className="flex items-start gap-2 text-xs text-gray-500">
            <input type="checkbox" className="mt-1" />
            I agree to the Terms of Service and Privacy Policy
          </label>

          <button className="w-full py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700">
            Complete Registration
          </button>
        </div>
      </div>
    </Modal>
  )
}
