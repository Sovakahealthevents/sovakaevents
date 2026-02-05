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


// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'

// const partners = [
//   {
//     logo: '/partners/one.png',
//     url: 'https://www.southasianheartcenter.org',
//   },
//   {
//     logo: '/partners/two.jpg',
//     url: 'https://www.kimshospitals.com',
//   },
//   {
//     logo: '/partners/four.jpeg',
//     url: 'http://www.ubf.org.in',
//   },
// ]


// export default function OurPartners() {
//   return (
//     <section className="py-16 lg:py-24 bg-white">
//       {/* Header */}
//       <div className="text-center mb-12 px-6">
//         <h2 className="text-3xl sm:text-4xl font-bold text-teal-600 mb-3">
//           Our Partners
//         </h2>
//         <p className="text-teal-600 max-w-xl mx-auto">
//           Collaborating with leading healthcare organizations worldwide
//         </p>
//       </div>

//       {/* Logos */}
//       <div className="flex flex-wrap items-center justify-center gap-12 px-6">
//         {partners.map((partner, index) => (
//           <Link
//             key={index}
//             href={partner.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center justify-center transition-transform hover:scale-105"
//           >
//             <Image
//               src={partner.logo}
//               alt="Partner logo"
//               width={180}
//               height={80}
//               className="h-12 sm:h-14 w-auto object-contain"
//             />
//           </Link>
//         ))}
//       </div>
//     </section>
//   )
// }


'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Handshake } from 'lucide-react'

const partners = [
  {
    logo: '/partners/one.png',
    url: 'https://www.southasianheartcenter.org',
    size: 'normal',
  },
  {
    logo: '/partners/two.jpg', // KIMS
    url: 'https://www.kimshospitals.com',
    size: 'large',
  },
  {
    logo: '/partners/four.jpeg', // USHA
    url: 'http://www.ubf.org.in',
    size: 'large',
  },
]

export default function OurPartners() {
  return (
    <section className="py-16 lg:py-24 bg-white px-6">
        {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-teal-600 mb-3">
          Our Partners
        </h2>
        <p className="text-teal-600 max-w-xl mx-auto">
          Collaborating with leading healthcare organizations worldwide
        </p>
      </div>

      {/* LOGOS */}
      <div className="flex flex-wrap items-center justify-center gap-14 mb-10">
        {partners.map((partner, index) => (
          <Link
            key={index}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center transition-transform hover:scale-105"
          >
            <Image
              src={partner.logo}
              alt="Partner logo"
              width={partner.size === 'large' ? 260 : 180}
              height={partner.size === 'large' ? 120 : 80}
              className={`object-contain ${
                partner.size === 'large'
                  ? 'h-20 sm:h-24'
                  : 'h-12 sm:h-14'
              } w-auto`}
            />
          </Link>
        ))}
      </div>

      {/* INFO STRIP */}
      {/* <div className="max-w-6xl mx-auto mb-10">
        <div className="rounded-xl border border-blue-200 bg-blue-50 px-6 py-4 text-center text-gray-700 italic">
          The South Asian Heart Center was founded in 2006 at El Camino Health to
          reduce the high incidence of diabetes and heart disease in South Asians
          with culturally tailored, evidence-based, and lifestyle-focused services.
        </div>
      </div> */}

      {/* PARTNERSHIP ANNOUNCEMENT */}
      {/* <div className="max-w-6xl mx-auto mb-14">
        <div className="relative rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 px-6 py-6 pl-16 shadow-sm">
          
          
          <div className="absolute left-0 top-0 h-full w-2 bg-blue-700 rounded-l-2xl" />

         
          <div className="absolute left-5 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
            <Handshake className="h-4 w-4 text-blue-700" />
          </div>

          <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
            🤝 Exciting Partnership Announcement
          </h3>

          <p className="text-gray-700 leading-relaxed">
            We're excited to announce that <span className="font-medium">Sovaka Health</span> joins the
            South Asian Health Consortium as a partner to bring expert-led health
            education to South Asian communities worldwide. Together, we aim to
            improve global health outcomes by helping individuals make informed
            decisions about their lifestyle and care. Let’s build healthier
            futures—one conversation at a time.
          </p>
        </div>
      </div> */}

    
    </section>
  )
}
