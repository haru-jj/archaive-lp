'use client';

import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

// 案1: フリップカード式トランジション
export function FlipCardSolution({ solution, index }: { solution: any; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: false
  });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="relative">
      {/* 課題番号 */}
      <div className="text-center mb-4">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#f54848] to-[#f54848]/80 rounded-full text-white shadow-lg">
          <span className="font-bold text-lg">{index + 1}</span>
        </div>
      </div>
      
      <div 
        className="relative w-full h-[400px] cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div className={`absolute inset-0 w-full h-full transition-all duration-700 transform-gpu ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`} style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Front - Before */}
          <div className="absolute inset-0 w-full h-full rounded-2xl shadow-xl p-6 bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300 [backface-visibility:hidden]">
            <div className="flex flex-col h-full">
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold inline-block w-fit mb-3">
                Before - 課題
              </div>
              <h4 className="text-base font-bold text-gray-800 mb-3 line-clamp-2">
                {solution.problem}
              </h4>
              <p className="text-gray-600 text-sm flex-1 line-clamp-6">
                {solution.problemDetail}
              </p>
              <div className="text-center text-gray-400 text-xs mt-3">
                ↻ ホバーで解決策を表示
              </div>
            </div>
          </div>
          
          {/* Back - After */}
          <div className="absolute inset-0 w-full h-full rounded-2xl shadow-xl p-6 bg-gradient-to-br from-[#37B7C4]/10 to-[#37B7C4]/20 border-2 border-[#37B7C4] [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="flex flex-col h-full">
              <div className="bg-[#37B7C4] text-white px-3 py-1 rounded-full text-xs font-bold inline-block w-fit mb-3">
                After - 解決
              </div>
              <h4 className="text-base font-bold text-[#37B7C4] mb-3 line-clamp-2">
                {solution.after}
              </h4>
              <p className="text-gray-700 text-sm flex-1 line-clamp-6">
                {solution.detail}
              </p>
              <div className="bg-white rounded-full px-3 py-1 shadow-md inline-block w-fit mt-3">
                <span className="font-bold text-gray-800 text-xs">{solution.improvement}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 案2: プログレスバー型変換
