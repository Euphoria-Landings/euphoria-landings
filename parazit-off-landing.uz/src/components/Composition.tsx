"use client";
import Image from "next/image";
import { Leaf, CheckCircle, Droplets } from "lucide-react";

export default function Composition() {
  const mainFeatures = {
    benefits: [
      "organizmni tozalashga yordam beradi",
      "parazitlar uchun noqulay muhit yaratishga yordam beradi",
      "oshqozon-ichak trakti faoliyatini qo‘llab-quvvatlaydi",
    ],
    components: [
      "ARTEMISIA (SHUVOQ) EFIR MOYI",
      "Artemisia 25%",
      "Sezam moyi 75%",
    ],
  };

  const formulaData = [
    { name: "Achchiq", desc: "shuvoq moyi" },
    { name: "Artemisia", desc: "25% EKSTRAKT" },
    { name: "SEZAM", desc: "100% TABIIY MOY" },
    { name: "FORMULA", desc: "TOZALASH KUCHI" },
  ];

  return (
    <section
      className="w-full py-6 bg-[#F8FAF8] overflow-hidden"
      id="composition"
    >
      <div className="max-w-[1100px] mx-auto px-4">
        {/* SARLAVHA */}
        <div className="text-center mb-16">
          <h2 className="text-[#004D40] text-3xl md:text-5xl font-[1000] italic leading-tight uppercase tracking-tighter">
            TABIIY VA KUCHLI
            <span className="text-[#8BC34A]"> TARKIB</span>
          </h2>
          <p className="text-slate-500 font-bold mt-4 uppercase text-[10px] md:text-xs tracking-[2px] max-w-2xl mx-auto leading-relaxed">
            ParazitOff — Bu faqat tabiiy komponentlardan tashkil topgan majmua
            bo'lib, har bir tomchi ichki tozalik uchun xizmat qiladi.
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6">
          {/* 1-KARTA: TA'SIR DOIRASI */}
          <div className="w-full lg:w-[340px] bg-white rounded-[40px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,77,64,0.05)] border border-green-50 relative z-30 transition-all duration-500 hover:-translate-y-2 group">
            <h3 className="text-[#8BC34A] text-2xl font-black uppercase italic">
              ASOSIY
            </h3>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1 mb-6">
              FOYDALI XUSUSIYATLARI
            </p>
            <ul className="space-y-6">
              {mainFeatures.benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#8BC34A] shrink-0 mt-0.5" />
                  <p className="text-[#004D40] text-[13px] font-black leading-snug uppercase">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* MARKAZIY QISM: Rasm ko'rinishi uchun to'liq to'g'rilangan blok */}
          <div className="flex flex-col items-center gap-10 z-10">
            {/* Rasm Konteyneri */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Orqa fondagi aylanuvchi va pulsatsiyalanuvchi effektlar */}
              <div className="absolute inset-0 bg-[#8BC34A]/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute inset-0 border-2 border-dashed border-[#8BC34A]/30 rounded-full animate-[spin_15s_linear_infinite]" />

              {/* Rasmning o'zi */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-[90%] h-[90%] transition-transform duration-700 hover:scale-110">
                  <Image
                    src="/center.png"
                    alt="ParazitOff Center"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 256px, 320px"
                  />
                </div>
              </div>

          
            </div>

            {/* Pastki Grid - kichik statlar */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-[400px]">
              {formulaData.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-[22px] border border-green-50 shadow-sm text-center hover:bg-green-50 transition-colors"
                >
                  <h4 className="text-[#8BC34A] font-black text-[10px] uppercase mb-1">
                    {m.name}
                  </h4>
                  <p className="text-[9px] text-slate-400 font-bold uppercase">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2-KARTA: KOMPONENTLAR */}
          <div className="w-full lg:w-[340px] bg-[#004D40] rounded-[40px] p-8 md:p-10 shadow-2xl shadow-green-900/20 relative z-30 transition-all duration-500 hover:-translate-y-2 group">
            <h3 className="text-[#8BC34A] text-2xl font-black uppercase italic">
              KOMPONENTLAR
            </h3>
            <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-1 mb-6">
              EKSTRAKTLAR MAJMUASI
            </p>
            <ul className="space-y-6">
              {mainFeatures.components.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-[#8BC34A] shrink-0 mt-0.5" />
                  <p className="text-white text-[13px] font-black leading-snug uppercase italic">
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
