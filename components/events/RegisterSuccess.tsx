import { CheckCircle } from 'lucide-react'

export function RegisterSuccess({ onClose }: { onClose: () => void }) {
  return (
    <div className="text-center p-6">
      <CheckCircle className="mx-auto h-14 w-14 text-teal-600 mb-4" />
      <h2 className="text-xl font-bold">You’re Registered!</h2>
      <p className="text-gray-600 mt-2">
        Confirmation email has been sent.
      </p>

      <button
        onClick={onClose}
        className="mt-6 rounded-lg bg-teal-600 px-6 py-3 text-white"
      >
        Done
      </button>
    </div>
  )
}
