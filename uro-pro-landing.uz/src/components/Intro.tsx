"use client";
import Image from "next/image";
import { useState } from "react";
import { Zap, ShieldCheck } from "lucide-react";
import OrderModal from "./OrderModal";

export default function Intro() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-white mt-[40px] md:mt-[60px]">
      {/* Orqa fondagi mayin gradientlar - Oq fon uchun */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-red-50 via-slate-50 to-transparent z-0 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-50 rounded-full blur-[120px] z-0" />

      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center min-h-[500px] md:min-h-[650px] py-10 md:py-16">
          {/* --- CHAP TOMON: MATNLAR --- */}
          <div className="w-full md:w-[55%] flex flex-col items-start text-left order-2 md:order-1 mt-10 md:mt-0">
            <div className="relative mb-6">
              {/* Brendning vizual ko'rinishi */}
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[2px] w-12 bg-[#E31E24]" />
                <span className="text-[#E31E24] text-[10px] md:text-[12px] font-black uppercase tracking-[4px]">
                  Professional Series
                </span>
              </div>

              <h1 className="text-[52px] md:text-[82px] font-[1000] italic leading-[0.85] tracking-tighter text-[#1A2B3C] uppercase mb-4">
                URO<span className="text-[#E31E24]">PRO</span>
              </h1>

              <h2 className="text-[18px] md:text-[24px] font-extrabold leading-[1.1] text-[#1A2B3C] tracking-tight ">
                Erkaklar siydik-tanosil tizimining qulayligi <br />
                <span className="text-slate-500">
                  muvozanati va qo‘llab-quvvatlash uchun vosita
                </span>
              </h2>
            </div>

            <div className="flex items-start gap-4 max-w-[420px] mb-10 border-l-4 border-[#E31E24] pl-6 bg-slate-50 py-4 rounded-r-2xl">
              <p className="text-slate-600 text-[14px] md:text-[16px] leading-relaxed font-medium">
                Siydik-tanosil tizimi funksiyalarini tartibga soluvchi
                <span className="text-[#E31E24] font-bold italic">
                  {" "}
                  innovatsion formula
                </span>
                . Sog'lom hayot sari birinchi qadam.
              </p>
            </div>

            {/* Tugmalar guruhi */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#E31E24] text-white px-10 py-5 rounded-full font-black text-[11px] md:text-[12px] uppercase tracking-[3px] hover:bg-[#1A2B3C] shadow-[0_15px_40px_rgba(227,30,36,0.2)] transition-all active:scale-95 text-center whitespace-nowrap"
              >
                Buyurtma berish
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-transparent border-2 border-slate-200 text-[#1A2B3C] px-10 py-5 rounded-full font-black text-[11px] md:text-[12px] uppercase tracking-[3px] hover:bg-slate-100 transition-all active:scale-95 text-center whitespace-nowrap"
              >
                Konsultatsiya
              </button>
            </div>

            {/* Ishonch belgilari */}
            <div className="mt-10 flex items-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-[#E31E24]" size={18} />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  GMP Certified
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="text-[#E31E24]" size={18} />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  100% Tabiiy
                </span>
              </div>
            </div>
          </div>

          {/* --- O'NG TOMON: KOMPOZITSIYA (IKKITA RASM) --- */}
          <div className="w-full md:w-[45%] relative order-1 md:order-2 flex justify-center items-center">
            <div className="relative w-[300px] h-[350px] md:w-[480px] md:h-[550px]">
              {/* Orqa fondagi yumshoq nur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-500/5 rounded-full blur-[60px] animate-pulse z-0" />

              {/* 1. ASOSIY RASM (intro.png) */}
              <div className="relative w-full h-full transition-transform hover:scale-105 duration-700 ease-out z-10">
                <Image
                  src="/intro.png"
                  alt="UroPro Product Main"
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                  priority
                />
              </div>
              {/* --- IKKINCHI RASM (BORDER RADIUS BILAN) --- */}
              <div className="absolute -bottom-8 -left-6 md:-bottom-10 md:-left-16 z-30 w-[160px] h-[160px] md:w-[220px] md:h-[220px] transition-transform duration-500 hover:scale-105">
                <div className="relative w-full h-full rounded-[30px] overflow-hidden border-[6px] border-white shadow-2xl bg-white">
                  <Image
                    src="/intro2.png"
                    alt="UroPro Product Detail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Miqdori ko'rsatilgan Badge */}
              <div className="absolute top-5 -right-4 md:top-10 md:-right-8 z-40 w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-[#E31E24] border-[4px] border-white shadow-xl flex flex-col items-center justify-center text-white -rotate-12">
                <span className="text-[10px] md:text-[12px] font-black uppercase tracking-tighter opacity-80">
                  Kapsula
                </span>
                <span className="text-4xl md:text-5xl font-[1000] italic leading-none my-1">
                  40
                </span>
                <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[2px]">
                  Soni
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Dekorativ pastki chiziq */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E31E24]/20 to-transparent" />
    </section>
  );
}
