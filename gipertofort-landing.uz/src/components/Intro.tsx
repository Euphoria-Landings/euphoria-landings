"use client";
import Image from "next/image";
import { useState } from "react";
import OrderModal from "./OrderModal";

export default function Intro() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-white mt-[60px] md:mt-[80px]">
      {/* Orqa fondagi dekorativ elementlar (ECG uslubida) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#CC1D24]/5 to-transparent opacity-60 z-0" />

      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center min-h-[500px] md:min-h-[600px] py-10 md:py-16">
          {/* --- CHAP TOMON: MATNLAR --- */}
          <div className="w-full md:w-[55%] flex flex-col items-start text-left">
            <div className="relative mb-6">
              <h1 className="text-[40px] md:text-[60px] font-[1000] italic leading-[0.9] tracking-tighter text-[#1A1A1A]">
                ГИПЕР<span className="text-[#CC1D24]">ТОФОРТ</span>
              </h1>
              <div className="mt-4 space-y-2">
                <h2 className="text-[24px] md:text-[30px] font-black leading-[1.1] text-[#1A1A1A] tracking-tight uppercase">
                  yurak va qon tomirlariga har kuni
                  <span className="text-[#CC1D24]"> g‘amxo‘rlik</span>
                </h2>
              </div>
            </div>

            <div className="flex items-start gap-4 max-w-[420px] mb-10 border-l-4 border-[#CC1D24] pl-5 bg-gray-50/50 py-4 pr-4 rounded-r-2xl">
              <p className="text-[#333] text-[9px] md:text-[10px] leading-relaxed font-semibold uppercase tracking-tight">
                yurak va qon tomirlari faoliyatini qo‘llab-quvvatlash uchun
                mo‘ljallangan biologik faol oziq-ovqat qo‘shimchasidir. O‘simlik
                ekstraktlari majmuasi yurak-qon tomir tizimining normal
                funksional holatini saqlashga yordam beradi, qulaylik va
                tananing kundalik yuklamalarga chidamliligini saqlashga yordam
                beradi
              </p>
            </div>

            {/* Tugmalar (Transition: 0.3s) */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#CC1D24] text-white px-10 py-4 rounded-full font-black text-[11px] uppercase tracking-[2px] shadow-xl shadow-red-600/20 hover:bg-[#1A1A1A] transition-all duration-300 active:scale-95 text-center"
              >
                Buyurtma berish
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white border-2 border-[#1A1A1A] text-[#1A1A1A] px-10 py-4 rounded-full font-black text-[11px] uppercase tracking-[2px] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 active:scale-95 text-center"
              >
                Konsultatsiya olish
              </button>
            </div>
          </div>

          {/* --- O'NG TOMON: VIZUAL QISM --- */}
          <div className="w-full md:w-[45%] relative mt-16 md:mt-0 flex justify-center items-center">
            <div className="relative w-full max-w-[450px] aspect-square">
              {/* Yurak foni effekti */}
              <div className="absolute inset-0 bg-[#CC1D24]/5 rounded-full blur-3xl" />

              <div className="relative w-full h-full rounded-[40px] overflow-hidden  border-gray-100 shadow-2xl bg-white flex items-center justify-center p-6">
                <Image
                  src="/intro.png"
                  alt="Gipertofort Benefit"
                  fill
                  className="object-cover  hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Mahsulot qutisi */}
              <div className="absolute -bottom-8 -left-4 md:-left-12 z-20 w-[180px] md:w-[200px] drop-shadow-2xl">
                <div className="relative aspect-[1/1.2] rounded-[24px]  overflow-hidden shadow-2xl  transition-transform duration-300 hover:-rotate-2">
                  <Image
                    src="/intro2.png"
                    alt="Gipertofort Packaging"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Badge */}
              <div className="absolute -top-6 -right-2 md:-right-6 z-30 w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#CC1D24] border-[6px] border-white shadow-2xl flex flex-col items-center justify-center text-white -rotate-12">
                <span className="text-[9px] md:text-[11px] font-black uppercase tracking-tighter opacity-80">
                  Kuniga
                </span>
                <span className="text-3xl md:text-5xl font-[1000] italic leading-none my-0.5 md:my-1">
                  1
                </span>
                <span className="text-[10px] md:text-[12px] font-black uppercase tracking-tighter">
                  MAHAL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dekorativ ECG chizig'i */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#CC1D24]/20 to-transparent" />

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
