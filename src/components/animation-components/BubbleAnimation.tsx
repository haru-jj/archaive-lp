'use client';

import React, { useEffect, useState } from 'react';

type BubbleStyle = {
  left: string;
  width: string;
  height: string;
  animationDelay: string;
  animationDuration: string;
  bottom: string;
  opacity: number;
};

export default function BubbleAnimation() {
  const [bubbleStyles, setBubbleStyles] = useState<BubbleStyle[]>([]);

  useEffect(() => {
    const generatedBubbles: BubbleStyle[] = Array.from({ length: 15 }).map(() => {
      const size = Math.random() * 20 + 8; // 8px to 28px
      return {
        left: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${8 + Math.random() * 6}s`,
        bottom: '-50px',
        opacity: 0.3 + Math.random() * 0.4,
      };
    });

    setBubbleStyles(generatedBubbles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbleStyles.map((bubble, index) => (
        <div
          key={index}
          className="absolute animate-bubble-float"
          style={{
            left: bubble.left,
            width: bubble.width,
            height: bubble.height,
            animationDelay: bubble.animationDelay,
            animationDuration: bubble.animationDuration,
            bottom: bubble.bottom,
          }}
        >
          <div 
            className="w-full h-full rounded-full bg-gradient-to-t from-white/60 to-white/20 shadow-lg"
            style={{
              opacity: bubble.opacity,
              backdropFilter: 'blur(2px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}
          />
        </div>
      ))}

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
