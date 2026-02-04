// 'use client'

// import Image from 'next/image'
// import { Calendar, Clock, Video } from 'lucide-react'
// import Link from 'next/link'

// export default function FeaturedEvent() {
//     const eventId = 1
//   return (
//     <section className="px-6 lg:px-16 py-16 bg-white">
      
//       {/* Header */}
//       <div className="flex items-center justify-between mb-8">
//         <div>
//           <p className="flex items-center gap-2 text-orange-500 font-medium text-sm mb-1">
//             ⭐ Featured Event
//           </p>
//           <h2 className="text-3xl font-bold text-gray-900">
//             Don&apos;t Miss This
//           </h2>
//         </div>

       
//       </div>

//       {/* Card */}
//       <div className="flex flex-col lg:flex-row rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        
//         {/* LEFT IMAGE */}
//         <div className="relative w-full lg:w-[40%] bg-gradient-to-br from-pink-200 to-teal-200">
          
//           {/* Date Badge */}
//           <div className="absolute top-4 left-4 bg-white rounded-xl px-4 py-3 text-center shadow">
//             <p className="text-sm font-semibold text-teal-600">MAR</p>
//             <p className="text-3xl font-bold text-teal-700">02</p>
//             <p className="text-xs text-gray-500">2026</p>
//           </div>

//           <Image
//             src="/cancer-awareness.jpg"
//             alt="Cancer Awareness Camp"
//             width={500}
//             height={400}
//             className="w-full h-full object-cover"
//             priority
//           />
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="flex-1 p-6 lg:p-10 bg-gradient-to-br from-white to-teal-50">
          
//           {/* Tags */}
//           <div className="flex flex-wrap gap-2 mb-4">
//             <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-semibold">
//               Featured
//             </span>
//             <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold">
//               FREE
//             </span>
//             <span className="px-3 py-1 rounded-full border text-xs font-medium text-gray-600">
//               Cancer Awareness
//             </span>
//             <span className="px-3 py-1 rounded-full bg-orange-100 text-orange text-xs font-semibold">
//               🇮🇳 In Hindi
//             </span>
            
//           </div>

//           {/* Title */}
//           <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
//             Cancer Awareness Camp: Elderly & Breast Cancer
//           </h3>

//           {/* Speaker 1 */}
//           <div className="flex items-start gap-4 p-4 rounded-xl bg-teal-50 border border-teal-100 mb-4">
//             <Image
//               src="/somasundar.png"
//               alt="Dr. Ponnandai S. Somasundar"
//               width={48}
//               height={48}
//               className="rounded-full"
//             />
//             <div>
//               <p className="font-semibold text-gray-900">
//                 Dr. Ponnandai Somasundar
//               </p>
//               <p className="text-sm text-teal-600 font-medium">
//                 MD – Surgical Oncologist | Roger Williams Medical Center
//               </p>
//               <p className="text-sm text-teal-600 font-medium">
//                  36+ Years Experience
//               </p>
//               <p className="text-xs text-gray-600 mt-1">
//                 Topic: Cancer in Elderly
//               </p>
//             </div>
//           </div>

//           {/* Speaker 2 */}
//           <div className="flex items-start gap-4 p-4 rounded-xl bg-teal-50 border border-teal-100 mb-6">
//             <Image
//               src="/raghu.png"
//               alt="Dr. P. Raghu Ram"
//               width={48}
//               height={48}
//               className="rounded-full"
//             />
//             <div>
//               <p className="font-semibold text-gray-900">
//                 Dr. P. Raghu Ram OBE
//               </p>
//               <p className="text-sm text-orange-500 font-medium">
//                 Padma Shri Awardee • Consultant Surgeon
//               </p>
//               <p className="text-xs text-gray-600 mt-1">
//                 Topic: ABCs of Breast Cancer
//               </p>
//             </div>
//           </div>

//           {/* Supported By */}
//           <p className="text-sm text-gray-500 mb-4">
//             Supported by
//             <br />
//             <span className="text-orange-500 font-medium">
//               Shree Saibaba Sansthan Trust, Shirdi
//             </span>{' '}
//             &{' '}
//             <span className="text-teal-600 font-medium">
//               KIMS-USHALAKSHMI Centre for Breast Diseases
//             </span>
//           </p>

//           {/* Meta */}
//           <div className="flex flex-wrap gap-4 mb-6">
//             <div className="flex items-center gap-2 text-gray-700 text-sm">
//               <Video className="w-4 h-4 text-teal-600" />
//               Virtual Zoom, Worldwide
//             </div>

//             <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-600 text-white text-sm font-medium">
//               <Calendar className="w-4 h-4" />
//               Mar 02, 2026
//               <Clock className="w-4 h-4 ml-2" />
//               10:00 AM IST
//             </div>

