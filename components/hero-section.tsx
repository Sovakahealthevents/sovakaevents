// 'use client'

// import Image from 'next/image'
// import { motion } from 'framer-motion'

// export default function HeroSection() {
//   return (
//     <section className="flex flex-col-reverse lg:flex-row items-center gap-12 px-6 sm:px-10 lg:px-16 py-12 lg:py-20">
      
//       {/* LEFT CONTENT */}
//       <motion.div
//         className="flex-1"
//         initial={{ opacity: 0, x: -40 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.7, ease: 'easeOut' }}
//       >
//         <div className="max-w-xl">
          
//           {/* Badge */}
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="inline-block mb-4 rounded-full bg-teal-100 px-4 py-1 text-xs sm:text-sm font-medium text-teal-700"
//           >
//             Expert-Led Health Education Platform
//           </motion.span>

//           {/* Heading */}
//           <h1 className="font-bold leading-tight mb-6">
//             <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-teal-600">
//               Expert Health Guidance
//             </span>
//             <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-orange-500">
//               For Everyone
//             </span>
//           </h1>

//           {/* Description */}
//           <p className="text-base sm:text-lg md:text-xl text-teal-600 italic mb-8 leading-relaxed">
//             We solve the global gap in reliable care by making expert-led
//             education accessible, culturally relevant, and easy to understand.
//           </p>

//           {/* Stats */}
//           <div className="flex flex-wrap gap-8 mt-6">
//             {[
//               { value: '3+', label: 'Expert Speakers' },
//               { value: '30+', label: 'Global Attendees' },
//               { value: '3+', label: 'Health Topics' },
//             ].map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 + index * 0.1 }}
//               >
//                 <p className="text-2xl sm:text-3xl font-bold text-gray-900">
//                   {stat.value}
//                 </p>
//                 <p className="text-xs sm:text-sm text-gray-500">
//                   {stat.label}
//                 </p>
//               </motion.div>
//             ))}
//           </div>

//           {/* Buttons */}
//           <motion.div
//             className="flex flex-wrap gap-4 mt-10"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//           >
//             <button className="flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-sm sm:text-base text-white font-medium hover:bg-teal-700 transition">
//               ▶ Browse Events
//             </button>

//             <button className="rounded-full border border-gray-300 px-6 py-3 text-sm sm:text-base text-gray-700 font-medium hover:bg-gray-100 transition">
//               Become a Partner
//             </button>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* RIGHT IMAGE */}
//       <motion.div
//         className="flex-1 relative w-full max-w-md lg:max-w-none"
//         initial={{ opacity: 0, x: 40 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.7, ease: 'easeOut' }}
//       >
//         <div className="bg-blue-100 rounded-xl overflow-hidden shadow-sm">
//           <Image
//             src="/heroimage.png"
//             alt="Global healthcare professionals"
//             width={600}
//             height={420}
//             className="w-full h-auto"
//             priority
//           />
//           <span>Now in Beta
// </span>
//         </div>
//       </motion.div>
//     </section>
//   )
// }

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="px-6 sm:px-10 lg:px-16 py-12 lg:py-20">
      
      {/* CENTERED BETA BADGE */}
      {/* <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex justify-center mb-10"
      >
        <div className="flex items-center rounded-full bg-white shadow-md border overflow-hidden">
         
          <span className="bg-orange-500 px-4 py-1.5 text-xs font-semibold text-white">
            Now in Beta
          </span>
        </div>
      </motion.div> */}

      {/* CONTENT ROW */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* LEFT – TEXT */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="max-w-xl">
            {/* Badge */}
            <span className="inline-block mb-4 rounded-full bg-teal-100 px-4 py-1 text-xs sm:text-sm font-medium text-teal-700">
              Expert-Led Health Education Platform
            </span>

            {/* Heading */}
            <h1 className="font-bold leading-tight mb-6">
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-teal-600">
                Expert Health Guidance
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-orange-500">
                For Everyone
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-teal-600 italic mb-8 leading-relaxed">
              We solve the global gap in reliable care by making expert-led
              education accessible, culturally relevant, and easy to understand.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-6">
              {[
                { value: '3+', label: 'Expert Speakers' },
                { value: '30+', label: 'Global Attendees' },
                { value: '3+', label: 'Health Topics' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            {/* <div className="flex flex-wrap gap-4 mt-10">
              <button className="rounded-full bg-teal-600 px-6 py-3 text-sm sm:text-base text-white font-medium hover:bg-teal-700 transition">
                ▶ Browse Events
              </button>

              <button className="rounded-full border border-gray-300 px-6 py-3 text-sm sm:text-base text-gray-700 font-medium hover:bg-gray-100 transition">
                Become a Partner
              </button>
            </div> */}
          </div>
        </motion.div>

        {/* RIGHT – IMAGE */}
        {/* RIGHT – IMAGE */}
{/* RIGHT – IMAGE */}
<motion.div
  className="flex-1 w-full max-w-md lg:max-w-none"
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7, ease: 'easeOut' }}
>
  <div className="relative bg-blue-100 rounded-xl overflow-hidden shadow-sm">
    
    {/* Beta Badge IMAGE */}
    {/* <div className="absolute top-4 left-4 z-10">
      <Image
        src="/beta-badge.png"
        alt="Now in Beta"
        width={120}
        height={40}
        className="object-contain"
        priority
      />
    </div> */}

    <Image
      src="/heroimage.png"
      alt="Global healthcare professionals"
      width={600}
      height={420}
      className="w-full h-auto"
      priority
    />
  </div>
</motion.div>

      </div>
    </section>
  )
}
