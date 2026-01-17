"use client";
import { useState } from "react";
import OrderModal from "./OrderModal";
import CountdownTimer from "./CountdownTimer";

export default function TopNav() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Top bar: To'q qora fonda qizil urg'u bilan */}
      <div className="w-full bg-[#0F0F0F] h-[40px] flex items-center relative z-[70] border-b border-white/5">
        <div className="max-w-[1100px] w-full mx-auto px-4 flex justify-between items-center">
          {/* CHAP TOMON: Aksiya va Taymer */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CC1D24] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#CC1D24]"></span>
              </span>
              <p className="text-[9px] md:text-[10px] text-white/60 font-black uppercase tracking-[2px] hidden sm:block">
                Aksiya yakunlanishiga:
              </p>
            </div>

            {/* TAYMER */}
            <div className="bg-white/5 px-3 py-1 rounded-md border border-white/10">
              <div className="text-[#CC1D24] font-black scale-90 md:scale-95 flex items-center">
                <CountdownTimer />
              </div>
            </div>
          </div>

          {/* O'NG TOMON: Rasmiy do'kon tugmasi */}
          <div className="flex items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-2 text-white/40 hover:text-white transition-all duration-300"
            >
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[3px] border-b border-white/10 group-hover:border-[#CC1D24] pb-0.5 transition-all">
                Rasmiy distribyutor
              </span>
              <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#CC1D24] transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-2.5 h-2.5 text-white"
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

        {/* ORQA FONDA SEKIN HARAKATLANUVCHI MATN (DIASTOP) */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden whitespace-nowrap flex items-center select-none">
          <p className="text-white text-[20px] font-black italic tracking-tighter uppercase animate-marquee">
            DIASTOP DIASTOP DIASTOP DIASTOP DIASTOP DIASTOP DIASTOP DIASTOP
            DIASTOP DIASTOP DIASTOP DIASTOP DIASTOP DIASTOP DIASTOP DIASTOP
          </p>
        </div>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
