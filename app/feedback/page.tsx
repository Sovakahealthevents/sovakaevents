import FeedbackForm from '@/components/feedback/FeedbackForm'

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border p-6 sm:p-8">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Share Your Feedback
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Help us improve your experience
          </p>
        </div>

        <FeedbackForm />

      </div>
    </div>
  )
}
