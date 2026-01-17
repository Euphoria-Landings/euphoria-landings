"use client";
import { useState } from "react";
import OrderModal from "./OrderModal";
import CountdownTimer from "./CountdownTimer";

export default function TopNav() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Top bar: VisuCaps binafsha va to'q qora kombinatsiyasi */}
      <div className="w-full bg-[#0F0F0F] h-[40px] flex items-center relative z-[70] border-b border-white/5">
        <div className="max-w-[1100px] w-full mx-auto px-4 flex justify-between items-center">
          {/* CHAP TOMON: Aksiya holati */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4B2C82] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4B2C82]"></span>
              </span>
              <p className="text-[8px] md:text-[9px] text-white/50 font-black uppercase tracking-[2px] hidden sm:block">
                Chegirma muddati:
              </p>
            </div>

            {/* TAYMER - Binafsha urg'u bilan */}
            <div className="bg-white/[0.03] px-3 py-1 rounded-md border border-white/5">
              <div className="text-[#7B52AB] font-black scale-90 flex items-center">
                <CountdownTimer />
              </div>
            </div>
          </div>

          {/* O'NG TOMON: Status */}
          <div className="flex items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-2 text-white/30 hover:text-white transition-all duration-300"
            >
              <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[3px] border-b border-white/5 group-hover:border-[#4B2C82] pb-0.5 transition-all">
                Sertifikatlangan mahsulot
              </span>
              <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#4B2C82] transition-colors">
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

        {/* MARQUEE: VISUCAPS ANIMATSIYASI */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] overflow-hidden whitespace-nowrap flex items-center select-none">
          <p className="text-white text-[18px] font-black italic tracking-widest uppercase animate-marquee">
            VISUCAPS VISUCAPS VISUCAPS VISUCAPS VISUCAPS VISUCAPS VISUCAPS
            VISUCAPS VISUCAPS VISUCAPS VISUCAPS VISUCAPS VISUCAPS VISUCAPS
            VISUCAPS VISUCAPS
          </p>
        </div>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
