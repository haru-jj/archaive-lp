import React from 'react';

export default function DotGridBackground({ color = '#37B7C4', dotSize = 2, gap = 24, opacity = 0.08, className = '' }: { color?: string; dotSize?: number; gap?: number; opacity?: number; className?: string }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none select-none ${className}`}
      style={{ zIndex: 0 }}
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <pattern id="dotgrid" x="0" y="0" width={gap} height={gap} patternUnits="userSpaceOnUse">
          <circle cx={dotSize} cy={dotSize} r={dotSize} fill={color} fillOpacity={opacity} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dotgrid)" />
    </svg>
  );
} 