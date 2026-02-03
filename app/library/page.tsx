'use client'

import Image from 'next/image'

export default function PastEventDetail() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
      {/* HERO */}
      <div className="rounded-2xl overflow-hidden mb-12">
        <div className="relative bg-gradient-to-r from-red-700 via-pink-600 to-purple-700 px-8 lg:px-16 py-14 text-white">
          {/* Logos */}
          <p className="text-sm text-white/80 mb-4 text-center">
            Proudly presented by
          </p>
          <div className="flex justify-center mb-4">
  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur text-white text-sm font-semibold border border-white/30">
    ✅ Completed Event
  </span>
</div>


          <div className="flex justify-center gap-6 mb-6">
            <div className="flex flex-col items-center gap-2">
 <div className="flex gap-6">
  {/* ITEM 1 */}
  <div className="flex flex-col items-center gap-2">
    <div className="bg-white rounded-2xl px-8 py-6 shadow-sm">
      <img
        src="/sovakalogo.png"
        alt="Sovaka Health"
        className="h-10 w-auto"
      />
    </div>
    <span className="text-sm font-semibold text-white">
      Sovaka Health
    </span>
  </div>

  {/* ITEM 2 */}
  <div className="flex flex-col items-center gap-2">
    <div className="bg-white rounded-2xl px-8 py-6 shadow-sm">
      <img
        src="/partners/one.png"
        alt="South Asian Heart Center"
        className="h-10 w-auto"
      />
    </div>
    <span className="text-sm font-semibold text-white text-center">
      South Asian Heart Center
    </span>
  </div>
</div>

</div>



            

            
          </div>

          {/* Title */}
          <h1 className="text-3xl lg:text-4xl font-bold text-center mb-2">
            Halt Heart Attacks! Stop Diabetes!
          </h1>
          <p className="text-center text-white/90 max-w-3xl mx-auto">
            How to Prevent the Twin Epidemics of the South Asian Community?
          </p>
        </div>

        {/* Intro */}
        <div className="bg-white px-6 lg:px-16 py-8 border-b">
          <p className="text-center text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join our expert-led session on heart attack prevention and
            cardiovascular wellness in South Asians. Learn why South Asians
            face higher heart disease risks, how to spot early warning signs,
            and what lifestyle changes can help prevent heart attacks.
          </p>
        </div>
      </div>

      {/* BODY */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT COLUMN – SPEAKER */}
        <div className="bg-red-50 rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border border-gray-200">
    <Image
      src="/molina.jpg" // update path as needed
      alt="Dr. Cesar Molina"
      fill
      className="object-cover"
      sizes="64px"
      priority
    />
  </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Cesar Molina, M.D., FACC
              </h3>
              <p className="text-sm font-medium text-red-700">
                Cardiologist & Internal Medicine Specialist
              </p>
              <p className="text-sm text-gray-600">
                Co-Founder & Medical Director of SAHC at El Camino Hospital
              </p>
            </div>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            An experienced cardiologist at El Camino Hospital with expertise in
            cardiovascular medicine, specializing in South Asian heart health
            and preventive cardiology.
          </p>

          <h4 className="font-semibold text-gray-900 mb-3">
            Education & Training
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>M.D. from Yale University</li>
            <li>Fellowship at Stanford University Medical Center</li>
            <li>Former Stanford Faculty</li>
            <li>Expert on Diet, Exercise, and Stress Reduction</li>
            <li>
              Research: Lifestyle, Longevity, Coronary Artery Disease in South
              Asians
            </li>
            <li>
              Practitioner of Ayurveda and Transcendental Meditation
            </li>
          </ul>

          <div className="mt-6 flex gap-6 text-sm font-medium text-red-700">
            <span className="hover:underline cursor-pointer">
              Learn more about Dr. Molina
            </span>
            <span className="hover:underline cursor-pointer">
              Read Patient Testimonials
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN – DETAILS */}
        <div className="bg-blue-50 rounded-2xl p-8 flex flex-col gap-6">
          {/* Attendance */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Inperson Event In English
            </h4>

            <ul className="text-sm text-gray-700 space-y-3">
              <li>
                📍 <strong>Meeting Room F and G</strong>, El Camino Hospital
                <br />
                2500 Grant Road, Mountain View 94040, California, USA
              </li>
              <li>📅 September 28th,2025</li>
              <li>⏰ 3:00 PM PST</li>
            </ul>
          </div>

         

          {/* Highlight */}
          <div className="bg-blue-100 text-blue-800 text-sm rounded-lg px-4 py-3">
            💙 1-hour educational session including Q&A and an opportunity to
            directly collaborate with cardiology experts
          </div>

          {/* CTA */}
          <button className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold">
            View Recording & Resources
          </button>

          {/* Why Attend */}
          <div className="bg-white rounded-xl p-5 border">
            <h5 className="font-semibold text-gray-900 mb-3">
              🤝 Why Attend?
            </h5>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                Learn from experts in culturally tailored heart health education
              </li>
              <li>Network with peers and professionals</li>
              <li>Take the first step toward a healthier future</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
