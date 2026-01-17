"use client";
import Image from "next/image";
import { Clock, CheckCircle2 } from "lucide-react";

export default function Usage() {
  const usageInfo = [
    {
      icon: <Clock className="w-8 h-8 text-[#E31E24]" />,
      title: "2 TA KAPSULA",
      desc: "Kuniga 2 mahal iste'mol qilish tavsiya etiladi",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-[#E31E24]" />,
      title: "YUTISH OSON",
      desc: "Kapsulaning optimal hajmi va silliq qoplami tufayli",
    },
  ];

  return (
    <section
      id="usage"
      className="w-full py-4 bg-white overflow-hidden relative"
    >
      {/* Orqa fondagi yumshoq dekorativ nur */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-50 to-white -z-0" />

      <div className="max-w-[1100px] mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* CHAP TOMON: QO'LLASH KO'RSATMALARI */}
        <div className="w-full md:w-1/2 space-y-10 order-2 md:order-1">
          <div className="space-y-2">
            <h2 className="text-[36px] md:text-[52px] font-[1000] italic leading-[0.9] tracking-tighter uppercase">
              <span className="text-[#1A2B3C]">URO</span>
              <span className="text-[#E31E24]">PRO</span>
            </h2>
            <p className="text-[#1A2B3C] text-[24px] md:text-[34px] font-extrabold uppercase tracking-tight">
              QO'LLASH <span className="text-[#E31E24] italic">JUDA ODDIY</span>
            </p>
          </div>

          <div className="space-y-8">
            {usageInfo.map((info, idx) => (
              <div key={idx} className="flex items-start gap-5 group">
                <div className="p-4 rounded-[20px] bg-slate-50 border border-slate-100 group-hover:border-[#E31E24]/30 group-hover:bg-white group-hover:shadow-lg transition-all duration-500">
                  {info.icon}
                </div>
                <div className="pt-1">
                  <h4 className="text-[#1A2B3C] font-black text-sm md:text-base tracking-wider uppercase italic">
                    {info.title}
                  </h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[320px] mt-1">
                    {info.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Kurs haqida ma'lumot - Oq fonga moslangan */}
          <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 blur-[40px] rounded-full" />
            <p className="text-[#E31E24] text-[10px] font-black uppercase tracking-[3px] mb-3">
              TAVSIYA ETILGAN QABUL QILISH KURSI
            </p>
            <h3 className="text-[#1A2B3C] text-3xl md:text-4xl font-[1000] italic uppercase tracking-tighter">
              30-45 KUN <span className="text-slate-300">DAVOMIDA</span>
            </h3>
          </div>
        </div>

        {/* O'NG TOMON: VIZUAL EFFEKT */}
        <div className="w-full md:w-1/2 relative h-[380px] md:h-[550px] order-1 md:order-2">
          <div className="relative w-full h-full rounded-[40px] overflow-hidden border border-slate-100 shadow-2xl">
            <Image
              src="/effect.png"
              alt="UroPro Usage Visualization"
              fill
              className="object-contain opacity-90 group-hover:scale-105 transition-transform duration-[2000ms]"
              priority
            />
            {/* Overlay qizil nur (oq fonga moslangan) */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-500/10 to-transparent" />
          </div>

          {/* Badge: 100% SIFAT - Dizayn yanada premium qilindi */}
          <div className="absolute -bottom-6 -right-6 md:right-0 bg-[#1A2B3C] text-white p-6 rounded-3xl shadow-2xl transform rotate-3 hidden sm:flex flex-col items-center border-[4px] border-white">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#E31E24]">
              Premium
            </span>
            <span className="text-2xl font-[1000] italic">QUALITY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
