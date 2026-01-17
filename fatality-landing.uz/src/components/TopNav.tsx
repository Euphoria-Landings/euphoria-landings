"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import CountdownTimer from "./CountdownTimer";

const OrderModal = dynamic(() => import("./OrderModal"), { ssr: false });

export default function TopNav() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Fatality Asosiy Rangi: Qora (#000000)
          Balandlik: 34px - Ixcham va professional
      */}
      <div className="w-full bg-[#000000] h-[34px] flex items-center relative z-[70] border-b border-white/5">
        <div className="max-w-[1100px] w-full mx-auto px-4 flex justify-between items-center">
          {/* CHAP TOMON: Aksiya va Taymer */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E91E63] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#E91E63]"></span>
              </span>
              <p className="text-[9px] md:text-[10px] text-white font-black uppercase tracking-[2px] hidden sm:block">
                Maxsus taklif:
              </p>
            </div>

            {/* Taymer rangi Fatality uslubida pushti bo'ladi */}
            <div className="scale-90 origin-left">
              <CountdownTimer />
            </div>
          </div>

          {/* O'NG TOMON: Quick Link */}
          <div className="flex items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-2 text-white/80 hover:text-[#E91E63] transition-all duration-300"
            >
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[2px] border-b border-[#E91E63]/30 group-hover:border-[#E91E63] pb-0.5">
                Chegirma olish
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-3.5 h-3.5 text-[#E91E63] group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ORQA FONDA HARAKATLANUVCHI "FATALITY" BREND MATNI */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden whitespace-nowrap flex items-center">
          <p className="text-white text-[16px] font-[1000] italic tracking-[10px] uppercase">
            FATALITY SLIMMING COMPLEX FATALITY SLIMMING COMPLEX FATALITY
            SLIMMING COMPLEX FATALITY SLIMMING COMPLEX
          </p>
        </div>
      </div>

      {/* MODAL */}
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
