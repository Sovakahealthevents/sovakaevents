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


// 'use client'

// import Image from 'next/image'
// import { Calendar, Clock, Video, AlertTriangle } from 'lucide-react'
// import Link from 'next/link'

// export default function FeaturedEvent() {
//   const eventId = 1

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

//       {/* Event Card */}
//       <div className="flex flex-col lg:flex-row rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-6">
        
//         {/* LEFT IMAGE */}
//         <div className="relative w-full lg:w-[40%] h-[260px] lg:h-auto bg-gradient-to-br from-pink-200 to-teal-200">
//           {/* Date Badge */}
//           <div className="absolute top-4 left-4 bg-white rounded-xl px-4 py-3 text-center shadow z-10">
//             <p className="text-sm font-semibold text-teal-600">MAR</p>
//             <p className="text-3xl font-bold text-teal-700">02</p>
//             <p className="text-xs text-gray-500">2026</p>
//           </div>

//           <Image
//             src="/cancer-awareness.jpg"
//             alt="Cancer Awareness Camp"
//             fill
//             className="object-cover"
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
//             <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold">
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
//                 36+ Years Experience
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
//             {/* <span className="text-orange-500 font-medium">
//               Shree Saibaba Sansthan Trust, Shirdi
//             </span>{' '}
//             &{' '} */}
//             <span className="text-teal-600 font-medium">
//               KIMS-USHALAKSHMI Centre for Breast Diseases
//             </span>
//           </p>

//           {/* Meta */}
//           <div className="flex flex-wrap gap-4 mb-6">
//             {/* Virtual Zoom - SAME STYLE AS DATE */}
//             <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-600 text-white text-sm font-medium">
//               <Video className="w-4 h-4" />
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
//               href={`/event-details/${eventId}`}
//               className="rounded-full bg-teal-600 px-8 py-3 text-white font-medium hover:bg-teal-700 transition"
//             >
//               Register Now →
//             </Link>

//             {/* <button className="rounded-full border border-teal-600 px-8 py-3 text-teal-600 font-medium hover:bg-teal-50 transition">
//               Add to Calendar
//             </button> */}
//           </div>
//         </div>
//       </div>

//       {/* DISCLAIMER */}
//       <div className="flex items-center gap-3 rounded-xl border border-yellow-300 bg-yellow-50 px-4 py-3 text-sm text-yellow-900">
//         <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
//         <p>
//           <span className="font-semibold">Disclaimer:</span> Educational session only. 
//           Not a substitute for medical advice. Consult your healthcare provider.
//         </p>
//       </div>
//     </section>
//   )
// }


// 'use client'

// import Image from 'next/image'
// import { Calendar, Clock, Video, AlertTriangle } from 'lucide-react'
// import Link from 'next/link'
// import { useState } from 'react'

// export default function FeaturedEvent() {
//   const eventId = 1

//   const [interestOpen, setInterestOpen] = useState(false)
//   const [language, setLanguage] = useState('')

//   const submitInterest = () => {
//     console.log({
//       eventId,
//       language,
//     })

//     setInterestOpen(false)
//     setLanguage('')
//     alert('Thanks! We’ll notify you.')
//   }

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

//       {/* Event Card */}
//       <div className="flex flex-col lg:flex-row rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-6">
        
//         {/* LEFT IMAGE */}
//         <div className="relative w-full lg:w-[40%] h-[260px] lg:h-auto bg-gradient-to-br from-pink-200 to-teal-200">
//           <div className="absolute top-4 left-4 bg-white rounded-xl px-4 py-3 text-center shadow z-10">
//             <p className="text-sm font-semibold text-teal-600">MAR</p>
//             <p className="text-3xl font-bold text-teal-700">02</p>
//             <p className="text-xs text-gray-500">2026</p>
//           </div>

//           <Image
//             src="/cancer-awareness.jpg"
//             alt="Cancer Awareness Camp"
//             fill
//             className="object-cover"
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
//             <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold">
//               🇮🇳 In Hindi
//             </span>
//           </div>

//           {/* Title */}
//           <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
//             Cancer care in elderly
//           </h3>
//           <p>
//           • Cancer burden among adults over 60 years in the Indian population<br />
//           • Frailty, multimorbidity, and financial toxicity: how they affect treatment and recovery
//         </p>


