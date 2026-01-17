"use client";
import React from "react";
import { Activity } from "lucide-react";

const Warning = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full border-t-[2px] border-pink-50 py-4 md:py-6 bg-white/90 backdrop-blur-xl z-[100] shadow-[0_-15px_40px_rgba(233,30,99,0.1)]">
      <div className="max-w-[1100px] mx-auto px-4 flex items-center justify-center gap-4">
        {/* Chap tomondagi dinamik puls */}
        <div className="hidden sm:flex items-center gap-2">
          <Activity className="w-4 h-4 text-[#E91E63] animate-pulse opacity-50" />
          <div className="h-[2px] w-12 md:w-20 bg-gradient-to-r from-transparent to-[#E91E63]/40" />
        </div>

        <p className="text-[#000000] font-[1000] text-[12px] md:text-[16px] lg:text-[19px] tracking-[2px] md:tracking-[4px] uppercase italic text-center leading-none">
          BFQ. DORI VOSITASI{" "}
          <span className="text-[#E91E63]">HISOBLANMAYDI.</span>
          <br />
          <span className="text-[8px]">Qabul qilishdan avval shifokor bilan maslahatlashing</span>
        </p>

        {/* O'ng tomondagi dinamik puls */}
        <div className="hidden sm:flex items-center gap-2">
          <div className="h-[2px] w-12 md:w-20 bg-gradient-to-l from-transparent to-[#E91E63]/40" />
          <Activity className="w-4 h-4 text-[#E91E63] animate-pulse opacity-50" />
        </div>
      </div>

      {/* Dekorativ pushti nur (pastki qismda yengil effekt uchun) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-pink-500/5 blur-[40px] -z-10" />
    </div>
  );
};

export default Warning;
