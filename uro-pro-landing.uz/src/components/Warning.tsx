import React from "react";

const Warning = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-[90] pointer-events-none">
      {/* pointer-events-none: Yozuv ustidan bosganda uning orqasidagi 
        kontent yoki tugmalar ishlashi uchun kerak.
      */}

      <div className="w-full border-t-[1px] border-[#E31E24]/30 py-3 md:py-4 bg-black/10 backdrop-blur-md shadow-[0_-10px_30px_rgba(227,30,36,0.1)]">
        <div className="max-w-[1100px] mx-auto px-4 text-center pointer-events-auto">
          {/* pointer-events-auto: Matnni o'zini tanlash (select) imkoniyati uchun */}

          <p className="text-[#E31E24] font-[1000] text-[10px] md:text-[14px] tracking-[3px] md:tracking-[6px] uppercase italic leading-none">
            BFQ. DORI VOSITASI HISOBLANMAYDI. <br />
            <span className="text-[7px] md:text-[10px] ">
              Qabul qilishdan avval shifokor bilan maslahatlashing
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Warning;
