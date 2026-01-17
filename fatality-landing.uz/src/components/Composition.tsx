"use client";
import Image from "next/image";
import { Activity } from "lucide-react";

export default function Composition() {
  const mainFeatures = {
    benefits: [
      "YOG'LARNI TABIIY ERITISH VA QOMATNI TIKLASH",
      "METABOLIZMNI 2 BARAVAR TEZLASHTIRISH",
      "ISHTAHANI SAMARALI NAZORAT QILISH",
    ],
    components: [
      "O'SIMLITABIIY O'SIMLIK EKSTRAKTLARI MAJMUASI",
      "moychechak ekstrakti",
      "mingbargI",
    ],
  };

  const formulaData = [
    { name: "zubturum", desc: "ekstrakti" },
    { name: "EKSTRAKTLAR", desc: "100% TABIIY MEVA" },
    { name: "mingbarg", desc: "ekstrakti" },
    { name: "baland andiz", desc: "ekstrakti" },
  ];

  return (
    <section className="w-full py-16 bg-white overflow-hidden" id="composition">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Sarlavha */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Activity
              className="text-[#E91E63] w-6 h-6 animate-pulse"
              strokeWidth={3}
            />
            <span className="text-[#E91E63] text-[10px] md:text-xs font-black uppercase tracking-[5px]">
              SCIENTIFIC FORMULA
            </span>
          </div>
          <h2 className="text-[#000000] text-3xl md:text-5xl font-[1000] italic leading-tight uppercase tracking-tighter">
            YUKSAK SAMARALI
            <span className="text-[#E91E63]"> TARKIB</span>
          </h2>

          <p className="text-[12px]  italic leading-tight uppercase tracking-tighter">
            Fatality - bu muvozanatli ovqatlanish va faol turmush tarzi
            doirasida tana vaznini kamaytirishni qo‘llab-quvvatlash uchun ishlab
            chiqilgan biologik faol qo‘shimchadir. Mahsulot formulasi almashinuv
            jarayonlari va umumiy salomatlikni qo‘llab-quvvatlashga qaratilgan.
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* 1-Karta: Foydali xususiyatlar */}
          <div className="w-full lg:w-[360px] bg-white rounded-[40px] p-8 md:p-10 shadow-[0_20px_50px_rgba(233,30,99,0.08)] border border-pink-50 relative z-30 transition-all duration-500 hover:-translate-y-2 group">
            <h3 className="text-[#E91E63] text-2xl font-[1000] uppercase italic">
              FUNKSIYA
            </h3>
            <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mt-1 mb-6">
              ASOSIY TA'SIR MEXANIZMI
            </p>
            <ul className="space-y-6">
              {mainFeatures.benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-lg bg-pink-50 flex items-center justify-center shrink-0 mt-0.5 border border-pink-100 rotate-12">
                    <div className="w-2 h-2 rounded-full bg-[#E91E63] animate-ping" />
                  </div>
                  <p className="text-[#000000] text-[12px] font-black leading-snug uppercase italic">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* MARKAZIY QISM: RASM KO'RINISHI UCHUN TUZATILDI */}
          <div className="flex flex-col items-center gap-10 z-10">
            {/* Rasm konteyneri */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Orqa fondagi aylanuvchi nur */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E91E63]/20 to-transparent rounded-full animate-spin-slow opacity-60 blur-2xl" />

              {/* Markaziy doira va Rasm */}
              <div className="absolute inset-0 bg-black rounded-full border-[10px] border-white shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full p-12 transition-transform duration-700 hover:scale-110">
                  <Image
                    src="/center.png"
                    alt="Fatality Product"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Pastki Grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-[400px]">
              {formulaData.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-[22px] border border-pink-50 shadow-sm text-center"
                >
                  <h4 className="text-[#E91E63] font-black text-[10px] uppercase mb-1">
                    {m.name}
                  </h4>
                  <p className="text-[9px] text-black font-black uppercase opacity-60 italic">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2-Karta: Tarkib */}
          <div className="w-full lg:w-[360px] bg-[#000000] rounded-[40px] p-8 md:p-10 shadow-2xl shadow-pink-900/20 relative z-30 transition-all duration-500 hover:-translate-y-2 group">
            <h3 className="text-[#E91E63] text-2xl font-[1000] uppercase italic">
              MAJMUA
            </h3>
            <p className="text-[9px] text-white/40 font-black uppercase tracking-widest mt-1 mb-6">
              20 TA KAPSULA
            </p>
            <ul className="space-y-6">
              {mainFeatures.components.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5 border border-white/10 -rotate-12">
                    <div className="w-2 h-2 rounded-full bg-[#E91E63]" />
                  </div>
                  <p className="text-white text-[12px] font-black leading-snug uppercase italic">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
