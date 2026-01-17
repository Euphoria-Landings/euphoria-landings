"use client";
import React from "react";
import { Leaf, ShieldCheck, Zap, Droplets } from "lucide-react";

export default function Purchase() {
  const cards = [
    {
      title: "kattalarga tavsiya etilishi mumkin",
      desc: "Organizmni parazitlar, toksinlar va zararli chiqindilardan tabiiy va xavfsiz tozalashga yordam beradi.",
      icon: <ShieldCheck className="w-12 h-12 text-[#8BC34A]" />,
    },
    {
      title: "IMMUNITET TIKLANISHI",
      desc: "Ichak florasini yaxshilaydi va organizmning himoya qobiliyatini oshirib, qayta zararlanishdan himoya qiladi.",
      icon: <Zap className="w-12 h-12 text-[#004D40]" />,
    },
    {
      title: "100% TABIIY EKSTRAKTLAR",
      desc: "Hech qanday kimyoviy qo'shimchalarsiz. Artemisia, Sezam va nodir efir moylarining kuchli kombinatsiyasi.",
      icon: <Leaf className="w-12 h-12 text-[#8BC34A]" />,
    },
  ];

  return (
    <section className="relative w-full top-[-10px] bg-gradient-to-b from-white via-[#F1F8E9] to-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        {/* AFZALLIKLAR KARTALARI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-md rounded-[45px] p-10 shadow-[0_15px_40px_rgba(0,77,64,0.05)] border border-green-50 hover:border-[#8BC34A]/30 transition-all duration-300 group"
            >
              <div className="mb-8 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-[#004D40] font-[1000] text-[14px] mb-4 tracking-[2px] uppercase">
                {card.title}
              </h3>
              <p className="text-slate-500 text-[13px] leading-relaxed font-bold">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* LOGOTIP QISMI */}
        <div className="flex flex-col items-center text-center space-y-8 mb-16">
          <div className="flex items-center select-none uppercase">
            <span className="text-5xl md:text-[65px] font-[1000] tracking-tighter text-[#004D40] leading-none">
              Parazit
            </span>
            <span className="text-5xl md:text-[65px] font-[1000] italic tracking-tighter text-[#8BC34A] leading-none ml-2">
              OFF
            </span>
            <div className="flex items-center justify-center ml-3">
  
            </div>
          </div>

          <div className="h-[4px] w-32 bg-gradient-to-r from-transparent via-[#8BC34A] to-transparent rounded-full" />

          <p className="text-[#004D40]/40 font-black tracking-[8px] uppercase text-[10px] md:text-[14px] mt-4">
            ANTIPARAZITAR TABIIY MAJMUA
          </p>
        </div>

        {/* STATIK TOMCHILAR (ANIMATSIYASIZ) */}
        <div className="relative h-20 flex justify-center items-center gap-16 opacity-60">
          <Droplets className="text-[#004D40] w-10 h-10" fill="currentColor" />
          <Droplets className="text-[#8BC34A] w-14 h-14" fill="currentColor" />
          <Droplets className="text-green-200 w-12 h-12" fill="currentColor" />
        </div>
      </div>

      {/* FON ELEMENTLARI */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
        <div className="absolute -top-[15%] -left-[10%] w-[50%] h-[50%] bg-[#8BC34A]/10 rounded-full blur-[150px]" />
        <div className="absolute -bottom-[15%] -right-[10%] w-[50%] h-[50%] bg-[#004D40]/5 rounded-full blur-[150px]" />
      </div>
    </section>
  );
}
