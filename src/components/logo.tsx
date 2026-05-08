export function Logo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#0284c7' }} />
          <stop offset="100%" style={{ stopColor: '#38bdf8' }} />
        </linearGradient>
      </defs>
      <path d="M12 65 Q22 20, 40 28" stroke="url(#logo-grad)" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M68 65 Q58 20, 40 28" stroke="url(#logo-grad)" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M25 43 C25 34, 40 30, 40 39 C40 30, 55 34, 55 43 C55 56, 40 65, 40 65 C40 65, 25 56, 25 43Z" fill="#e53e3e" />
    </svg>
  )
}