//           {/* Speakers */}
//           <div className="flex items-start gap-4 p-4 rounded-xl bg-teal-50 border border-teal-100 mb-4 mt-10">
//             <Image src="/somasundar.png" alt="" width={48} height={48} className="rounded-full" />
//             <div>
//               <p className="font-semibold text-gray-900">Dr. Ponnandai Somasundar</p>
//               <p className="text-sm text-teal-600 font-medium">
//                 MD – Surgical Oncologist | Roger Williams Medical Center
//               </p>
//               <p className="text-xs text-gray-600 mt-1">Topic: Cancer in Elderly</p>
//             </div>
//           </div>

//           <div className="flex items-start gap-4 p-4 rounded-xl bg-teal-50 border border-teal-100 mb-6">
//             <Image src="/raghu.png" alt="" width={48} height={48} className="rounded-full" />
//             <div>
//               <p className="font-semibold text-gray-900">Dr. P. Raghu Ram OBE</p>
//               <p className="text-sm text-orange-500 font-medium">
//                 Padma Shri Awardee • Consultant Surgeon
//               </p>
//               <p className="text-xs text-gray-600 mt-1">
//                 Topic: ABCs of Breast Cancer
//               </p>
//             </div>
//           </div>

//           {/* Meta */}
//           <div className="flex flex-wrap gap-4 mb-6">
//             <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-600 text-white text-sm font-medium">
//               <Video className="w-4 h-4" />
//               Virtual Zoom, Worldwide
//             </div>

//             <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-600 text-white text-sm font-medium">
//               <Calendar className="w-4 h-4" />
//               Mar 02, 2026
//               <Clock className="w-4 h-4 ml-2" />
//               10:00 AM IST
//             </div>
//           </div>

//           {/* Actions */}
//           <div className="flex flex-wrap gap-4">
//             <Link
//               href={`/event-details/${eventId}`}
//               className="rounded-full bg-teal-600 px-8 py-3 text-white font-medium hover:bg-teal-700 transition"
//             >
//               Register Now →
//             </Link>

//             <button
//               onClick={() => setInterestOpen(true)}
//               className="rounded-full border border-teal-600 px-8 py-3 text-teal-600 font-medium hover:bg-teal-50 transition"
//             >
//               Get Updates in My Language
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Interest Modal */}
//      {/* Interest Modal */}
// {interestOpen && (
//   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
//     <div className="w-full max-w-md rounded-2xl bg-white p-6 space-y-5 shadow-lg">
      
//       <div>
//         <h3 className="text-lg font-semibold text-gray-900">
//           Get updates about this event
//         </h3>
//         <p className="text-sm text-gray-500 mt-1">
//           We’ll notify you when this event is available in your preferred language.
//         </p>
//       </div>

//       {/* Email */}
//       <div className="space-y-1">
//         <label className="text-sm font-medium text-gray-700">
//           Email address
//         </label>
//         <input
//           type="email"
//           placeholder="you@example.com"
//           className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
//           onChange={(e) =>
//             console.log('email:', e.target.value)
//           }
//         />
//       </div>

//       {/* Language */}
//       <div className="space-y-1">
//         <label className="text-sm font-medium text-gray-700">
//           Preferred language
//         </label>
//         <select
//           value={language}
//           onChange={(e) => setLanguage(e.target.value)}
//           className="w-full rounded-xl border px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//         >
//           <option value="" disabled>
//             Select a language
//           </option>
//           <option value="English">English</option>
//           <option value="Hindi">Hindi</option>
//           <option value="Telugu">Telugu</option>
//           <option value="Tamil">Tamil</option>
//         </select>
//       </div>

//       {/* Actions */}
//       <div className="flex gap-3 pt-2">
//         <button
//           onClick={submitInterest}
//           disabled={!language}
//           className="flex-1 rounded-full bg-teal-600 py-2.5 text-white font-medium hover:bg-teal-700 disabled:opacity-50 disabled:hover:bg-teal-600"
//         >
//           Notify Me
//         </button>
//         <button
//           onClick={() => setInterestOpen(false)}
//           className="flex-1 rounded-full border py-2.5 font-medium hover:bg-gray-50"
//         >
//           Cancel
//         </button>
//       </div>

//       <p className="text-xs text-gray-400 text-center">
//         We’ll only contact you about this event.
//       </p>
//     </div>
//   </div>
// )}