//             <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-medium">
//               1hr Session + Q&amp;A
//             </span>
//           </div>

//           {/* Actions */}
//           <div className="flex flex-wrap gap-4">
//             <Link
//           href={`/event-details/${eventId}`}
//           className="rounded-full bg-teal-600 px-8 py-3 text-white font-medium hover:bg-teal-700 transition"
//         > Register Now →

//         </Link>
           
             
           
            

//             <button className="rounded-full border border-teal-600 px-8 py-3 text-teal-600 font-medium hover:bg-teal-50 transition">
//               Add to Calendar
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


'use client'

import Image from 'next/image'
import { Calendar, Clock, Video, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export default function FeaturedEvent() {
  const eventId = 1

  return (
    <section className="px-6 lg:px-16 py-16 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="flex items-center gap-2 text-orange-500 font-medium text-sm mb-1">
            ⭐ Featured Event
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Don&apos;t Miss This
          </h2>
        </div>
      </div>

      {/* Event Card */}
      <div className="flex flex-col lg:flex-row rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-6">
        
        {/* LEFT IMAGE */}
        <div className="relative w-full lg:w-[40%] h-[260px] lg:h-auto bg-gradient-to-br from-pink-200 to-teal-200">
          {/* Date Badge */}
          <div className="absolute top-4 left-4 bg-white rounded-xl px-4 py-3 text-center shadow z-10">
            <p className="text-sm font-semibold text-teal-600">MAR</p>
            <p className="text-3xl font-bold text-teal-700">02</p>
            <p className="text-xs text-gray-500">2026</p>
          </div>

          <Image
            src="/cancer-awareness.jpg"
            alt="Cancer Awareness Camp"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 p-6 lg:p-10 bg-gradient-to-br from-white to-teal-50">
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-semibold">
              Featured
            </span>
            <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold">
              FREE
            </span>
            <span className="px-3 py-1 rounded-full border text-xs font-medium text-gray-600">
              Cancer Awareness
            </span>
            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold">
              🇮🇳 In Hindi
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            Cancer Awareness Camp: Elderly & Breast Cancer
          </h3>

          {/* Speaker 1 */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-teal-50 border border-teal-100 mb-4">
            <Image
              src="/somasundar.png"
              alt="Dr. Ponnandai S. Somasundar"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-900">
                Dr. Ponnandai Somasundar
              </p>
              <p className="text-sm text-teal-600 font-medium">
                MD – Surgical Oncologist | Roger Williams Medical Center
              </p>
              <p className="text-sm text-teal-600 font-medium">
                36+ Years Experience
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Topic: Cancer in Elderly
              </p>
            </div>
          </div>

          {/* Speaker 2 */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-teal-50 border border-teal-100 mb-6">
            <Image
              src="/raghu.png"
              alt="Dr. P. Raghu Ram"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-900">
                Dr. P. Raghu Ram OBE
              </p>
              <p className="text-sm text-orange-500 font-medium">
                Padma Shri Awardee • Consultant Surgeon
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Topic: ABCs of Breast Cancer
              </p>
            </div>
          </div>

          {/* Supported By */}
          <p className="text-sm text-gray-500 mb-4">
            Supported by
            <br />
            {/* <span className="text-orange-500 font-medium">
              Shree Saibaba Sansthan Trust, Shirdi
            </span>{' '}
            &{' '} */}
            <span className="text-teal-600 font-medium">
              KIMS-USHALAKSHMI Centre for Breast Diseases
            </span>
          </p>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 mb-6">
            {/* Virtual Zoom - SAME STYLE AS DATE */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-600 text-white text-sm font-medium">
              <Video className="w-4 h-4" />
              Virtual Zoom, Worldwide
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-600 text-white text-sm font-medium">
              <Calendar className="w-4 h-4" />
              Mar 02, 2026
              <Clock className="w-4 h-4 ml-2" />
              10:00 AM IST
            </div>

            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-medium">
              1hr Session + Q&amp;A
            </span>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/event-details/${eventId}`}
              className="rounded-full bg-teal-600 px-8 py-3 text-white font-medium hover:bg-teal-700 transition"
            >
              Register Now →
            </Link>

            {/* <button className="rounded-full border border-teal-600 px-8 py-3 text-teal-600 font-medium hover:bg-teal-50 transition">
              Add to Calendar
            </button> */}
          </div>
        </div>
      </div>

      {/* DISCLAIMER */}
      <div className="flex items-center gap-3 rounded-xl border border-yellow-300 bg-yellow-50 px-4 py-3 text-sm text-yellow-900">
        <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
        <p>
          <span className="font-semibold">Disclaimer:</span> Educational session only. 
          Not a substitute for medical advice. Consult your healthcare provider.
        </p>
      </div>
    </section>
  )
}
