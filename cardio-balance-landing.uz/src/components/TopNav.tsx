"use client";
import { useState } from "react";
import OrderModal from "./OrderModal";
import CountdownTimer from "./CountdownTimer"; // Yuqoridagi komponentni import qilamiz

export default function TopNav() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-[#1A1A1A] h-[38px] flex items-center relative z-[70] border-b border-white/5">
        <div className="max-w-[1100px] w-full mx-auto px-4 flex justify-between items-center">
          {/* CHAP TOMON: Jonli status va SOAT */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <p className="text-[10px] md:text-[11px] text-white font-bold uppercase tracking-widest hidden sm:block">
                Aksiya:
              </p>
            </div>
            {/* SOAT SHU YERDA */}
            <CountdownTimer />
          </div>

          {/* O'NG TOMON: Tugma */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-wider border-b border-red-600 pb-0.5">
                Qayerdan sotib olish kerak?
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-3 h-3 text-red-600 group-hover:translate-x-1 transition-transform"
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

        {/* ORQA FONDA SEKIN HARAKATLANUVCHI MATN */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden whitespace-nowrap flex items-center">
          <p className="text-white text-[20px] font-black italic tracking-tighter">
            SUSTAFLEX SUSTAFLEX SUSTAFLEX SUSTAFLEX SUSTAFLEX SUSTAFLEX
            SUSTAFLEX
          </p>
        </div>
      </div>

      {/* MODAL */}
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
