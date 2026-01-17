"use client";
import Image from "next/image";
import { useState } from "react";
import OrderModal from "./OrderModal";

export default function Intro() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-white mt-[70px] md:mt-[59px]">
      {/* Dekorativ fon */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#4B2C82]/5 to-transparent opacity-50 z-0" />

      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center min-h-[450px] md:min-h-[580px] py-8 md:py-12">
          {/* --- CHAP TOMON --- */}
          <div className="w-full md:w-[50%] flex flex-col items-start">
            <div className="mb-5">
              {/* Logo - Ixchamroq */}
              <h1 className="text-[40px] md:text-[60px] font-[1000] italic leading-none tracking-[ -0.05em] uppercase">
                <span className="text-[#1A1A1A]">VISU</span>
                <span className="text-[#4B2C82]">CAPS</span>
              </h1>

              <div className="mt-5 space-y-1">
                <h2 className="text-[22px] md:text-[32px] font-black leading-tight text-[#1A1A1A] uppercase italic tracking-tighter">
                  Dunyoni{" "}
                  <span className="text-[#4B2C82]">tiniq va yorqin</span> <br />
                  ko'rish vaqti keldi!
                </h2>
              </div>
            </div>

            {/* Tavsif - Kichik va aniq */}
            <div className="max-w-[420px] mb-8 border-l-2 border-[#4B2C82] pl-5 py-2">
              <p className="text-[#444] text-[11px] md:text-[13px] leading-relaxed font-bold uppercase tracking-wide opacity-90">
                Ko‘rish organlarining normal funksional holatini saqlash uchun
                tabiiy o‘simlik kompleksi qo‘shilgan biologik faol qo‘shimcha.
              </p>
            </div>

            {/* Tugmalar - Ixcham o'lchamda */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#4B2C82] text-white px-8 py-4 rounded-xl font-black text-[9px] uppercase tracking-[2px] shadow-xl shadow-purple-900/20 hover:bg-[#1A1A1A] transition-all active:scale-95"
              >
                Buyurtma berish
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white border border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 rounded-xl font-black text-[9px] uppercase tracking-[2px] hover:bg-gray-50 transition-all active:scale-95"
              >
                Konsultatsiya
              </button>
            </div>
          </div>

          {/* --- O'NG TOMON --- */}
          <div className="w-full md:w-[50%] relative mt-16 md:mt-0 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square">
              <div className="absolute inset-0 bg-[#4B2C82]/5 rounded-full blur-[100px]" />

              <div className="relative w-full h-full rounded-[48px] overflow-hidden border border-gray-100 bg-white/50 backdrop-blur-sm flex items-center justify-center p-4 shadow-sm">
                <Image
                  src="/intro.png"
                  alt="Clarity"
                  fill
                  className="object-cover opacity-90"
                  priority
                />
              </div>

              {/* Box - Ixchamroq */}
              <div className="absolute -bottom-8 -left-2 md:-left-8 z-20 w-[180px] md:w-[280px] bg-white">
                <div className="relative aspect-[1/1.1] rounded-[28px] border-[6px] border-white overflow-hidden shadow-2xl">
                  <Image
                    src="/intro2.png"
                    alt="Product"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Badge - Kichikroq */}
              <div className="absolute -top-6 -right-2 md:-right-6 z-30 w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#1A1A1A] border-4 border-[#4B2C82] shadow-xl flex flex-col items-center justify-center text-white rotate-6">
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#7B52AB]">
                  Premium
                </span>
                <span className="text-2xl md:text-4xl font-[1000] italic leading-none my-0.5">
                  USA
                </span>
                <span className="text-[7px] md:text-[8px] font-bold uppercase opacity-50">
                  Formula
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
