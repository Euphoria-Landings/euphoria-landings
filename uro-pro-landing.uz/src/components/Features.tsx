"use client";
import React from "react";
import { Shield, Activity, TrendingUp } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Shield className="w-5 h-5 text-white" />,
      text: "PROSTATIT VA YALLIG'LANISHLAR PROFILAKTIKASI",
    },
    {
      icon: <Activity className="w-5 h-5 text-white" />,
      text: "SIYDIK-TANOSIL TIZIMI FUNKSIYALARINI TARTIBGA SOLISH",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-white" />,
      text: "ERKAKLIK QUVVATI VA ENERGIYASINI OSHIRISH",
    },
  ];

  return (
    <section className="relative w-full py-4 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Asosiy konteyner - Oq fonda qizil aksentlar bilan */}
        <div className="relative bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col md:flex-row items-stretch overflow-hidden group">
          {/* Orqa fondagi harakatlanuvchi mayin qizil nur */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms] ease-in-out" />

          {features.map((item, idx) => (
            <div
              key={idx}
              className={`
                relative flex-1 flex items-center gap-5 px-8 py-7 md:py-10
                transition-all duration-500 hover:bg-slate-50 cursor-default
                ${
                  idx !== features.length - 1
                    ? "md:border-r border-slate-100"
                    : ""
                }
              `}
            >
              {/* Ikonka konteyneri (Qizil gradientli) */}
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E31E24] to-[#C1121F] shadow-[0_10px_20px_rgba(227,30,36,0.2)] flex items-center justify-center transform group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              {/* Matn (To'q ko'k-kulrang fonda) */}
              <div className="relative">
                <p className="text-[#1A2B3C] font-[1000] text-[9px] md:text-[10px] leading-snug tracking-tighter uppercase italic">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blok ostidagi yumshoq qizil effekt */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-32 bg-red-500/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
}
