'use client'

import { CookieConsent } from "./cookie-consent"

export default function Footer() {
  return (
    <footer className="bg-teal-700 text-white">
      {/* Top */}
      <div className="px-6 lg:px-16 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            SOVAKA <span className="text-orange-400">HEALTH™</span>
          </h3>
          <p className="text-teal-100 max-w-sm leading-relaxed mb-6">
            We solve the global gap in reliable care by making expert-led
            education accessible and easy to understand.
          </p>
          {/* <p className="text-sm text-teal-200">
            © Sovaka Health™. Patent Pending.
          </p> */}
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-3 text-teal-100">
            <li>
  <a href="/" className="hover:underline cursor-pointer">Home</a>
</li>
<li>
  <a href="/upcomingevents" className="hover:underline cursor-pointer">Upcoming Events</a>
</li>
<li>
  <a href="/library" className="hover:underline cursor-pointer">Library</a>
</li>
<li>
  <a href="/feedback" className="hover:underline cursor-pointer">MVP Feedback</a>
</li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Contact</h4>

          <div className="space-y-4 text-teal-100">
            {/* <div>
              <p className="text-sm font-medium text-teal-200">Sales</p>
              <p>supportmvp@sovakahealth.onmicrosoft.com</p>
            </div> */}

            <div>
              {/* <p className="text-sm font-medium text-teal-200">Support</p> */}
              <p>sovakahealthevents@sovakahealth.onmicrosoft.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-teal-600" />
      <div className="px-6 lg:px-16 py-10 text-sm text-teal-100 leading-relaxed">
        <p>
          <span className="font-semibold">Medical Disclaimer:</span> The services
          provided by Sovaka Health are for general informational purposes only
          and are not a substitute for professional medical care, diagnosis, or
          treatment. Sovaka Health does not provide medical advice. Always seek
          the advice of a licensed physician or other qualified health provider
          in your country or place of residence with any questions you may have
          regarding a medical or health condition. Never disregard professional
          medical advice or delay seeking it because of something you have
          received through the services.
        </p>
      </div>

      {/* Bottom */}
      <div className="border-t border-teal-600" />
      <div className="px-6 lg:px-16 py-6 flex flex-col lg:flex-row gap-4 items-center justify-between text-sm text-teal-200">
        <p>© Sovaka Health™. All rights reserved.</p>

        <div className="flex gap-6">
         
           <a
            href="/cookie-preferences"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline cursor-pointer"
          >
            Cookie Preferences
          </a>

          <a
            href="/files/SovakaHealthPrivacyPolicy2.1.26.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline cursor-pointer"
          >
            Privacy Policy
          </a>

          <a
            href="/files/SovakaHealthTermsofUse2.1.26.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline cursor-pointer"
          >
            Terms of Use
          </a>
        </div>
      </div>
      <CookieConsent />
    </footer>
  )
}
