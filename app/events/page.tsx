"use client";

import {
  CalendarDays,
  Clock,
  Star,
  PlayCircle,
  Video,
  MapPin,
} from "lucide-react";

/* ================= DATA ================= */

const events = [
  {
    type: "LIVE",
    gradient: "from-purple-500 via-pink-500 to-red-500",
    category: "Osteoporosis",
    title: "Understanding Osteoporosis: Prevention and Treatment",
    description:
      "Learn about bone health, risk factors, and evidence-based strategies to prevent and manage osteoporosis.",
    date: "Feb 15, 2026",
    duration: "60 minutes",
    filled: 44,
    doctor: "Dr. Michael Bennett",
    role: "Endocrinologist",
    initials: "DMB",
    cta: "Join Event",
  },
  {
    type: "IRL",
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    category: "Heart Health",
    title: "Heart Health: Understanding Your Risk",
    description:
      "Discover cardiovascular risk factors and actionable steps for heart-healthy living.",
    date: "Feb 22, 2026",
    duration: "90 minutes",
    filled: 45,
    doctor: "Dr. James Rodriguez",
    role: "Cardiologist",
    initials: "DJR",
    cta: "Join Event",
  },
  {
    type: "VOD",
    gradient: "from-red-500 via-orange-500 to-yellow-500",
    category: "Diabetes",
    title: "Managing Type 2 Diabetes: A Comprehensive Guide",
    description:
      "Evidence-based strategies for blood sugar control, nutrition, and lifestyle modifications.",
    date: "Available Now",
    duration: "45 minutes",
    filled: 100,
    doctor: "Dr. Emily Watson",
    role: "Endocrinologist",
    initials: "DEW",
    cta: "Watch Now",
  },
];

/* ================= COMPONENT ================= */

export default function EventCards() {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-10 sm:py-12">
      {/* Header */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-xs sm:text-sm font-medium">
          <CalendarDays className="h-4 w-4" />
          8 Events Available
        </span>

        <span className="flex items-center gap-2 text-green-600 text-xs sm:text-sm">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Live Now
        </span>
      </div>

      {/* Cards Grid */}
      <div
        className="grid gap-6 sm:gap-8 
        [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]"
      >
        {events.map((event, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl sm:rounded-3xl border 
            shadow-md hover:shadow-xl transition overflow-hidden"
          >
            {/* Gradient Header */}
            <div
              className={`relative h-24 sm:h-28 md:h-32 bg-gradient-to-r ${event.gradient}`}
            >
              {/* Type */}
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold flex items-center gap-1">
                  {event.type === "LIVE" && <Video className="h-3 w-3" />}
                  {event.type === "IRL" && <MapPin className="h-3 w-3" />}
                  {event.type === "VOD" && <PlayCircle className="h-3 w-3" />}
                  {event.type}
                </span>
              </div>

              {/* Free badge */}
              <div className="absolute top-3 right-3">
                <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold">
                  FREE!
                </span>
              </div>

              {/* Rating */}
              <div className="absolute bottom-3 left-3 flex gap-1">
                {[1, 2, 3, 4].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
                <Star className="h-4 w-4 text-yellow-400" />
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              {/* Category */}
              <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-medium">
                {event.category}
              </span>

              {/* Title */}
              <h3 className="font-semibold text-base sm:text-lg text-gray-900 leading-snug">
                {event.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">
                {event.description}
              </p>

              {/* Meta */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  {event.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {event.duration}
                </span>
              </div>

              {/* Progress */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Spots Filled</span>
                  <span
                    className={`font-semibold ${
                      event.filled === 100
                        ? "text-red-500"
                        : "text-teal-600"
                    }`}
                  >
                    {event.filled}%
                  </span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      event.filled === 100
                        ? "bg-gradient-to-r from-orange-400 to-red-500"
                        : "bg-gradient-to-r from-teal-500 to-orange-400"
                    }`}
                    style={{ width: `${event.filled}%` }}
                  />
                </div>
              </div>

              {/* Doctor */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-gradient-to-br from-green-600 to-orange-500 text-white flex items-center justify-center text-sm font-semibold">
                  {event.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">
                    {event.doctor} 🏆
                  </p>
                  <p className="text-xs text-gray-500">{event.role}</p>
                </div>
              </div>

              {/* CTA */}
              <button
                className={`w-full py-3 sm:py-3.5 rounded-xl 
                text-sm sm:text-base font-semibold text-white 
                bg-gradient-to-r ${event.gradient}
                active:scale-[0.98] transition`}
              >
                {event.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
