"use client";
import React from "react";

export default function Purchase() {
  const cards = [
    {
      title: "NOQULAYLIKNI KAMAYTIRISH",
      desc: "Anal kanali sohasidagi yoqimsiz hislarni va noqulaylikni tezda kamaytirishga yordam beradi.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-12 h-12 text-[#C5A358]"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M8 12L11 15L16 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "TETIKLASHTIRUVCHI TA'SIR",
      desc: "Isiriq efir moyi hisobiga teri va shilliq qavatlarda tetiklik va tozalik hissini uyg'otadi.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-12 h-12 text-[#1A1A1A]"
        >
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "GIGIYENIK PARVARISH",
      desc: "Bavosil va yuqori sezuvchanlikda anal sohasini yumshoq va xavfsiz parvarishlash uchun mo'ljallangan.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-12 h-12 text-[#C5A358]"
        >
          <path
            d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full py-4 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        {/* KARTALAR QISMI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-md rounded-[45px] p-10 shadow-[0_15px_45px_rgba(0,0,0,0.04)] border border-white hover:border-[#C5A358]/20 transition-all duration-300 group"
            >
              <div className="mb-8 transform group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-[#1A1A1A] font-black text-[13px] mb-4 tracking-[2px] uppercase">
                {card.title}
              </h3>
              <p className="text-gray-500 text-[13px] leading-relaxed font-bold">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* BREND LOGO VA STATUS */}
        <div className="flex flex-col items-center text-center space-y-6 mb-16">
          <h2 className="text-[55px] md:text-[70px] font-[1000] italic tracking-tighter leading-none uppercase select-none">
            <span className="text-[#1A1A1A]">GEMO</span>
            <span className="text-[#C5A358]">PLUS</span>
          </h2>
          <div className="h-[3px] w-24 bg-gradient-to-r from-transparent via-[#C5A358] to-transparent" />
          <p className="text-[#1A1A1A]/40 font-black tracking-[8px] uppercase text-[10px] md:text-[13px]">
            TABIIY EFIR MOYLARI MAJMUASI
          </p>
        </div>

        {/* DEKORATIV ELEMENTLAR (STATIK) */}
        <div className="relative h-20 flex justify-center items-center gap-10 opacity-40">
          <div className="w-10 h-5 bg-[#C5A358] rounded-full rotate-45" />
          <div className="w-12 h-6 bg-[#1A1A1A] rounded-full -rotate-12" />
          <div className="w-10 h-5 bg-gray-300 rounded-full rotate-[60deg]" />
        </div>
      </div>

      {/* FON GRADIENTLARI */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
        <div className="absolute -top-[10%] -left-[10%] w-[45%] h-[45%] bg-[#C5A358]/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[45%] h-[45%] bg-gray-200 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}
