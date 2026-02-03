import OurPartners from '@/components/OurPartners'
import FeedbackBanner from '../components/FeedbackBanner'
import HeroSection from '../components/hero-section'
import PartnersScrollbar from '../components/partners-scrollbar'
import UpcomingEvents from '../components/upcoming-events'
import FeaturedEvent from '@/components/FeaturedEvent'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main content with hero and sidebar */}
      <div className="flex">
        {/* Left - Hero Section */}
        <div className="flex-1">
          <HeroSection />
        </div>

        {/* Right - Partners Sidebar */}
        <div className="w-32  border-l border-gray-200">
          <PartnersScrollbar />
        </div>
      </div>

    
      {/* <UpcomingEvents /> */}
      <FeaturedEvent />
     <div className="flex justify-center my-12 px-4">
  <p className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-100 to-orange-100 px-6 py-3 text-center text-sm sm:text-base md:text-lg font-semibold text-teal-800 shadow-sm">
    ✨ Educate, Empower & Elevate your Health & Wellbeing
  </p>
</div>

      <OurPartners />
     
    </div>
  )
}
