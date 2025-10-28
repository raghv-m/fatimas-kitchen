export default function DecorativeBorder({ className = '' }: { className?: string }) {
  return (
    <div className={`h-2 w-full ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 8"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Karahi-inspired truck art pattern */}
        <defs>
          <pattern id="truckArtPattern" x="0" y="0" width="40" height="8" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="10" height="8" fill="#D32F2F" />
            <rect x="10" y="0" width="10" height="8" fill="#F9A825" />
            <rect x="20" y="0" width="10" height="8" fill="#4CAF50" />
            <rect x="30" y="0" width="10" height="8" fill="#F9A825" />
          </pattern>
        </defs>
        <rect width="1200" height="8" fill="url(#truckArtPattern)" />
      </svg>
    </div>
  );
}

export function FloralDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center my-8 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent"></div>
      <div className="mx-4 text-secondary-500 text-2xl">✦</div>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent"></div>
    </div>
  );
}

export function GeometricPattern({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 opacity-5 pointer-events-none ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="geometricPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="30" fill="none" stroke="#D32F2F" strokeWidth="2" />
            <circle cx="40" cy="40" r="20" fill="none" stroke="#F9A825" strokeWidth="1" />
            <circle cx="40" cy="40" r="10" fill="none" stroke="#4CAF50" strokeWidth="1" />
            <path d="M 40 10 L 70 40 L 40 70 L 10 40 Z" fill="none" stroke="#D32F2F" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geometricPattern)" />
      </svg>
    </div>
  );
}

