"use client";
import { useState } from "react";
import OrderModal from "./OrderModal";
import CountdownTimer from "./CountdownTimer";

export default function TopNav() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* ParazitOff brend rangi: To'q yashil (#004D40) */}
      <div className="w-full bg-[#004D40] h-[36px] flex items-center relative z-[70] border-b border-white/5">
        <div className="max-w-[1200px] w-full mx-auto px-4 flex justify-between items-center">
          {/* CHAP TOMON: Aksiya va Taymer */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8BC34A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8BC34A]"></span>
              </span>
              <p className="text-[9px] md:text-[10px] text-white/90 font-black uppercase tracking-[1.5px] hidden sm:block">
                Chegirma vaqtinchalik:
              </p>
            </div>

            {/* CountdownTimer yashil tonlarda bo'lishi tavsiya etiladi */}
            <div className="scale-90 origin-left">
              <CountdownTimer />
            </div>
          </div>

          {/* O'NG TOMON: Quick Link */}
          <div className="flex items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300"
            >
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest border-b border-white/20 group-hover:border-[#8BC34A] pb-0.5">
                MAXSUS TAKLIF
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-3.5 h-3.5 text-[#8BC34A] group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ORQA FONDA SEKIN HARAKATLANUVCHI BREND MATNI */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden whitespace-nowrap flex items-center">
          <p className="text-white text-[18px] font-black italic tracking-[10px] uppercase">
            PARAZITOFF GELMINTLARDAN PARAZITOFF GELMINTLARDAN PARAZITOFF
            GELMINTLARDAN PARAZITOFF GELMINTLARDAN PARAZITOFF GELMINTLARDAN
          </p>
        </div>
      </div>

      {/* MODAL */}
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
