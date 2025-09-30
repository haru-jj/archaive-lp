'use client';

import React from 'react';

export default function ManufacturingDataFlow() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* データ連携線 - 製造業システム間の接続を表現 */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
          <linearGradient id="dataFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#37B7C4" stopOpacity="0"/>
            <stop offset="50%" stopColor="#37B7C4" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#37B7C4" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="dataFlow2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#37B7C4" stopOpacity="0"/>
            <stop offset="50%" stopColor="#37B7C4" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#37B7C4" stopOpacity="0"/>
          </linearGradient>
        </defs>

        {/* ERP、PLM、ファイルサーバー等の接続線 */}
        <path d="M100,200 Q300,100 600,200 Q900,300 1100,200" stroke="url(#dataFlow1)" strokeWidth="2" fill="none" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" values="0;20" dur="4s" repeatCount="indefinite"/>
        </path>

        <path d="M200,600 Q400,400 600,500 Q800,600 1000,400" stroke="url(#dataFlow1)" strokeWidth="2" fill="none" strokeDasharray="3,7">
          <animate attributeName="stroke-dashoffset" values="20;0" dur="3s" repeatCount="indefinite"/>
        </path>

        <path d="M200,100 L600,200 L200,300 L600,400 L200,500" stroke="url(#dataFlow2)" strokeWidth="1.5" fill="none" strokeDasharray="8,4">
          <animate attributeName="stroke-dashoffset" values="0;12" dur="5s" repeatCount="indefinite"/>
        </path>

        <path d="M1000,100 L600,200 L1000,300 L600,400 L1000,500" stroke="url(#dataFlow2)" strokeWidth="1.5" fill="none" strokeDasharray="6,6">
          <animate attributeName="stroke-dashoffset" values="12;0" dur="4s" repeatCount="indefinite"/>
        </path>
      </svg>

      {/* 動的グリッドパターン - データフローを表現 */}
      <div className="absolute inset-0 opacity-3">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="manufacturingGrid" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
              {/* ベースグリッド線（常に薄く表示） */}
              <path d="M 5 0 L 0 0 0 5" fill="none" stroke="#37B7C4" strokeWidth="0.15" opacity="0.08"/>
              
              {/* 電気が流れる線1 - 横線 */}
              <path d="M 0 0 L 5 0" fill="none" stroke="#37B7C4" strokeWidth="0.2" opacity="0" strokeDasharray="0.5,4.5">
                <animate attributeName="opacity" values="0;0.4;0" dur="2.7s" repeatCount="indefinite" begin="0.3s"/>
                <animate attributeName="stroke-dashoffset" values="0;-5" dur="2.7s" repeatCount="indefinite" begin="0.3s"/>
              </path>
              
              {/* 電気が流れる線2 - 縦線 */}
              <path d="M 0 0 L 0 5" fill="none" stroke="#37B7C4" strokeWidth="0.2" opacity="0" strokeDasharray="0.5,4.5">
                <animate attributeName="opacity" values="0;0.4;0" dur="4.8s" repeatCount="indefinite" begin="1.9s"/>
                <animate attributeName="stroke-dashoffset" values="0;-5" dur="4.8s" repeatCount="indefinite" begin="1.9s"/>
              </path>
              
              {/* 電気が流れる線3 - 横線（逆方向） */}
              <path d="M 5 5 L 0 5" fill="none" stroke="#37B7C4" strokeWidth="0.18" opacity="0" strokeDasharray="0.4,4.6">
                <animate attributeName="opacity" values="0;0.3;0" dur="3.1s" repeatCount="indefinite" begin="3.7s"/>
                <animate attributeName="stroke-dashoffset" values="0;5" dur="3.1s" repeatCount="indefinite" begin="3.7s"/>
              </path>
              
              {/* 電気が流れる線4 - 縦線（逆方向） */}
              <path d="M 5 5 L 5 0" fill="none" stroke="#37B7C4" strokeWidth="0.18" opacity="0" strokeDasharray="0.4,4.6">
                <animate attributeName="opacity" values="0;0.3;0" dur="5.6s" repeatCount="indefinite" begin="0.7s"/>
                <animate attributeName="stroke-dashoffset" values="0;5" dur="5.6s" repeatCount="indefinite" begin="0.7s"/>
              </path>
            </pattern>

          </defs>
          
          {/* 電気が流れるグリッド */}
          <rect width="100%" height="100%" fill="url(#manufacturingGrid)"/>
        </svg>
      </div>

      {/* 追加の流線アニメーション */}
      <div className="absolute inset-0 overflow-hidden opacity-8">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          {/* 流れる線1 - 左から右へ */}
          <path d="M0,200 Q300,150 600,200 Q900,250 1200,200" 
                fill="none" 
                stroke="#37B7C4" 
                strokeWidth="1" 
                strokeDasharray="10,20"
                opacity="0.15">
            <animate attributeName="stroke-dashoffset" values="0;-300" dur="8s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.05;0.25;0.05" dur="4s" repeatCount="indefinite"/>
          </path>
          
          {/* 流れる線2 - 上から下へ */}
          <path d="M200,0 Q250,200 300,400 Q350,600 400,800" 
                fill="none" 
                stroke="#37B7C4" 
                strokeWidth="0.8" 
                strokeDasharray="8,15"
                opacity="0.15">
            <animate attributeName="stroke-dashoffset" values="0;-230" dur="6s" repeatCount="indefinite" begin="2s"/>
            <animate attributeName="opacity" values="0.05;0.2;0.05" dur="3s" repeatCount="indefinite" begin="1s"/>
          </path>
          
          {/* 流れる線3 - 対角線 */}
          <path d="M0,0 Q400,200 800,400 Q1000,600 1200,800" 
                fill="none" 
                stroke="#37B7C4" 
                strokeWidth="0.6" 
                strokeDasharray="5,10"
                opacity="0.1">
            <animate attributeName="stroke-dashoffset" values="0;-150" dur="10s" repeatCount="indefinite" begin="1s"/>
            <animate attributeName="opacity" values="0.02;0.15;0.02" dur="5s" repeatCount="indefinite" begin="0.5s"/>
          </path>
        </svg>
      </div>

      {/* 深度感のある背景レイヤー */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#37B7C4]/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#37B7C4]/5 to-transparent" />
    </div>
  );
}