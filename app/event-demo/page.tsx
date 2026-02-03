"use client";

import EventCard from "../../components/event-card";

export default function EventDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Event Card
        </h1>
        <p className="text-gray-600 mb-12">
          Single event card component matching the design exactly
        </p>

        <EventCard
          type="Hybrid"
          title="Cancer Awareness in Elderly"
          dayName="Friday"
          date="14"
          month="Feb"
          time="8:30 PM"
          speaker="Dr. Somasundar Ponna..."
          speakerCredentials="MD, MPH, FACS - Chairman..."
          location="Shirdi, Maharashtra"
          locationType="Virtual Globally"
          featured={true}
          free={true}
          onRegister={() => console.log("Register clicked")}
          onShare={() => console.log("Share clicked")}
        />

        <div className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Additional Examples
          </h2>

          <div className="space-y-6">
            <EventCard
              type="Virtual"
              title="Understanding and Preventing Osteoporosis"
              dayName="Thursday"
              date="18"
              month="Jan"
              time="10:00 AM"
              speaker="David"
              speakerCredentials="Sathya Sai International..."
              location="Global (Online)"
              locationType="Virtual Globally"
              featured
              free
            />

            <EventCard
              type="Virtual"
              title="Heart Attack Prevention"
              dayName="Tomorrow"
              date="19"
              month="Jan"
              time="10:00 AM"
              speaker="Dr. Cesar Molina"
              speakerCredentials="MD, FACC - Cardiologist"
              location="Global (Online)"
              featured
              free
            />
          </div>
        </div>
      </div>
    </div>
  );
}

