"use client";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import { ShieldCheck, Droplets } from "lucide-react";

const OrderModal = dynamic(() => import("./OrderModal"), { ssr: false });

export default function ParazitOffIntro() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-white mt-[60px] md:mt-[70px]">
      {/* Orqa fondagi yashil gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-50 to-transparent opacity-60 z-0" />

      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center min-h-[450px] md:min-h-[580px] py-8 md:py-14">
          {/* --- CHAP TOMON: MATNLAR --- */}
          <div className="w-full md:w-[55%] flex flex-col items-start text-left">
            <div className="relative mb-4 md:mb-6">
              <div className="flex items-center gap-2 mb-4 bg-green-50 px-3 py-1.5 rounded-full border border-green-100">
                <ShieldCheck className="text-[#004D40]" size={14} />
                <span className="text-[9px] font-black uppercase tracking-[2px] text-[#004D40]">
                  Sertifikatlangan mahsulot
                </span>
              </div>

              <h1 className="text-[42px] md:text-[68px] font-black italic leading-[0.9] tracking-tighter text-[#1A1A1A] uppercase">
                PARAZIT<span className="text-[#8BC34A]">OFF</span>
              </h1>
              <div className="mt-4 space-y-1">
                <h2 className="text-[26px] md:text-[42px] font-extrabold leading-[1.1] text-[#1A1A1A] tracking-tight">
               
                  <span className="text-[#004D40]">
                    organizmning tozaligi ichkaridan boshlanadi
                  </span>{" "}
                  <br />
              
                </h2>
              </div>
            </div>

            <div className="flex items-start gap-2 max-w-[380px] mb-8 border-l-4 border-[#8BC34A] pl-4">
              <p className="text-[#1A1A1A] text-[13px] md:text-[15px] leading-relaxed font-medium opacity-80">
             100% tabiiy efir moylari bu organizmning tabiiy tozalanish jarayonlarini qo‘llab-quvvatlash uchun ishlab chiqilgan oziq-ovqatga qo‘shiladigan biologik faol qo‘shimcha. Faol o‘simlik komponentlari parazitar yuklamani kamaytirishga va organizmning ichki muvozanatini saqlashga yordam beradi.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#004D40] text-white px-8 py-4 rounded-full font-black text-[10px] md:text-[11px] uppercase tracking-widest hover:bg-[#8BC34A] shadow-xl shadow-green-900/20 transition-all active:scale-95 text-center"
              >
                BUYURTMA BERISH
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white border-2 border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 rounded-full font-black text-[10px] md:text-[11px] uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all active:scale-95 text-center"
              >
                KONSULTATSIYA
              </button>
            </div>
          </div>

          {/* --- O'NG TOMON: KOMPOZITSIYA --- */}
          <div className="w-full md:w-[45%] relative mt-10 md:mt-0 flex justify-center items-center">
            <div className="relative w-full h-[350px] md:h-[500px]">
              {/* 1-RASM: intro.png (Orqa fon/Katta rasm) */}
              <div className="w-full h-full bg-green-50/30 rounded-[40px] overflow-hidden relative border border-green-100 shadow-inner z-10">
                <Image
                  src="/intro.png"
                  alt="Background Context"
                  fill
                  className="object-cover opacity-90"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-100/20 to-transparent" />
              </div>

              {/* 2-RASM: intro2.png (Mahsulot/Oldinda - Bottom Left joylashuv) */}
              <div className="absolute -bottom-6 -left-4 md:-left-12 z-30 w-[180px] md:w-[280px] drop-shadow-[0_25px_50px_rgba(0,77,64,0.4)] transition-transform hover:scale-105 duration-500">
                <div className="relative aspect-[0.9/1] rounded-[25px]  border-white overflow-hidden shadow-2xl">
                  <Image
                    src="/intro2.png"
                    alt="ParazitOFF Product"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>

              {/* Badge */}
              <div className="absolute -top-6 -right-2 md:-right-6 z-30 w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#8BC34A] border-[5px] border-white shadow-2xl flex flex-col items-center justify-center text-white rotate-12">
                <span className="text-[9px] md:text-[11px] font-black uppercase tracking-tighter">
                  Faqat
                </span>
                <span className="text-2xl md:text-4xl font-black leading-none my-0.5">
                  100%
                </span>
                <span className="text-[10px] md:text-[12px] font-black uppercase tracking-tighter">
                  TABIIY
                </span>
              </div>

              {/* Mini xususiyat - Bottom Right */}
              <div className="absolute bottom-8 right-4 z-30 bg-white/90 backdrop-blur px-4 py-2 rounded-2xl shadow-lg border border-green-50 flex items-center gap-2">
                <Droplets className="text-[#004D40]" size={16} />
                <span className="text-[10px] font-black text-[#004D40] uppercase">
                  10ml Tomchi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-green-600/10 to-transparent" />
    </section>
  );
}
