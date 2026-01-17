import React from "react";

const Warning = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-[90] pointer-events-none">
      {/* pointer-events-none: foydalanuvchi yozuv ustidagi tugmalarni 
        bosmoqchi bo'lsa, bu qatlam xalaqit bermaydi.
      */}

      <div className="w-full border-t-[1px] border-white/10 py-3 md:py-4 bg-black/95 backdrop-blur-md shadow-[0_-15px_40px_rgba(0,0,0,0.5)]">
        <div className="max-w-[1100px] mx-auto px-4 text-center pointer-events-auto">
          {/* pointer-events-auto: yozuvni o'zini tanlash mumkin bo'ladi */}

          <p className="text-[#E31E24] font-[1000] text-[10px] md:text-[14px] tracking-[2px] md:tracking-[5px] uppercase italic leading-none">
            BQM. DORI VOSITASI HISOBLANMAYDI.
          </p>

          <p className="text-white/40 font-black text-[7px] md:text-[9px] uppercase tracking-[1px] md:tracking-[2px] mt-1.5">
            Iste'mol qilishdan avval mutaxassis bilan maslahatlashing
          </p>
        </div>
      </div>
    </div>
  );
};

export default Warning;
