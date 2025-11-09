'use client';

import { ReactNode } from 'react';

type SubFeatureCardFrameProps = {
  children: ReactNode;
  className?: string;
};

const HeaderBar = () => (
  <div className="flex h-[40px] w-full items-center px-4 bg-[#4B5563]">
    <div className="flex items-center gap-1.5">
      <div className="w-2.5 h-2.5 rounded-full bg-white/80" />
      <div className="w-2.5 h-2.5 rounded-full bg-white/50" />
      <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
    </div>
  </div>
);

export default function SubFeatureCardFrame({ children, className }: SubFeatureCardFrameProps) {
  return (
    <div className={`flex items-center justify-center ${className ?? ''}`}>
      <div className="flex h-[208px] w-[224px] flex-col overflow-hidden rounded-none border border-[#1F2937]/20 bg-white shadow-[0_16px_40px_rgba(31,41,55,0.18)]">
        <HeaderBar />
        <div className="flex flex-1 flex-col gap-2 px-4 py-3">
          {children}
        </div>
      </div>
    </div>
  );
}