//       {/* Disclaimer */}
//       <div className="flex items-center gap-3 rounded-xl border border-yellow-300 bg-yellow-50 px-4 py-3 text-sm text-yellow-900">
//         <AlertTriangle className="w-5 h-5 text-yellow-600" />
//         <p>
//           <span className="font-semibold">Disclaimer:</span> Educational session only.
//         </p>
//       </div>
//     </section>
//   )
// }


// 'use client'

// import Image from 'next/image'
// import { Calendar, Clock, Video, AlertTriangle } from 'lucide-react'
// import Link from 'next/link'
// import { useState } from 'react'

// export default function FeaturedEvent() {
//   const eventId = 1

//   const [interestOpen, setInterestOpen] = useState(false)
//   const [language, setLanguage] = useState('')

//   const submitInterest = () => {
//     console.log({
//       eventId,
//       language,
//     })

//     setInterestOpen(false)
//     setLanguage('')
//     alert('Thanks! We’ll notify you.')
//   }

//   return (
//     <section className="px-6 lg:px-16 py-16 bg-white text-lg leading-relaxed">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-10">
//         <div>
//           <p className="flex items-center gap-2 text-orange-500 font-medium text-base mb-2">
//             ⭐ Featured Event
//           </p>
//           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
//             Don&apos;t Miss This
//           </h2>
//         </div>
//       </div>

//       {/* Event Card */}
//       <div className="flex flex-col lg:flex-row rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-8">
        
//         {/* LEFT IMAGE */}
//         <div className="relative w-full lg:w-[40%] h-[280px] lg:h-auto bg-gradient-to-br from-pink-200 to-teal-200">
//           <div className="absolute top-4 left-4 bg-white rounded-xl px-5 py-4 text-center shadow z-10">
//             <p className="text-base font-semibold text-teal-600">MAR</p>
//             <p className="text-4xl font-bold text-teal-700">02</p>
//             <p className="text-sm text-gray-500">2026</p>
//           </div>

//           <Image
//             src="/cancer-awareness.jpg"
//             alt="Cancer Awareness Camp"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="flex-1 p-6 lg:p-10 bg-gradient-to-br from-white to-teal-50">
          
//           {/* Tags */}
//           <div className="flex flex-wrap gap-3 mb-6">
//             <span className="px-4 py-1.5 rounded-full bg-orange-500 text-white text-sm font-semibold">
//               Featured
//             </span>
//             <span className="px-4 py-1.5 rounded-full bg-green-500 text-white text-sm font-semibold">
//               FREE
//             </span>
//             <span className="px-4 py-1.5 rounded-full border text-sm font-medium text-gray-700">
//               Cancer Awareness
//             </span>
//             <span className="px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold">
//               🇮🇳 In Hindi
//             </span>
//           </div>

//           {/* Title */}
//           <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
//             Cancer care in elderly
//           </h3>

//           {/* Key Points */}
//           <ul className="list-disc pl-6 space-y-4 text-lg text-gray-800">
//             <li>
//               Cancer burden among adults over 60 years in the Indian population
//             </li>
//             <li>
//               Frailty, multimorbidity, and financial toxicity: how they affect treatment and recovery
//             </li>
//           </ul>

//           {/* Speakers */}
//           <div className="flex items-start gap-4 p-5 rounded-xl bg-teal-50 border border-teal-100 mb-5 mt-10">
//             <Image src="/somasundar.png" alt="" width={56} height={56} className="rounded-full" />
//             <div>
//               <p className="font-semibold text-gray-900 text-lg">
//                 Dr. Ponnandai Somasundar
//               </p>
//               <p className="text-base text-teal-700 font-medium">
//                 MD – Surgical Oncologist | Roger Williams Medical Center
//               </p>
//               <p className="text-sm text-gray-700 mt-1">
//                 Topic: Cancer in Elderly
//               </p>
//             </div>
//           </div>

//           <div className="flex items-start gap-4 p-5 rounded-xl bg-teal-50 border border-teal-100 mb-8">
//             <Image src="/raghu.png" alt="" width={56} height={56} className="rounded-full" />
//             <div>
//               <p className="font-semibold text-gray-900 text-lg">
//                 Dr. P. Raghu Ram OBE
//               </p>
//               <p className="text-base text-orange-600 font-medium">
//                 Padma Shri Awardee • Consultant Surgeon
//               </p>
//               <p className="text-sm text-gray-700 mt-1">
//                 Topic: ABCs of Breast Cancer
//               </p>
//             </div>
//           </div>

