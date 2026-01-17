"use client";
import Image from "next/image";
import { useState } from "react";
import OrderModal from "./OrderModal";
import { ShieldCheck, Leaf, Sparkles } from "lucide-react";

export default function Intro() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-white mt-[60px] md:mt-[70px]">
      {/* Orqa fondagi nafis dekorativ elementlar */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C5A358]/5 to-transparent z-0" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#C5A358]/5 blur-[120px] rounded-full z-0" />

      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center min-h-[450px] md:min-h-[620px] py-8 md:py-14 gap-8">
          {/* --- CHAP TOMON: MATNLAR --- */}
          <div className="w-full md:w-[55%] flex flex-col items-start text-left">
            {/* Kichik status bar */}
            <div className="flex items-center gap-2 mb-6 bg-[#C5A358]/10 px-4 py-2 rounded-full">
              <Sparkles size={14} className="text-[#C5A358]" />
              <span className="text-[10px] font-black uppercase tracking-[2px] text-[#C5A358]">
                100% Tabiiy va xavfsiz formula
              </span>
            </div>

            <div className="relative mb-6">
              <h1 className="text-[48px] md:text-[82px] font-[1000] italic leading-[0.85] tracking-tighter text-[#1A1A1A] uppercase">
                GEMO<span className="text-[#C5A358]">PLUS</span>
              </h1>
              <div className="mt-6 space-y-3">
                <h2 className="text-[25px] md:text-[30px] font-[900] leading-[1] text-[#1A1A1A] tracking-tight">
                 gemorroyga qarshi tabiiy vosita
                </h2>
              </div>
            </div>

            <div className="flex items-start gap-4 max-w-[480px] mb-10 border-l-4 border-[#C5A358] pl-6 py-2">
              <p className="text-slate-600 text-[15px] md:text-[17px] leading-relaxed font-medium">
                100% tabiiy efir moylari — organizmni parazitlardan tozalashda
                yuqori samaradorlik va xavfsiz yondashuv. Artemisia (shuvoq)
                kuchi bilan sog'ligingizni tiklang.
              </p>
            </div>

            {/* Xususiyatlar ikonkalari */}
            <div className="flex gap-6 mb-10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-[#C5A358]" size={20} />
                <span className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">
                  Kafolatlangan
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="text-[#C5A358]" size={20} />
                <span className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">
                  Tabiiy tarkib
                </span>
              </div>
            </div>

            {/* Tugmalar guruhi */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#1A1A1A] text-white px-10 py-5 rounded-2xl font-black text-[12px] uppercase tracking-[2px] hover:bg-[#C5A358] shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all active:scale-95 text-center"
              >
                Hoziroq xarid qilish
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white border-2 border-slate-100 text-[#1A1A1A] px-10 py-5 rounded-2xl font-black text-[12px] uppercase tracking-[2px] hover:border-[#C5A358] hover:text-[#C5A358] transition-all active:scale-95 text-center shadow-sm"
              >
                Konsultatsiya
              </button>
            </div>
          </div>

          {/* --- O'NG TOMON: MAHSULOT VIZUALI --- */}
          <div className="w-full md:w-[45%] relative mt-12 md:mt-0 flex justify-center items-center">
            {/* Tabiiy tarkib vizualizatsiyasi */}

            <div className="relative w-full h-[400px] md:h-[550px] flex justify-center items-center">
              {/* Markaziy doira effekti */}
              <div className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-[#C5A358]/10 to-transparent rounded-full blur-3xl animate-pulse" />

              {/* Asosiy rasm */}
              <div className="relative w-full h-full flex justify-center items-center drop-shadow-[0_40px_60px_rgba(197,163,88,0.25)] z-10">
                <Image
                  src="/intro.png"
                  alt="Gemo Plus - Premium Healthcare"
                  width={550}
                  height={550}
                  className="object-contain hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Anatomik/Tibbiy ko'rsatkich vizuali */}

              {/* Premium Quality Badge */}
              <div className="absolute -bottom-4 -left-4 md:-left-8 z-20 bg-white p-5 rounded-[30px] shadow-2xl border border-slate-50 flex items-center gap-4 rotate-3">
                <div className="w-12 h-12 bg-[#C5A358] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#C5A358]/30">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-[#C5A358] uppercase tracking-widest">
                    Sifat nazorati
                  </p>
                  <p className="text-[16px] font-black text-[#1A1A1A] leading-none mt-1 uppercase italic">
                    Premium
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dekorativ pastki gradient chiziq */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C5A358]/30 to-transparent" />

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
