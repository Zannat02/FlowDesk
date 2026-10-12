
export default function WaveBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* soft blue glows */}
      <div className="absolute left-1/2 top-[-6rem] h-80 w-[90%] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
      <div className="absolute bottom-[-8rem] right-[-6rem] h-96 w-96 rounded-full bg-primary-deep/20 blur-[140px]" />

      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="waveFill" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#3b7ddd" stopOpacity="0" />
            <stop offset="0.55" stopColor="#3b7ddd" stopOpacity="0.14" />
            <stop offset="1" stopColor="#8fb4ec" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="waveLine" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#3b7ddd" stopOpacity="0" />
            <stop offset="0.5" stopColor="#5b95e6" stopOpacity="0.55" />
            <stop offset="1" stopColor="#8fb4ec" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* wide ribbon */}
        <path
          d="M-100 720 C 220 780, 520 430, 900 380 S 1400 140, 1600 50
             L1600 170 C1400 250, 1120 480, 820 540 S 300 900, -100 840 Z"
          fill="url(#waveFill)"
        />
        {/* second softer ribbon */}
        <path
          d="M-100 560 C 260 640, 560 300, 960 250 S 1420 60, 1600 -10
             L1600 70 C1420 140, 1160 330, 880 390 S 340 720, -100 650 Z"
          fill="url(#waveFill)"
          opacity="0.7"
        />

        {/* thin flowing lines */}
        {[0, 18, 36, 54, 72].map((o) => (
          <path
            key={o}
            d={`M-100 ${700 + o} C 220 ${760 + o}, 520 ${410 + o}, 900 ${360 + o} S 1400 ${120 + o}, 1600 ${30 + o}`}
            fill="none"
            stroke="url(#waveLine)"
            strokeWidth="1"
            opacity={1 - o / 120}
          />
        ))}
      </svg>
    </div>
  )
}