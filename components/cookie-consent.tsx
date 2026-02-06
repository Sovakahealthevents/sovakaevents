// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { Button } from "../components/ui/button";

// export function CookieConsent() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     // Check if the user has already accepted or managed the cookie consent
//     const hasConsented = localStorage.getItem("cookieConsent")
//     if (!hasConsented) {
//       setIsVisible(true)
//     }
//   }, [])

//   const handleAccept = () => {
//     // Set the flag in localStorage and hide the consent popup
//     localStorage.setItem("cookieConsent", "true")
//     setIsVisible(false)
//   }

//   const handleManageCookies = () => {
//     // Optionally, you can handle "Manage Cookies" differently, e.g., redirect to a settings page
//     // For now, we'll treat it the same as "Accept" to hide the popup
//     localStorage.setItem("cookieConsent", "true")
//     setIsVisible(false)
//   }

//   if (!isVisible) return null

//   return (
//     <div className="fixed bottom-4 left-4 right-4 sm:max-w-md bg-gray-900 text-white border border-gray-700 p-3 rounded-lg shadow-lg z-50">
//       <div className="mx-auto">
//         <h3 className="font-bold text-white mb-1 text-sm">Your Personal Information</h3>
//         <p className="text-xs mb-3 leading-relaxed">
//           Information about your browsing activity on our website, including clickstream and cookie data and
//           identifiers, is sent to our service providers and advertising networks. Please see our{" "}
//           <Link href="/files/SovakaHealthPrivacyPolicy2.1.26.pdf" className="text-green-400 font-bold hover:text-green-300">
//             Privacy Policy
//           </Link>{" "}
//           for more information. You acknowledge and consent to these communications by browsing our website. In
//           addition, we use cookies and other analytics tools to deliver the best experience. These tools allow us to
//           measure website traffic, improve website performance, personalize advertising and web experiences, design
//           targeted marketing campaigns, and allow content sharing to social media.
//         </p>
//         <div className="flex gap-2">
//           <Button
//             variant="outline"
//             className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white text-xs py-1 px-2"
//             onClick={handleManageCookies}
//           >
//             Manage Cookies
//           </Button>
//           <Button
//             className="bg-green-600 hover:bg-green-700 text-white text-xs py-1 px-2"
//             onClick={handleAccept}
//           >
//             Accept All
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { useRouter } from "next/navigation";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const handleManageCookies = () => {
    router.push("/cookie-preferences");
  };

  if (!isVisible) return null;

  return (
    <div
      className="
        fixed bottom-4 left-4 z-50 w-[320px]
        rounded-xl bg-teal-600 p-4 shadow-xl
        animate-in slide-in-from-bottom duration-500
      "
    >
      <h3 className="text-sm font-serif font-semibold text-black mb-2">
        This website uses cookies.
      </h3>

      <p className="text-xs text-black leading-relaxed mb-3">
        We use cookies to analyze website traffic and improve your experience.
        By continuing, you agree to our use of cookies. Read our{" "}
        <Link
          href="/files/SovakaHealthPrivacyPolicy2.1.26.pdf"
          className="underline font-medium hover:text-gray-800"
        >
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link
          href="/files/SovakaHealthTermsofUse2.1.26.pdf"
          className="underline font-medium hover:text-gray-800"
        >
          Terms
        </Link>
        .
      </p>

      <div className="flex items-center justify-between gap-2">
        <button
          onClick={handleManageCookies}
          className="text-xs underline text-black hover:text-gray-800"
        >
          Manage cookies
        </button>

        <Button
          onClick={handleAccept}
          className="bg-black text-white text-xs px-4 py-1.5 hover:bg-gray-900 leading-none"
        >
          Accept All
        </Button>
      </div>
    </div>
  );
}
