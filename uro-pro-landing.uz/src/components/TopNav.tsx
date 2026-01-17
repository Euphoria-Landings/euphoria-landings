"use client";
import { useState } from "react";
import OrderModal from "./OrderModal";
import CountdownTimer from "./CountdownTimer";

export default function TopNav() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Oq uslubga moslandi: bg-white va nozik slate-100 chegara.
        Soyalar orqali chuqurlik berildi.
      */}
      <div className="w-full bg-white h-[42px] flex items-center relative z-[70] border-b border-slate-100 shadow-sm">
        <div className="max-w-[1100px] w-full mx-auto px-4 flex justify-between items-center">
          {/* CHAP TOMON: Jonli status va TAYMER */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E31E24]"></span>
              </span>
              <p className="text-[10px] md:text-[11px] text-[#1A2B3C] font-black uppercase tracking-[2px] hidden sm:block">
                Cheklangan taklif:
              </p>
            </div>

            {/* SOAT: Oq fonda yanada aniq ko'rinishi uchun taymer */}
            <div className="scale-90 md:scale-100 origin-left">
              <CountdownTimer />
            </div>
          </div>

          {/* O'NG TOMON: Harakatga chaqiruv (CTA) */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-2 text-[#1A2B3C] hover:text-[#E31E24] transition-all"
            >
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[1.5px] border-b-2 border-[#E31E24] pb-0.5 transition-colors">
                Hoziroq buyurtma berish
              </span>
              <div className="w-5 h-5 rounded-full bg-[#E31E24] flex items-center justify-center group-hover:bg-[#1A2B3C] transition-colors shadow-[0_4px_10px_rgba(227,30,36,0.2)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-3 h-3 text-white transition-colors"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* ORQA FONDA SEKIN HARAKATLANUVCHI MATN - Oq fonga mos kulrang */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden whitespace-nowrap flex items-center select-none">
          <p className="text-[#1A2B3C] text-[22px] font-black italic tracking-tighter uppercase">
            UROPRO UROPRO UROPRO UROPRO UROPRO UROPRO UROPRO UROPRO UROPRO
            UROPRO UROPRO
          </p>
        </div>
      </div>

      {/* MODAL */}
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
