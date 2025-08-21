export default function LogoSW({ size = 56 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label="SponsorWins logo" role="img">
      <defs>
        <linearGradient id="sw-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFD86B"/><stop offset="1" stopColor="#F5C518"/>
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#sw-grad)"/>
      <path d="M12 22l6 20l6-14l6 14l6-20l6 20l6-14l6 14l6-20"
            fill="none" stroke="#0b0b0b" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" opacity=".9"/>
      <path d="M46 18h-8c-7.2 0-11.5 2.6-11.5 6.8c0 4.1 4.4 6.5 11.2 6.5h2.8
               c6.1 0 9.6 2.3 9.6 5.9c0 3.9-4.3 6.6-11.9 6.6H22"
            fill="none" stroke="#0b0b0b" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
