// 'use client'

// import Image from 'next/image'
// import { motion, useAnimation } from 'framer-motion'
// import { useEffect } from 'react'

// const partners = [
//   '/partners/one.png',
//   '/partners/two.jpg',
// ]

// export default function OurPartners() {
//   const controls = useAnimation()

//   useEffect(() => {
//     controls.start({
//       x: ['0%', '-50%'],
//       transition: {
//         ease: 'linear',
//         duration: 20,
//         repeat: Infinity,
//       },
//     })
//   }, [controls])

//   return (
//     <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      
//       {/* Header */}
//       <div className="text-center mb-12 px-6">
//         <h2 className="text-3xl sm:text-4xl font-bold text-teal-600 mb-3">
//           Our Partners
//         </h2>
//         <p className="text-teal-600 max-w-xl mx-auto">
//           Collaborating with leading healthcare organizations worldwide
//         </p>
//       </div>

//       {/* Fade edges */}
//       <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
//       <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

//       {/* Slider */}
//       <div className="relative w-full overflow-hidden">
//         <motion.div
//           className="flex items-center gap-16 w-max"
//           animate={controls}
//           onMouseEnter={() => controls.stop()}
//           onMouseLeave={() =>
//             controls.start({
//               x: ['0%', '-50%'],
//               transition: {
//                 ease: 'linear',
//                 duration: 20,
//                 repeat: Infinity,
//               },
//             })
//           }
//         >
//           {/* Infinite loop by duplicating twice */}
//           {[...partners, ...partners].map((logo, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-center min-w-[160px] sm:min-w-[200px]"
//             >
//               <Image
//                 src={logo}
//                 alt="Partner logo"
//                 width={180}
//                 height={80}
//                 className="h-12 sm:h-14 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
//               />
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

'use client'

import Image from 'next/image'

const partners = [
  '/partners/one.png',
  '/partners/three.png',
]

export default function OurPartners() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      
      {/* Header */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-teal-600 mb-3">
          Our Partners
        </h2>
        <p className="text-teal-600 max-w-xl mx-auto">
          Collaborating with leading healthcare organizations worldwide
        </p>
      </div>

      {/* Logos */}
      <div className="flex flex-wrap items-center justify-center gap-12 px-6">
        {partners.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center"
          >
            <Image
              src={logo}
              alt="Partner logo"
              width={180}
              height={80}
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
