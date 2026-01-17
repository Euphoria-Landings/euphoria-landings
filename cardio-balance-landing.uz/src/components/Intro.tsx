"use client";
import Image from "next/image";
import { useState } from "react";
import OrderModal from "./OrderModal";

export default function Intro() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    // Margin Top sezilarli kamaytirildi (Navbar bilan oradagi bo'shliqni yo'qotish uchun)
    <section className="relative w-full overflow-hidden bg-white mt-[60px] md:mt-[70px]">
      {/* Orqa fondagi qizil gradient to'lqinlari */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50 to-transparent opacity-60 z-0" />

      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        {/* Padding Vertical (py) kamaytirildi */}
        <div className="flex flex-col md:flex-row items-center min-h-[450px] md:min-h-[580px] py-8 md:py-14">
          {/* --- CHAP TOMON: MATNLAR --- */}
          <div className="w-full md:w-[55%] flex flex-col items-start text-left">
            <div className="relative mb-4 md:mb-6">
              <h1 className="text-[42px] md:text-[55px] font-black italic leading-[0.9] tracking-tighter text-[#1A1A1A] drop-shadow-sm">
                CARDIO<span className="text-red-600">BALANCE</span>
              </h1>
              <div className="mt-3 md:mt-4 space-y-1">
                <h2 className="text-[26px] md:text-[42px] font-extrabold leading-[1.1] text-[#1A1A1A] tracking-tight">
                  har kuni yurak va qon tomirlarini qo‘llab-quvvatlash
                </h2>
              </div>
            </div>

            <div className="flex items-start gap-2 max-w-[380px] mb-8 border-l-2 border-red-600 pl-4">
              <p className="text-[#1A1A1A] text-[13px] md:text-[15px] leading-relaxed font-medium">
                Tabiiy komponentlar majmuasi: yurak faoliyatini
                qo'llab-quvvatlash va qon-tomir tizimi elastikligini oshirish
                uchun ilmiy formula.
              </p>
            </div>

            {/* Tugmalar guruhi */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-red-600 text-white px-7 py-3.5 rounded-full font-black text-[10px] md:text-[11px] uppercase tracking-widest hover:bg-[#1A1A1A] shadow-xl shadow-red-500/20 transition-all active:scale-95 text-center whitespace-nowrap min-w-max"
              >
                Hoziroq buyurtma bering
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white border-2 border-[#1A1A1A] text-[#1A1A1A] px-7 py-3.5 rounded-full font-black text-[10px] md:text-[11px] uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all active:scale-95 text-center whitespace-nowrap min-w-max"
              >
                Mutaxassis bilan bog'lanish
              </button>
            </div>
          </div>

          {/* --- O'NG TOMON: KOMPOZITSIYA --- */}
          <div className="w-full md:w-[45%] relative mt-10 md:mt-0 flex justify-center items-center">
            <div className="relative w-full h-[350px] md:h-[500px] z-0">
              {/* Orqa fon rasmi (Juftlik) */}
              <div className="w-full h-full bg-red-50/30 rounded-[40px] overflow-hidden relative border border-red-100 shadow-inner">
                <Image
                  src="/ayol.png"
                  alt="Couple"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Mahsulot qutisi (Box) */}
              <div className="absolute -bottom-6 -left-2 md:-left-12 z-20 w-[200px] md:w-[320px] drop-shadow-[0_20px_40px_rgba(178,34,34,0.3)] transition-transform hover:scale-105 duration-500">
                <div className="relative aspect-[1.3/1] rounded-[20px] border-[5px] border-white overflow-hidden shadow-2xl bg-white">
                  <Image
                    src="/cardioImage.png"
                    alt="SustaFlex Box"
                    fill
                    className="object-cover rounded-[20px]"
                  />
                </div>
              </div>

              {/* Badge (1 Kapsula) */}
              <div className="absolute -top-6 -right-2 md:-right-6 z-30 w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#FF9F43] border-[5px] border-white shadow-2xl flex flex-col items-center justify-center text-white rotate-12">
                <span className="text-[9px] md:text-[11px] font-black uppercase tracking-tighter">
                  Kuniga
                </span>
                <span className="text-3xl md:text-5xl font-black italic leading-none my-0.5 md:my-1">
                  1
                </span>
                <span className="text-[10px] md:text-[12px] font-black uppercase tracking-tighter">
                  Kapsula
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Dekorativ pastki chiziq */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-red-600/10 to-transparent" />
    </section>
  );
}
