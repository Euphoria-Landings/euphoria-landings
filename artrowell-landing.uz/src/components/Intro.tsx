"use client";
import Image from "next/image";
import { useState } from "react";
import OrderModal from "./OrderModal";

export default function Intro() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="relative w-full overflow-hidden bg-white mt-[60px] md:mt-[80px]"
      aria-labelledby="hero-heading"
    >
      {/* Dekorativ fon - Bo'g'imlar tarmog'i effekti */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#CC1D24]/5 to-transparent opacity-40 z-0"
        aria-hidden="true"
      />

      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center min-h-[550px] md:min-h-[650px] py-10 md:py-16 gap-12">
          {/* --- CHAP TOMON: STRATEGIK MATNLAR --- */}
          <div className="w-full md:w-[55%] flex flex-col items-start text-left">
            <header className="relative mb-6">
              <h1
                id="hero-heading"
                className="text-[42px] md:text-[65px] font-[1000] italic leading-[0.85] tracking-tighter text-[#1A1A1A] uppercase"
              >
                ARTRO<span className="text-[#CC1D24]">WELL</span>
              </h1>
              <div className="mt-6 space-y-3">
                <h3 className="text-[18px] md:text-[26px] font-black leading-[1.1] text-[#1A1A1A] tracking-tight uppercase">
                  faol hayot uchun bo‘g‘imlarni
                  <span className="text-[#CC1D24]"> qo‘llab-quvvatlash!</span>
                </h3>
              </div>
            </header>

            <div className="flex items-start gap-4 max-w-[450px] mb-10 border-l-4 border-[#CC1D24] pl-5 bg-gray-50/70 py-5 pr-4 rounded-r-2xl shadow-sm">
              <p className="text-[#333] text-[10px] md:text-[13px] leading-relaxed font-bold uppercase tracking-tight">
                Bo‘g‘imlarning funksional holatini qo‘llab- quvvatlash va
                yuklamalar paytida noqulaylik hissini kamaytirish uchun
                vitamin-mineral kompleksli 
                <span className="text-[#CC1D24]">biologik faol qo‘shimcha</span>.
              </p>
            </div>

            {/* CTA tugmalari */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#CC1D24] text-white px-12 py-5 rounded-full font-black text-[11px] uppercase tracking-[2px] shadow-2xl shadow-red-600/30 hover:bg-[#1A1A1A] transition-all duration-300 active:scale-95 text-center"
              >
                Hozir xarid qilish
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white border-2 border-[#1A1A1A] text-[#1A1A1A] px-10 py-5 rounded-full font-black text-[11px] uppercase tracking-[2px] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 active:scale-95 text-center"
              >
                Mutaxassis maslahati
              </button>
            </div>
          </div>

          {/* --- O'NG TOMON: MAHSULOT VIZUALIZATSIYASI --- */}
          <div className="w-full md:w-[45%] relative mt-8 md:mt-0 flex justify-center items-center">
            <div className="relative w-full max-w-[480px] aspect-square lg:aspect-[4/5]">
              {/* Mahsulot foni (Aura) */}
              <div
                className="absolute inset-0 bg-[#CC1D24]/10 rounded-full blur-[100px]"
                aria-hidden="true"
              />

              {/* Inson anatomiyasi va og'riq nuqtalari (Placeholder: Rasmdagi inson figurasi) */}
              <div className="relative w-full h-full flex items-center justify-center p-2">
                <Image
                  src="/intro.png" // Bu yerda yuklangan rasmdagi inson figurasi bo'ladi
                  alt="Bo'g'imlar tiklanish jarayoni"
                  width={450}
                  height={550}
                  className="object-contain drop-shadow-xl"
                  priority
                />
              </div>

              {/* Mahsulot qutisi va flakoni (Siz yuklagan rasm) */}
              <div className="absolute -bottom-10 -left-6 md:-left-30 z-20 w-[220px] md:w-[320px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                <div className="relative aspect-[1.2/1]   transparent overflow-hidden group">
                  <Image
                    src="/intro2.png" // Yuklagan rasmingizni shu nomda saqlang
                    alt="Artrowell mahsulot qutisi va flakoni"
                    fill
                    className="object-contain p-10 transition-transform duration-700 group-hover:scale-101"
                  />
                </div>
              </div>

              {/* Sifat belgisi (Badge) */}
              <div className="absolute -top-4 -right-2 md:-right-8 z-30 w-28 h-28 md:w-36 md:h-36 rounded-full bg-white border-[6px] border-[#CC1D24] shadow-2xl flex flex-col items-center justify-center text-[#1A1A1A] rotate-6 overflow-hidden">
                <div className="bg-[#CC1D24] w-full text-center py-1 absolute top-4">
                  <span className="text-[8px] md:text-[10px] font-black text-white uppercase tracking-tighter">
                    Eko-Mahsulot
                  </span>
                </div>
                <span className="text-3xl md:text-5xl font-[1000] text-[#CC1D24] mt-2 italic">
                  40
                </span>
                <span className="text-[10px] md:text-[12px] font-black uppercase tracking-tighter">
                  KAPSULA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dekorativ chiziq */}
      <div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#CC1D24]/30 to-transparent"
        aria-hidden="true"
      />

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
