'use client';

import React from 'react';

export default function CircleDiagram() {
  return (
    <div className="relative w-[450px] h-[450px] md:w-[525px] md:h-[525px] lg:w-[600px] lg:h-[600px] xl:w-[675px] xl:h-[675px]">
      
      {/* Rotating circle behind Group.svg */}
      <div className="absolute rounded-full animate-spin-slow" style={{
        width: '360px',
        height: '360px',
        background: 'conic-gradient(from 0deg, rgba(55, 183, 196, 0.2), rgba(255, 255, 255, 0.8), rgba(55, 183, 196, 0.9), rgba(255, 255, 255, 0.6), rgba(55, 183, 196, 0.7), rgba(255, 255, 255, 0.9), rgba(55, 183, 196, 0.4), rgba(255, 255, 255, 0.5))',
        borderRadius: '50%',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: -2
      }}>
        <div className="absolute inset-3 bg-[#37B7C4] rounded-full"></div>
      </div>

      {/* Spiral scribble circles */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400" style={{zIndex: 3}}>
        {/* Multiple overlapping spiral circles - kurukuru style */}
        <circle 
          cx="200" cy="200" r="120"
          stroke="rgba(255, 255, 255, 0.3)" 
          strokeWidth="1" 
          fill="none"
          strokeLinecap="round"
          className="animate-spiral-draw"
          transform="rotate(0 200 200)"
          style={{
            strokeDasharray: '754',
            strokeDashoffset: '754'
          }}
        />
        <circle 
          cx="200" cy="200" r="115"
          stroke="rgba(255, 255, 255, 0.4)" 
          strokeWidth="1" 
          fill="none"
          strokeLinecap="round"
          className="animate-spiral-draw"
          transform="rotate(60 200 200)"
          style={{
            strokeDasharray: '722',
            strokeDashoffset: '722',
            animationDelay: '0.5s'
          }}
        />
        <circle 
          cx="200" cy="200" r="110"
          stroke="rgba(255, 255, 255, 0.5)" 
          strokeWidth="1" 
          fill="none"
          strokeLinecap="round"
          className="animate-spiral-draw"
          transform="rotate(120 200 200)"
          style={{
            strokeDasharray: '691',
            strokeDashoffset: '691',
            animationDelay: '1s'
          }}
        />
        <circle 
          cx="200" cy="200" r="105"
          stroke="rgba(255, 255, 255, 0.6)" 
          strokeWidth="1" 
          fill="none"
          strokeLinecap="round"
          className="animate-spiral-draw"
          transform="rotate(180 200 200)"
          style={{
            strokeDasharray: '659',
            strokeDashoffset: '659',
            animationDelay: '1.5s'
          }}
        />
        <circle 
          cx="200" cy="200" r="100"
          stroke="rgba(255, 255, 255, 0.7)" 
          strokeWidth="1" 
          fill="none"
          strokeLinecap="round"
          className="animate-spiral-draw"
          transform="rotate(240 200 200)"
          style={{
            strokeDasharray: '628',
            strokeDashoffset: '628',
            animationDelay: '2s'
          }}
        />
        <circle 
          cx="200" cy="200" r="95"
          stroke="rgba(255, 255, 255, 0.8)" 
          strokeWidth="1" 
          fill="none"
          strokeLinecap="round"
          className="animate-spiral-draw"
          transform="rotate(300 200 200)"
          style={{
            strokeDasharray: '597',
            strokeDashoffset: '597',
            animationDelay: '2.5s'
          }}
        />
      </svg>

      {/* Central Hub Logo */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <img
          src="/images/Group.svg"
          alt="ARCHAIVE Hub"
          className="object-contain transform hover:scale-105 transition-all duration-500"
          style={{
            width: '168px',
            height: '120px'
          }}
        />
      </div>

      {/* Orbiting container for data source nodes */}
      <div className="absolute animate-orbit" style={{
        animationDuration: '20s',
        width: '33rem',
        height: '33rem',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 5,
        pointerEvents: 'none'
      }}>
        {(() => {
          const dataNodes = [
            {
              label: 'PLM',
              position: { left: '50%', top: '10%', transform: 'translate(-50%, -50%)' },
              animationDelay: '0s',
              textSize: 'text-[11px] md:text-[13px]'
            },
            {
              label: 'ERP',
              position: { left: '88.04%', top: '37.64%', transform: 'translate(-50%, -50%)' },
              animationDelay: '1.6s',
              textSize: 'text-[11px] md:text-[13px]'
            },
            {
              label: '紙書類',
              position: { left: '73.52%', top: '82.36%', transform: 'translate(-50%, -50%)' },
              animationDelay: '3.2s',
              textSize: 'text-[11px] md:text-[13px] leading-3'
            },
            {
              label: 'ファイル\nサーバー',
              position: { left: '26.48%', top: '82.36%', transform: 'translate(-50%, -50%)' },
              animationDelay: '4.8s',
              textSize: 'text-[10px] md:text-[12px] leading-3'
            },
            {
              label: '暗黙知',
              position: { left: '11.96%', top: '37.64%', transform: 'translate(-50%, -50%)' },
              animationDelay: '6.4s',
              textSize: 'text-[11px] md:text-[13px]'
            }
          ];

          return dataNodes.map((node, index) => (
            <div key={index} className="absolute hover-scale-container cursor-pointer" style={{...node.position, pointerEvents: 'auto'}}>
              <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 animate-counter-rotate" style={{animationDuration: '20s'}}>
                <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-spin-reverse" style={{animationDuration: '8s', animationDelay: node.animationDelay}}></div>
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/90 to-white/70 shadow-lg"></div>
                <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-[#37B7C4]/80 via-[#37B7C4]/60 to-transparent"></div>
                <div className={`relative z-10 h-full flex items-center justify-center ${node.label.includes('\n') ? 'text-center' : ''}`}>
                  <span className={`text-white ${node.textSize} font-bold drop-shadow-lg`}>
                    {node.label.split('\n').map((line, lineIndex) => (
                      <React.Fragment key={lineIndex}>
                        {lineIndex > 0 && <br />}
                        {line}
                      </React.Fragment>
                    ))}
                  </span>
                </div>
                <div className="absolute inset-0 rounded-full bg-[#37B7C4]/20 blur-xl animate-pulse-slow"></div>
              </div>
            </div>
          ));
        })()}
      </div>

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        .animate-orbit {
          animation: orbit 20s linear infinite;
        }
        @keyframes counter-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        .animate-counter-rotate {
          animation: counter-rotate 20s linear infinite;
        }
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .animate-spin-reverse {
          animation: spin-reverse 8s linear infinite;
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        @keyframes spiral-draw {
          0% {
            stroke-dashoffset: 754;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          60% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          100% {
            stroke-dashoffset: -100;
            opacity: 0;
          }
        }
        .animate-spiral-draw {
          animation: spiral-draw 3s ease-out infinite;
        }
        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .hover-scale-container {
          transition: transform 0.3s ease-in-out;
        }
        .hover-scale-container:hover {
          transform: scale(1.5);
        }
      `}</style>
    </div>
  );
}