"use client";
import Image from "next/image";
import { useState } from "react";
import OrderModal from "./OrderModal";

export default function Intro() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-white mt-[60px] md:mt-[80px]">
      {/* Orqa fondagi dekorativ elementlar (Yumshoq gradient) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#CC1D24]/5 to-transparent opacity-60 z-0" />

      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center min-h-[500px] md:min-h-[600px] py-10 md:py-16">
          {/* --- CHAP TOMON: MATNLAR --- */}
          <div className="w-full md:w-[55%] flex flex-col items-start text-left">
            <div className="relative mb-6">
              {/* LOGO: DI (Qora) + STOP (Qizil) + Ø effekti */}
              <h1 className="text-[45px] md:text-[70px] font-[1000] italic leading-[0.9] tracking-tighter uppercase">
                <span className="text-[#1A1A1A]">DIA</span>
                <span className="text-[#CC1D24]">ST</span>
                <span className="relative inline-block text-[#CC1D24]">
                  O
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2 w-[120%] h-[3px] md:h-[4px] bg-[#ff0000] rotate-[-45deg] rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
                </span>
                <span className="text-[#CC1D24]">P</span>
              </h1>

              <div className="mt-6 space-y-2">
                <h2 className="text-[24px] md:text-[34px] font-black leading-[1.1] text-[#1A1A1A] tracking-tight uppercase italic">
                  Qand miqdorini <br />
                  <span className="text-[#CC1D24]">tabiiy nazorat </span> <br />
                  qilish vaqti!
                </h2>
              </div>
            </div>

            <div className="flex items-start gap-4 max-w-[450px] mb-10 border-l-4 border-[#CC1D24] pl-5 bg-gray-50/50 py-5 pr-4 rounded-r-3xl">
              <p className="text-[#333] text-[13px] md:text-[15px] leading-relaxed font-bold uppercase tracking-tight">
                Uglevod almashinuvi va umumiy metabolik muvozanatni
                qo‘llab-quvvatlash uchun vitamin-o‘simlik kompleksi bilan
               <span className="text-red-600"> biologik faol qo‘shimcha.</span>
              </p>
            </div>

            {/* Tugmalar */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#CC1D24] text-white px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[2px] shadow-2xl shadow-red-600/30 hover:bg-[#1A1A1A] transition-all duration-300 active:scale-95 text-center"
              >
                Chegirmani olish
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white border-2 border-[#1A1A1A] text-[#1A1A1A] px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[2px] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 active:scale-95 text-center"
              >
                Batafsil ma'lumot
              </button>
            </div>
          </div>

          {/* --- O'NG TOMON: VIZUAL QISM --- */}
          <div className="w-full md:w-[45%] relative mt-16 md:mt-0 flex justify-center items-center">
            <div className="relative w-full max-w-[450px] aspect-square">
              {/* Dekorativ aylana */}
              <div className="absolute inset-0 bg-[#CC1D24]/5 rounded-full blur-[100px] animate-pulse" />

              <div className="relative w-full h-full rounded-[50px] overflow-hidden border border-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] bg-white/80 backdrop-blur-sm flex items-center justify-center ">
                {/* Asosiy rasm: Diastop-main.png (Masalan: Tabiiy tarkib yoki natija ko'rsatilgan rasm) */}
                <Image
                  src="/intro.png"
                  alt="Diastop sog'liq"
                  fill
                  className="object-cover  hover:scale-110 transition-transform duration-700 ease-out"
                  priority
                />
              </div>

              {/* Mahsulot qutisi (Siz yuborgan rasmdagi qadoq) */}
              <div className="absolute -bottom-10 -left-6 md:-left-16 z-20 w-[190px] md:w-[200px] drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)]">
                <div className="relative aspect-[1/1.1] rounded-[32px] border-[8px] border-white overflow-hidden shadow-2xl bg-white transition-all duration-500 hover:rotate-2 hover:scale-105">
                  <Image
                    src="/intro2.png"
                    alt="Diastop Packaging"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Badge (Dizayn: Qand miqdori uchun 100% tabiiy) */}
              <div className="absolute -top-8 -right-4 md:-right-8 z-30 w-20 h-20 md:w-25 md:h-25 rounded-full bg-[#1A1A1A] border-[6px] border-[#CC1D24] shadow-2xl flex flex-col items-center justify-center text-white rotate-12">
                <span className="text-[8px] md:text-[12px] font-black uppercase tracking-widest text-[#CC1D24]">
                  Tabiiy
                </span>
                <span className="text-xl md:text-xl font-[1000] italic leading-none my-1">
                  100%
                </span>
                <span className="text-[5px] md:text-[8px] font-bold uppercase tracking-tighter opacity-70">
                  Sertifikatlangan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dekorativ pastki chiziq */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#CC1D24]/30 to-transparent" />

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
