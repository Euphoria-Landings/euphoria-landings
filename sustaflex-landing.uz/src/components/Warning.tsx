import React from "react";

const Warning = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-[90] pointer-events-none">
      {/* pointer-events-none: yozuv ustiga bosganda uning orqasidagi 
          tugmalar ishlashi uchun kerak.
      */}

      <div className="w-full border-t-[1px] border-red-600/30 py-3 md:py-4 bg-white/95 backdrop-blur-md shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <div className="max-w-[1100px] mx-auto px-4 text-center pointer-events-auto">
          {/* pointer-events-auto: yozuvning o'zi interaktiv bo'lishi mumkin */}

          <p className="text-red-600 font-[1000] text-[10px] md:text-[14px] tracking-[3px] md:tracking-[5px] uppercase italic leading-none">
            BQM. DORI VOSITASI HISOBLANMAYDI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Warning;
