// 'use client'
// import Link from 'next/link'
// import Logo from './logo'

// export default function Header() {
//   return (
//     <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
//       <div className="flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2">
//           <div className="flex items-center">
//             {/* <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
//               SOVAKA HEALTH
//             </span> */}
//             <Logo/>
//             {/* <span className="text-sm font-bold text-gray-800 ml-1">™</span> */}
//           </div>
//         </Link>

//         {/* Navigation Menu */}
//         <nav className="flex items-center gap-8">
//           <Link href="/" className="text-gray-800 font-medium hover:text-orange-500 transition-colors">
//             Home
//           </Link>
//           {/* <Link href="/events" className="text-gray-800 font-medium hover:text-orange-500 transition-colors">
//             Events
//           </Link> */}
//            {/* <Link href="/" className="text-gray-800 font-medium hover:text-orange-500 transition-colors">
//             Featured Events
//           </Link> */}
//           <Link href="/upcomingevents" className="text-gray-800 font-medium hover:text-orange-500 transition-colors">
//             Upcoming Events
//           </Link>
//           <Link href="/library" className="text-gray-800 font-medium hover:text-orange-500 transition-colors">
//             Library
//           </Link>
//           <Link href="/feedback" className="text-gray-800 font-medium hover:text-orange-500 transition-colors">
//             MVP Feedback
//           </Link>
//         </nav>

       
        
//       </div>
//     </header>
//   )
// }


'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Mail } from 'lucide-react'
import Logo from './logo'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showEmail, setShowEmail] = useState(false)

  const EmailBox = () => (
    <div className="absolute right-6 top-20 z-50 rounded-xl border bg-white shadow-lg px-4 py-3 text-sm flex items-center gap-2">
      <Mail size={16} className="text-teal-600" />
      <span className="font-medium text-gray-700">
        sovakahealthevents@sovakahealth.onmicrosoft.com
      </span>
    </div>
  )

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-base">
          <Link href="/" className="font-medium text-gray-800 hover:text-orange-500">
            Home
          </Link>

          <Link
            href="/upcomingevents"
            className="font-medium text-gray-800 hover:text-orange-500"
          >
            Upcoming Events
          </Link>

          <Link
            href="/library"
            className="font-medium text-gray-800 hover:text-orange-500"
          >
            Library
          </Link>

          <Link
            href="/feedback"
            className="font-medium text-gray-800 hover:text-orange-500"
          >
            MVP Feedback
          </Link>

          {/* Support */}
          <button
            onClick={() => setShowEmail(!showEmail)}
            className="font-medium text-gray-800 hover:text-orange-500"
          >
            Support
          </button>

          {/* Donate */}
          <button
            onClick={() => setShowEmail(!showEmail)}
            className="font-medium text-gray-800 hover:text-orange-500"
          >
            Donate
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Email Popover */}
      {showEmail && <EmailBox />}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white px-6 py-6 space-y-5 text-base">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block font-medium text-gray-800"
          >
            Home
          </Link>

          <Link
            href="/upcomingevents"
            onClick={() => setMenuOpen(false)}
            className="block font-medium text-gray-800"
          >
            Upcoming Events
          </Link>

          <Link
            href="/library"
            onClick={() => setMenuOpen(false)}
            className="block font-medium text-gray-800"
          >
            Library
          </Link>

          <Link
            href="/feedback"
            onClick={() => setMenuOpen(false)}
            className="block font-medium text-gray-800"
          >
            MVP Feedback
          </Link>

          {/* <button
            onClick={() => setShowEmail(!showEmail)}
            className="block font-medium text-gray-800"
          >
            Support
          </button>

          <button
            onClick={() => setShowEmail(!showEmail)}
            className="block font-medium text-gray-800"
          >
            Donate
          </button> */}
        </div>
      )}
    </header>
  )
}
