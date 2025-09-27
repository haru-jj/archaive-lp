'use client';

import React from 'react';

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Large transparent bubbles */}
      <div 
        className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full animate-float-gentle" 
        style={{
          transform: 'translate(-300px, -200px)',
          background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
          backdropFilter: 'blur(1px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          animationDelay: '0s'
        }}
      ></div>
      
      <div 
        className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full animate-float-gentle" 
        style={{
          transform: 'translate(200px, -150px)',
          background: 'radial-gradient(circle at 40% 30%, rgba(55, 183, 196, 0.25), rgba(55, 183, 196, 0.1), rgba(55, 183, 196, 0.03))',
          backdropFilter: 'blur(1px)',
          border: '1px solid rgba(55, 183, 196, 0.2)',
          animationDelay: '2s'
        }}
      ></div>
      
      <div 
        className="absolute top-1/2 left-1/2 w-36 h-36 rounded-full animate-float-gentle" 
        style={{
          transform: 'translate(-200px, 150px)',
          background: 'radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
          backdropFilter: 'blur(1px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          animationDelay: '4s'
        }}
      ></div>
      
      <div 
        className="absolute top-1/2 left-1/2 w-28 h-28 rounded-full animate-float-gentle" 
        style={{
          transform: 'translate(250px, 100px)',
          background: 'radial-gradient(circle at 30% 40%, rgba(55, 183, 196, 0.2), rgba(55, 183, 196, 0.08), rgba(55, 183, 196, 0.02))',
          backdropFilter: 'blur(1px)',
          border: '1px solid rgba(55, 183, 196, 0.15)',
          animationDelay: '6s'
        }}
      ></div>
      
      {/* Medium transparent bubbles */}
      <div 
        className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full animate-float-gentle" 
        style={{
          transform: 'translate(-400px, -50px)',
          background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
          backdropFilter: 'blur(1px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          animationDelay: '1s'
        }}
      ></div>
      
      <div 
        className="absolute top-1/2 left-1/2 w-20 h-20 rounded-full animate-float-gentle" 
        style={{
          transform: 'translate(350px, -80px)',
          background: 'radial-gradient(circle at 40% 30%, rgba(55, 183, 196, 0.15), rgba(55, 183, 196, 0.05), rgba(55, 183, 196, 0.01))',
          backdropFilter: 'blur(1px)',
          border: '1px solid rgba(55, 183, 196, 0.1)',
          animationDelay: '3s'
        }}
      ></div>
      
      <div 
        className="absolute top-1/2 left-1/2 w-22 h-22 rounded-full animate-float-gentle" 
        style={{
          transform: 'translate(-350px, 200px)',
          background: 'radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01))',
          backdropFilter: 'blur(1px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          animationDelay: '5s'
        }}
      ></div>
      
      <div 
        className="absolute top-1/2 left-1/2 w-18 h-18 rounded-full animate-float-gentle" 
        style={{
          transform: 'translate(180px, 180px)',
          background: 'radial-gradient(circle at 30% 40%, rgba(55, 183, 196, 0.12), rgba(55, 183, 196, 0.04), rgba(55, 183, 196, 0.01))',
          backdropFilter: 'blur(1px)',
          border: '1px solid rgba(55, 183, 196, 0.08)',
          animationDelay: '7s'
        }}
      ></div>

      <style jsx>{`
        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          33% {
            transform: translateY(-15px) scale(1.05);
          }
          66% {
            transform: translateY(-8px) scale(0.98);
          }
        }

        .animate-float-gentle {
          animation: float-gentle 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}