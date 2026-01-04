'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function CTASection() {
  return (
    <section className="py-10 sm:py-12 md:py-14 px-4 bg-gradient-to-r from-[#37B7C4] to-[#2A8B96] relative overflow-hidden scroll-mt-24" id="cta">
      <div className="mx-auto w-full max-w-6xl relative z-10">
        <h2 className="text-center text-white text-2xl sm:text-3xl font-bold mb-10">
          今すぐARCHAIVEを始めませんか？
        </h2>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 sm:gap-8 lg:gap-10">
          {/* 資料ダウンロードカード */}
          <div className="relative bg-white rounded-2xl w-full max-w-[600px] mx-auto pt-4 px-3 pb-2">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#1F2B36] text-white text-sm font-bold px-4 py-2 rounded-full border-4 border-white shadow-md whitespace-nowrap">
              詳しく知りたい！
            </div>
            <div className="border border-[#37B7C4]/30 rounded-xl p-5 h-full flex items-center justify-center">
              <div className="flex flex-col items-center sm:flex-row sm:items-center gap-4">
                <div className="w-34 h-38 flex items-center justify-center overflow-hidden mr-1">
                  <Image
                    src="/images/paper0-2-2.png"
                    alt="資料イラスト"
                    width={240}
                    height={260}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 flex flex-col items-center text-center ml-0 sm:ml-0">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1F2B36] mb-3 leading-snug">
                    ARCHAIVEご紹介資料
                  </h3>
                  <Link
                    href="/download"
                    className="inline-flex items-center justify-center bg-[#37B7C4] text-white font-bold px-6 sm:px-7 py-3 rounded-full shadow hover:opacity-90 transition self-center w-full sm:w-auto min-w-[190px] mt-4"
                  >
                    資料ダウンロード
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* お問い合わせカード */}
          <div className="relative bg-white rounded-2xl w-full max-w-[600px] mx-auto pt-2 px-3 pb-2">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#1F2B36] text-white text-sm font-bold px-4 py-2 rounded-full border-4 border-white shadow-md whitespace-nowrap">
              まずは試してみたい！
            </div>
            <div className="border border-[#37B7C4]/30 rounded-xl p-5 h-full flex items-center justify-center">
              <div className="flex flex-col items-center sm:flex-row sm:items-center gap-4">
                <div className="w-34 h-38 flex items-center justify-center overflow-hidden mr-1">
                  <Image
                    src="/images/UI_PC.png"
                    alt="UI画面イラスト"
                    width={210}
                    height={230}
                    className="object-contain ml-1 self-center mt-2"
                  />
                </div>
                <div className="flex-1 flex flex-col items-center text-center ml-0 sm:ml-0">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1F2B36] mb-3 leading-snug">
                    実際に体験してみる
                  </h3>
                  <Link
                    href="/apply"
                    className="inline-flex items-center justify-center bg-white border-2 border-gray-300 text-black font-bold px-6 sm:px-7 py-3 rounded-full hover:bg-gray-50 transition self-center w-full sm:w-auto min-w-[190px] mt-4"
                  >
                    無料デモ体験
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
