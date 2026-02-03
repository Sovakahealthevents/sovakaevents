'use client'
import Link from 'next/link'
import Logo from './logo'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center">
            {/* <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              SOVAKA HEALTH
            </span> */}
            <Logo/>
            {/* <span className="text-sm font-bold text-gray-800 ml-1">™</span> */}
          </div>
        </Link>

        {/* Navigation Menu */}
        <nav className="flex items-center gap-8">
          <Link href="/" className="text-gray-800 font-medium hover:text-orange-500 transition-colors">
            Home
          </Link>
          {/* <Link href="/events" className="text-gray-800 font-medium hover:text-orange-500 transition-colors">
            Events
          </Link> */}
           {/* <Link href="/" className="text-gray-800 font-medium hover:text-orange-500 transition-colors">
            Featured Events
          </Link> */}
          <Link href="/upcomingevents" className="text-gray-800 font-medium hover:text-orange-500 transition-colors">
            Upcoming Events
          </Link>
          <Link href="/library" className="text-gray-800 font-medium hover:text-orange-500 transition-colors">
            Library
          </Link>
          <Link href="/feedback" className="text-gray-800 font-medium hover:text-orange-500 transition-colors">
            MVP Feedback
          </Link>
        </nav>

       
        
      </div>
    </header>
  )
}
