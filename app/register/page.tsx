"use client"

import React, { useState } from "react"
import {
  MapPin,
  CalendarDays,
  Clock,
  Share2,
  MessageCircle,
  Mail,
  Link2,
  Star,
  CheckCircle2,
  CalendarPlus,
  X,
} from "lucide-react"

export default function EventsPage() {
  const [open, setOpen] = useState(false)
  const [startDateTime, setStartDateTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [requireApproval, setRequireApproval] = useState(false)

  const formatStartDate = (value: string) => {
    if (!value) return "Select start date & time"
    const date = new Date(value)
    if (isNaN(date.getTime())) return "Invalid Date"

    return date.toLocaleString("en-IN", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ startDateTime, endTime, requireApproval })
    setOpen(false)
  }

  return (
    <>
      {/* ================= MAIN PAGE ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ================= LEFT ================= */}
          <div className="md:col-span-2 space-y-6 sm:space-y-8">
            {/* Badges */}
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-600">
                Featured
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700">
                Hybrid
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-600">
                FREE
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Cancer Awareness in Elderly
            </h1>

            {/* Speaker */}
            <div className="flex flex-col sm:flex-row gap-4 p-4 sm:p-5 border rounded-xl bg-white shadow-sm">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-teal-100 text-teal-700 font-bold shrink-0">
                DS
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-gray-900">
                  Dr. Somasundar Ponnandai
                </h3>
                <p className="text-sm text-teal-600">
                  MD, MPH, FACS – Chairman of Surgery
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Distinguished Surgical Oncologist specializing in geriatric
                  oncology.
                </p>
              </div>
            </div>

            {/* About */}
            <section>
              <h2 className="text-lg font-semibold mb-2">About the Event</h2>
              <p className="text-gray-600">
                Join Dr. Somasundar Ponnandai for a comprehensive cancer
                awareness camp focused on early detection, prevention strategies,
                and treatment options for elderly patients.
              </p>
            </section>

            {/* Why Attend */}
            <section>
              <h2 className="text-lg font-semibold mb-3">✨ Why Attend?</h2>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Learn from experts in culturally tailored health education",
                  "Network with peers and professionals",
                  "Take the first step toward a healthier future",
                ].map((text) => (
                  <li key={text} className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </section>

            {/* Ratings */}
            <section>
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                Ratings & Reviews
              </h2>

              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="p-6 bg-gray-50 rounded-xl text-center w-full sm:w-40">
                  <p className="text-3xl font-bold">—</p>
                  <p className="text-sm text-gray-500">0 reviews</p>
                </div>

                <div className="space-y-2 w-full">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <div key={star} className="flex items-center gap-3">
                      <span className="text-sm w-8 flex items-center gap-1">
                        {star}
                        <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                      </span>
                      <div className="h-2 flex-1 bg-gray-200 rounded-full" />
                      <span className="text-sm text-gray-500">0</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* ================= RIGHT ================= */}
          <aside className="md:col-span-1">
            <div className="lg:sticky lg:top-24 border rounded-xl p-5 sm:p-6 bg-white shadow-sm space-y-6">
              <h3 className="font-semibold">Event Details</h3>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex gap-2">
                  <MapPin className="h-4 w-4 text-teal-600" />
                  Shirdi, Maharashtra
                </div>
                <div className="flex gap-2">
                  <CalendarDays className="h-4 w-4 text-teal-600" />
                  February 14, 2025
                </div>
                <div className="flex gap-2">
                  <Clock className="h-4 w-4 text-teal-600" />
                  8:30 PM • 60 min
                </div>
              </div>

              <button
                onClick={() => setOpen(true)}
                className="w-full py-3 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700"
              >
                Register Now
              </button>

              {/* Share */}
              <div className="space-y-2">
                <p className="text-sm text-gray-500 text-center flex justify-center gap-2 items-center">
                  <Share2 className="h-4 w-4" />
                  Share with family & friends
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button className="border rounded-lg py-3 text-sm">
                    <MessageCircle className="inline h-4 w-4 mr-1 text-green-600" />
                    WhatsApp
                  </button>
                  <button className="border rounded-lg py-3 text-sm">
                    <Mail className="inline h-4 w-4 mr-1" />
                    Email
                  </button>
                  <button className="border rounded-lg py-3 text-sm">
                    <Link2 className="inline h-4 w-4 mr-1" />
                    Copy Link
                  </button>
                  <button className="border rounded-lg py-3 text-sm">
                    <MessageCircle className="inline h-4 w-4 mr-1" />
                    SMS
                  </button>
                </div>
              </div>

              <button className="w-full py-3 rounded-lg bg-teal-700 text-white font-semibold flex justify-center gap-2">
                <CalendarPlus className="h-4 w-4" />
                Add to Calendar
              </button>
            </div>
          </aside>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-lg h-[100svh] sm:h-auto sm:max-h-[90vh] rounded-2xl shadow-xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b bg-gray-50">
              <h2 className="font-semibold text-lg">Create Registration</h2>
              <button onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Form */}
            <form
              onSubmit={handleSubmit}
              className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-4"
            >
              <input
                required
                placeholder="Event Name"
                className="w-full border rounded-lg px-4 py-3"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="datetime-local"
                    value={startDateTime}
                    onChange={(e) => setStartDateTime(e.target.value)}
                    className="w-full border rounded-lg px-4 py-3"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {formatStartDate(startDateTime)}
                  </p>
                </div>

                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="w-full border rounded-lg px-4 py-3"
                  required
                />
              </div>

              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  placeholder="Choose Location"
                  className="w-full border rounded-lg pl-11 pr-4 py-3"
                />
              </div>

              <textarea
                rows={3}
                placeholder="Add Description"
                className="w-full border rounded-lg px-4 py-3 resize-none"
              />

              <div className="flex justify-between items-center border rounded-lg px-4 py-3">
                <span className="text-sm font-medium">Require Approval</span>
                <button
                  type="button"
                  onClick={() => setRequireApproval(!requireApproval)}
                  className={`h-6 w-11 rounded-full transition ${
                    requireApproval ? "bg-teal-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`block h-5 w-5 bg-white rounded-full transition ${
                      requireApproval ? "translate-x-5" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <select className="border rounded-lg px-4 py-3 bg-white">
                  <option>Free</option>
                  <option>Paid</option>
                </select>
                <select className="border rounded-lg px-4 py-3 bg-white">
                  <option>Public</option>
                  <option>Private</option>
                </select>
              </div>

              <select className="w-full border rounded-lg px-4 py-3 bg-white">
                <option>Unlimited Capacity</option>
                <option>50</option>
                <option>100</option>
                <option>200</option>
              </select>

            </form>

            {/* Footer */}
            <div className="border-t bg-white px-4 sm:px-6 py-3">
              <div className="flex gap-3">
                <button
                  onClick={() => setOpen(false)}
                  className="w-1/2 border rounded-lg py-3 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-1/2 bg-teal-600 text-white rounded-lg py-3 font-semibold"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