//           {/* Meta */}
//           <div className="flex flex-wrap gap-4 mb-8">
//             <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-teal-600 text-white text-base font-medium">
//               <Video className="w-5 h-5" />
//               Virtual Zoom, Worldwide
//             </div>

//             <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-teal-600 text-white text-base font-medium">
//               <Calendar className="w-5 h-5" />
//               Mar 02, 2026
//               <Clock className="w-5 h-5 ml-2" />
//               10:00 AM IST
//             </div>
//           </div>

//           {/* Actions */}
//           <div className="flex flex-wrap gap-4">
//             <Link
//               href={`/event-details/${eventId}`}
//               className="rounded-full bg-teal-600 px-10 py-4 text-lg text-white font-semibold hover:bg-teal-700 transition"
//             >
//               Register Now →
//             </Link>

//             <button
//               onClick={() => setInterestOpen(true)}
//               className="rounded-full border border-teal-600 px-10 py-4 text-lg text-teal-600 font-semibold hover:bg-teal-50 transition"
//             >
//               Get Updates in My Language
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Interest Modal */}
//       {interestOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
//           <div className="w-full max-w-md rounded-2xl bg-white p-6 space-y-5 shadow-lg">
//             <div>
//               <h3 className="text-xl font-semibold text-gray-900">
//                 Get updates about this event
//               </h3>
//               <p className="text-base text-gray-600 mt-2">
//                 We’ll notify you when this event is available in your preferred language.
//               </p>
//             </div>

//             <div>
//               <label className="text-base font-medium text-gray-700">
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 placeholder="you@example.com"
//                 className="w-full rounded-xl border px-4 py-4 text-base focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//             </div>

//             <div>
//               <label className="text-base font-medium text-gray-700">
//                 Preferred language
//               </label>
//               <select
//                 value={language}
//                 onChange={(e) => setLanguage(e.target.value)}
//                 className="w-full rounded-xl border px-4 py-4 text-base bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//               >
//                 <option value="" disabled>
//                   Select a language
//                 </option>
//                 <option value="English">English</option>
//                 <option value="Hindi">Hindi</option>
//                 <option value="Telugu">Telugu</option>
//                 <option value="Tamil">Tamil</option>
//               </select>
//             </div>

//             <div className="flex gap-3 pt-2">
//               <button
//                 onClick={submitInterest}
//                 disabled={!language}
//                 className="flex-1 rounded-full bg-teal-600 py-3 text-lg text-white font-semibold hover:bg-teal-700 disabled:opacity-50"
//               >
//                 Notify Me
//               </button>
//               <button
//                 onClick={() => setInterestOpen(false)}
//                 className="flex-1 rounded-full border py-3 text-lg font-semibold hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//             </div>

//             <p className="text-sm text-gray-500 text-center">
//               We’ll only contact you about this event.
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Disclaimer */}
//       <div className="flex items-center gap-3 rounded-xl border border-yellow-300 bg-yellow-50 px-5 py-4 text-base text-yellow-900 mt-6">
//         <AlertTriangle className="w-6 h-6 text-yellow-600" />
//         <p>
//           <span className="font-semibold">Disclaimer:</span> Educational session only.
//         </p>
//       </div>
//     </section>
//   )
// }

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Calendar, Clock, Video, AlertTriangle } from 'lucide-react'
import { NotifyModal } from './events/NotifyModal'


