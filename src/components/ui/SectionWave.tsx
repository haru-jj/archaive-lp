import React from 'react';

export default function SectionWave({ flip = false, color = '#fff', className = '' }: { flip?: boolean; color?: string; className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={flip ? 'rotate-180 w-full h-12 md:h-20' : 'w-full h-12 md:h-20'}
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 Q360,80 720,40 T1440,40 V80 H0 Z"
          fill={color}
          fillOpacity="0.9"
        />
      </svg>
    </div>
  );
} 