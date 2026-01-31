"use client"

import { useId } from "react"

type LogoProps = {
  className?: string
  width?: number
  height?: number
}

export function Logo({ className, width = 220, height = 80 }: LogoProps) {
  const id = useId().replace(/:/g, "")
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 420 120"
      fill="none"
      width={width}
      height={height}
      className={className}
      role="img"
      aria-label="Peanut Butter AND JAM"
    >
      <defs>
        <filter id={`logo-shadow-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="2"
            dy="2"
            stdDeviation="0"
            floodColor="var(--pbj-brown)"
            floodOpacity="1"
          />
          <feDropShadow
            dx="1"
            dy="1"
            stdDeviation="1"
            floodColor="var(--pbj-brown)"
            floodOpacity="0.4"
          />
        </filter>
        <linearGradient id={`logo-peanut-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="50%" stopColor="#f4c430" />
          <stop offset="100%" stopColor="#e8a838" />
        </linearGradient>
        <linearGradient id={`logo-jam-red-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="100%" stopColor="#e63946" />
        </linearGradient>
        <linearGradient id={`logo-jam-purple-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9d4edd" />
          <stop offset="100%" stopColor="#7b2cbf" />
        </linearGradient>
      </defs>
      <text
        x="8"
        y="42"
        fontFamily="var(--font-fredoka), Fredoka, sans-serif"
        fontSize="32"
        fontWeight="700"
        fill={`url(#logo-peanut-${id})`}
        stroke="var(--pbj-brown)"
        strokeWidth="3"
        filter={`url(#logo-shadow-${id})`}
        style={{ paintOrder: "stroke fill" }}
      >
        Peanut Butter
      </text>
      <text
        x="12"
        y="72"
        fontFamily="var(--font-fredoka), Fredoka, sans-serif"
        fontSize="18"
        fontWeight="700"
        fill="var(--pbj-cream)"
        stroke="var(--pbj-brown)"
        strokeWidth="2.5"
        filter={`url(#logo-shadow-${id})`}
        style={{ paintOrder: "stroke fill" }}
      >
        AND
      </text>
      <text
        x="8"
        y="108"
        fontFamily="var(--font-fredoka), Fredoka, sans-serif"
        fontSize="36"
        fontWeight="700"
        filter={`url(#logo-shadow-${id})`}
        style={{ paintOrder: "stroke fill" }}
      >
        <tspan fill={`url(#logo-jam-red-${id})`} stroke="var(--pbj-brown)" strokeWidth="3">
          JA
        </tspan>
        <tspan fill={`url(#logo-jam-purple-${id})`} stroke="var(--pbj-brown)" strokeWidth="3">
          M
        </tspan>
      </text>
    </svg>
  )
}
