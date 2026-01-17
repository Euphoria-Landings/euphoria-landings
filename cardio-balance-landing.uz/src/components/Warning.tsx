import React from "react";

const Warning = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full border-t-[1px] border-red-600/20 py-4 bg-white/90 backdrop-blur-md z-[100] shadow-[0_-5px_20px_rgba(220,38,38,0.1)]">
      <div className="max-w-[1100px] mx-auto px-4 text-center">
        <p className="text-red-600 font-black text-sm md:text-xl tracking-[1px] uppercase italic">
          BFQ. DORI VOSITASI HISOBLANMAYDI.
        </p>
      </div>
    </div>
  );
};

export default Warning;
