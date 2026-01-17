"use client";
import { useState } from "react";
import OrderModal from "./OrderModal";
import CountdownTimer from "./CountdownTimer";

export default function TopNav() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-[#1A1A1A] h-[40px] flex items-center relative z-[70] border-b border-[#C5A358]/20">
        <div className="max-w-[1100px] w-full mx-auto px-4 flex justify-between items-center">
          {/* CHAP TOMON: Aksiya holati va Taymer */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {/* Statik nuqta (animatsiyasiz) */}
              <span className="flex h-2 w-2 rounded-full bg-[#C5A358]"></span>
              <p className="text-[10px] md:text-[11px] text-white font-bold uppercase tracking-widest hidden sm:block">
                Cheklangan taklif:
              </p>
            </div>
            {/* SOAT SHU YERDA */}
            <CountdownTimer />
          </div>

          {/* O'NG TOMON: Tugma */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-2 text-white/90 hover:text-[#C5A358] transition-colors"
            >
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest border-b border-[#C5A358] pb-0.5">
                Konsultatsiya olish
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-3 h-3 text-[#C5A358]"
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

        {/* ORQA FONDA STATIK BREND MATNI */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] overflow-hidden whitespace-nowrap flex items-center">
          <p className="text-white text-[22px] font-black italic tracking-tighter uppercase">
            GEMO PLUS GEMO PLUS GEMO PLUS GEMO PLUS GEMO PLUS GEMO PLUS GEMO
            PLUS
          </p>
        </div>
      </div>

      {/* MODAL */}
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
