'use client';

import React from 'react';

export default function BubbleAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Generate multiple bubbles with random positions and delays */}
      {(() => {
        const bubbles = [];
        for (let i = 0; i < 15; i++) {
          const size = Math.random() * 20 + 8; // 8px to 28px
          const leftPosition = Math.random() * 100; // 0% to 100%
          const animationDelay = Math.random() * 10; // 0s to 10s
          const animationDuration = 8 + Math.random() * 6; // 8s to 14s
          const opacity = 0.3 + Math.random() * 0.4; // 0.3 to 0.7

          bubbles.push(
            <div
              key={i}
              className="absolute animate-bubble-float"
              style={{
                left: `${leftPosition}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${animationDelay}s`,
                animationDuration: `${animationDuration}s`,
                bottom: '-50px'
              }}
            >
              <div 
                className="w-full h-full rounded-full bg-gradient-to-t from-white/60 to-white/20 shadow-lg"
                style={{
                  opacity: opacity,
                  backdropFilter: 'blur(2px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              />
            </div>
          );
        }
        return bubbles;
      })()}

      <style jsx>{`
        @keyframes bubble-float {
          0% {
            transform: translateY(0) translateX(0) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(30px) scale(1.2);
            opacity: 0;
          }
        }

        .animate-bubble-float {
          animation: bubble-float linear infinite;
        }
      `}</style>
    </div>
  );
}