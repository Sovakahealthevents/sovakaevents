'use client'

import { MessageSquare, Handshake } from 'lucide-react'

export default function FeedbackBanner() {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-6">
          {/* MVP Feedback Section - Row 1 */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-lg font-semibold">
                <span className="text-orange-500 italic">Share Your MVP Feedback</span>
                {' '}
                <span className="text-orange-600 font-bold">Win a $50 Gift Card</span>
              </p>
            </div>
          </div>

          {/* Sponsor/Partner Section - Row 2 */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
              <Handshake className="w-5 h-5 text-yellow-600" />
            </div>
            <div className="max-w-4xl">
              <p className="text-base font-semibold text-teal-700 italic mb-0.5">
                Interested in becoming a Sponsor/Partner with us to make a difference globally?
              </p>
              <p className="text-sm text-teal-600 italic">
                Support our mission and reach global audience through expert-led health education
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}