export function ProgressBarSolution({ solution }: { solution: any }) {
  const [progress, setProgress] = useState(0);
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (isIntersecting) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isIntersecting]);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="mb-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800">案2: プログレスバー型変換</h3>
        <p className="text-gray-600 mt-2">スクロールするとBeforeからAfterへ変化します</p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm font-semibold mb-2">
            <span className="text-red-500">Before</span>
            <span className="text-[#37B7C4]">After</span>
          </div>
          <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-[#37B7C4] transition-all duration-1000 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-center mt-2">
            <span className="text-2xl font-bold text-[#37B7C4]">{progress}%</span>
            <span className="text-gray-600 ml-2">改善達成</span>
          </div>
        </div>
        
        {/* Content that changes */}
        <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
          {/* Before State */}
          <div 
            className={`absolute inset-0 p-8 bg-gradient-to-br from-red-50 to-red-100 transition-opacity duration-500 ${
              progress < 50 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h4 className="text-xl font-bold text-gray-800 mb-3">{solution.problem}</h4>
            <p className="text-gray-600">{solution.problemDetail}</p>
          </div>
          
          {/* After State */}
          <div 
            className={`absolute inset-0 p-8 bg-gradient-to-br from-[#37B7C4]/10 to-[#37B7C4]/20 transition-opacity duration-500 ${
              progress >= 50 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h4 className="text-xl font-bold text-[#37B7C4] mb-3">{solution.after}</h4>
            <p className="text-gray-700">{solution.detail}</p>
            <div className="absolute bottom-4 right-4">
              <span className="bg-white px-4 py-2 rounded-full shadow-md font-bold text-sm">
                {solution.improvement}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 案5: タイムライン型遷移（デザイン改善版）
export function TimelineSolution({ solutions }: { solutions: any[] }) {
  const [activeStep, setActiveStep] = useState(0);
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (isIntersecting) {
      const interval = setInterval(() => {
        setActiveStep(prev => {
          if (prev >= solutions.length * 2 - 1) {
            clearInterval(interval);
            return solutions.length * 2 - 1;
          }
          return prev + 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isIntersecting, solutions.length]);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="py-12">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          <div 
            className="absolute left-12 top-0 w-0.5 bg-gradient-to-b from-[#f54848] via-orange-400 to-[#37B7C4] transition-all duration-1500 ease-out"
            style={{ height: `${(activeStep / (solutions.length * 2 - 1)) * 100}%` }}
          ></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <div key={index} className="space-y-6">
                {/* Before State */}
                <div className={`relative flex items-start transition-all duration-700 ease-out ${
                  activeStep >= index * 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                }`}>
                  {/* Timeline Node */}
                  <div className={`relative z-20 transition-all duration-500 ${
                    activeStep >= index * 2 ? 'scale-100' : 'scale-50'
                  }`}>
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 ${
                      activeStep >= index * 2 
                        ? 'bg-gradient-to-br from-[#f54848] to-[#f54848]/80' 
                        : 'bg-gray-300'
                    }`}>
                      <div className="text-white">
                        <div className="text-2xl font-bold">課題</div>
                        <div className="text-sm">{index + 1}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="ml-8 flex-1">
                    <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-8 shadow-lg border-l-4 border-[#f54848]">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 bg-[#f54848] rounded-full animate-pulse"></div>
                        <span className="text-[#f54848] font-bold text-sm uppercase tracking-wider">Before - 現状の課題</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3">
                        {solution.problem}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {solution.problemDetail}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Transform Arrow */}
                <div className={`relative ml-24 transition-all duration-700 ${
                  activeStep >= index * 2 + 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}>
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#f54848] via-orange-400 to-[#37B7C4] text-white px-6 py-3 rounded-full shadow-lg">
                    <span className="font-bold">ARCHAIVEで変革</span>
                    <div className="flex gap-1">
                      <span className="animate-bounce" style={{animationDelay: '0.1s'}}>→</span>
                      <span className="animate-bounce" style={{animationDelay: '0.2s'}}>→</span>
                      <span className="animate-bounce" style={{animationDelay: '0.3s'}}>→</span>
                    </div>
                  </div>
                </div>
                
                {/* After State */}
                <div className={`relative flex items-start transition-all duration-700 ease-out ${
                  activeStep >= index * 2 + 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                }`}>
                  {/* Timeline Node */}
                  <div className={`relative z-20 transition-all duration-500 ${
                    activeStep >= index * 2 + 1 ? 'scale-100' : 'scale-50'
                  }`}>
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 ${
                      activeStep >= index * 2 + 1 
                        ? 'bg-gradient-to-br from-[#37B7C4] to-[#2a9aa5]' 
                        : 'bg-gray-300'
                    }`}>
                      <div className="text-white">
                        <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                        </svg>
                        <div className="text-xs mt-1">解決</div>
                      </div>
                    </div>
                    {/* Pulse Effect */}
                    {activeStep >= index * 2 + 1 && (
                      <div className="absolute inset-0 rounded-full bg-[#37B7C4] animate-ping opacity-20"></div>
                    )}
                  </div>
                  
                  {/* Content Card */}
                  <div className="ml-8 flex-1">
                    <div className="bg-gradient-to-r from-[#37B7C4]/10 to-white rounded-2xl p-8 shadow-lg border-l-4 border-[#37B7C4] relative overflow-hidden">
                      {/* Decorative Element */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#37B7C4]/5 rounded-full -mr-16 -mt-16"></div>
                      
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 bg-[#37B7C4] rounded-full animate-pulse"></div>
                        <span className="text-[#37B7C4] font-bold text-sm uppercase tracking-wider">After - 解決後の姿</span>
                      </div>
                      <h4 className="text-xl font-bold text-[#37B7C4] mb-3">
                        {solution.after}
                      </h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {solution.detail}
                      </p>
                      <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-md">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7 14l5-5 5 5H7z"/>
                        </svg>
                        <span className="font-bold text-gray-800">{solution.improvement}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Divider between solutions */}
                {index < solutions.length - 1 && (
                  <div className="ml-24 my-8">
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}