export default function FeaturedEvent() {
  const eventId = 1

  const [notifyOpen, setNotifyOpen] = useState(false)
  const [notifyTitle, setNotifyTitle] = useState('')

  return (
    <section className="px-6 lg:px-16 py-16 bg-white text-lg leading-relaxed">
      {/* Header */}
      <div className="mb-10">
        <p className="flex items-center gap-2 text-orange-500 font-medium text-base mb-2">
          ⭐ Featured Event
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Don&apos;t Miss This
        </h2>
      </div>

      {/* Event Card */}
      <div className="flex flex-col lg:flex-row rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-10">
        
        {/* Image */}
        <div className="relative w-full lg:w-[40%] h-[280px] lg:h-auto">
          <div className="absolute top-4 left-4 bg-white rounded-xl px-5 py-4 text-center shadow z-10">
            <p className="text-base font-semibold text-teal-600">MAR</p>
            <p className="text-4xl font-bold text-teal-700">02</p>
            <p className="text-sm text-gray-500">2026</p>
          </div>

          <Image
            src="/cancer-awareness.jpg"
            alt="Cancer Awareness Camp"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-6 lg:p-10 bg-gradient-to-br from-white to-teal-50">
          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-orange-500 text-white text-sm font-semibold">
              Featured
            </span>
            <span className="px-4 py-1.5 rounded-full bg-green-500 text-white text-sm font-semibold">
              FREE
            </span>
            <span className="px-4 py-1.5 rounded-full border text-sm font-medium text-gray-700">
              Cancer Awareness
            </span>
            <span className="px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold">
              🇮🇳 In Hindi
            </span>
          </div>

          {/* Title */}
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Cancer Awareness <br />
            Cancer Care in Elderly & Breast Cancer
          </h3>

          {/* Points */}
          {/* <ul className="list-disc pl-6 space-y-4 text-lg text-gray-800">
            <li>
              Cancer burden among adults over 60 years in the Indian population
            </li>
            <li>
              Frailty, multimorbidity, and financial toxicity: how they affect
              treatment and recovery
            </li>
          </ul> */}

          {/* Speakers — NOT REMOVED */}
          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4 p-5 rounded-xl bg-teal-50 border border-teal-100">
              <Image
                src="/somasundar.png"
                alt=""
                width={56}
                height={56}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  Dr. Ponnandai Somasundar
                </p>
                <p className="text-base text-teal-700 font-medium">
                  MD – Surgical Oncologist | Roger Williams Medical Center
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  Topic: Cancer Care in Elderly
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-teal-50 border border-teal-100">
              <Image
                src="/raghu.png"
                alt=""
                width={56}
                height={56}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  Dr. P. Raghu Ram OBE
                </p>
                <p className="text-base text-orange-600 font-medium">
                  Padma Shri Awardee • Consultant Surgeon: KIMS-USHALAKSHMI Centre for Breast Diseases
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  Topic: ABCs of Breast Cancer
                </p>
              </div>
            </div>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 mt-8 mb-8">
            <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-teal-600 text-white text-base font-medium">
              <Video className="w-5 h-5" />
              Virtual Zoom, Worldwide
            </div>

            <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-teal-600 text-white text-base font-medium">
              <Calendar className="w-5 h-5" />
              Mar 02, 2026
              <Clock className="w-5 h-5 ml-2" />
              10:00 AM IST
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/event-details/${eventId}`}
              className="rounded-full bg-teal-600 px-10 py-4 text-lg text-white font-semibold hover:bg-teal-700 transition"
            >
              Register Now →
            </Link>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="flex items-center gap-3 rounded-xl border border-yellow-300 bg-yellow-50 px-5 py-4 text-base text-yellow-900">
        <AlertTriangle className="w-6 h-6 text-yellow-600" />
        <p>
          <span className="font-semibold">Disclaimer:</span> Educational session only.
        </p>
      </div>

      {/* Language Availability — EXACTLY BELOW DISCLAIMER */}
      <div className="mt-6 rounded-xl border border-orange-200 bg-orange-50 px-5 py-4">
        <div className="flex items-start gap-3">
          <span className="text-lg">🌐</span>
          <div>
            <p className="text-base font-semibold text-slate-900">
              Also Coming in English & Telugu.
            </p>
            <p className="text-sm text-slate-600 mt-1">
              Same expert speakers, same life-saving content — in your preferred
              language. Dates to be announced.
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <button
                onClick={() => {
                  setNotifyTitle('Notify me when English sessions are available')
                  setNotifyOpen(true)
                }}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 border hover:bg-slate-50"
              >
                🇬🇧 English — Notify Me
              </button>

              <button
                onClick={() => {
                  setNotifyTitle('Notify me when Telugu sessions are available')
                  setNotifyOpen(true)
                }}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 border hover:bg-slate-50"
              >
                🇮🇳 Telugu — Notify Me
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notify Modal */}
      <NotifyModal
        open={notifyOpen}
        onClose={() => setNotifyOpen(false)}
        title={notifyTitle}
      />
    </section>
  )
}
