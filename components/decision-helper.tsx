// 'use client';

// import { ArrowRight } from 'lucide-react';

// export default function DecisionHelper() {
//   return (
//     <div className="w-full max-w-md mx-auto px-6">
//       {/* Semi-transparent card */}
//       <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl">
//         {/* Emoji icon */}
//         <div className="text-5xl mb-4">😊</div>

//         {/* Title */}
//         <h3 className="text-xl font-semibold text-white mb-2">
//           Unsure which option fits?
//         </h3>

//         {/* Subtitle */}
//         <p className="text-sm text-gray-200 mb-6">
//           We can help you decide in under a minute.
//         </p>

//         {/* Button */}
//         <button className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-200 group">
//           <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//           Help me decide
//         </button>
//       </div>
//     </div>
//   );
// }


'use client';

import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function DecisionHelper() {
  const [showBeam, setShowBeam] = useState(false);

  useEffect(() => {
    setShowBeam(true);
  }, []);

  return (
    <div className="absolute bottom-8 left-8 max-w-md">
      <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl">
        <div className="text-4xl mb-3">😊</div>

        <h3 className="text-lg font-semibold text-white mb-1">
          Unsure which option fits?
        </h3>

        <p className="text-sm text-gray-200 mb-5">
          We can help you decide in under a minute.
        </p>

        <button className="relative w-full overflow-hidden rounded-full border border-white/30 px-6 py-3 text-white font-medium group">
          {/* BEAM LAYER */}
          {showBeam && (
            <span className="pointer-events-none absolute inset-0">
              <span className="absolute inset-0 animate-google-beam bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.45),transparent)]" />
            </span>
          )}

          {/* CONTENT */}
          <span className="relative z-10 flex items-center justify-center gap-2">
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            Help me decide
          </span>
        </button>
      </div>
    </div>
  );
}
