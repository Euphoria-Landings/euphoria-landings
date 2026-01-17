"use client";
import Image from "next/image";
import { useState } from "react";
import OrderModal from "./OrderModal";

export default function Articles() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const articles = [
    {
      title: "Qand va to'g'ri parhez",
      description:
        "Glyukemik indeksi past mahsulotlar yordamida qondagi qand miqdorini tabiiy nazorat qilish usullari.",
      imgSrc: "/qand.png",
      category: "PARHEZ",
    },
    {
      title: "Oshqozon osti bezi",
      description:
        "Insulin ishlab chiqarishni yaxshilash va organ faoliyatini tiklash bo'yicha mutaxassis tavsiyalari.",
      imgSrc: "/oshqozon.png",
      category: "TIBBIYOT",
    },
    {
      title: "Diabet profilaktikasi",
      description:
        "Kundalik faollik va to'g'ri ozuqa majmualari orqali asoratlar xavfini 50% ga kamaytirish sirlari.",
      imgSrc: "/diabet.png",
      category: "SOG'LOM HAYOT",
    },
  ];

  return (
    <section
      id="articles"
      className="w-full py-4 md:py-4 bg-gray-50/50 overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-4">
        {/* SARLAVHA - DIASTØP Custom Style */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-[28px] md:text-[40px] font-[1000] italic mb-3 tracking-tighter leading-tight uppercase flex flex-wrap items-center justify-center md:justify-start gap-x-3">
            <span className="flex items-center">
              <span className="text-[#1A1A1A]">DIA</span>
              <span className="text-[#CC1D24]">ST</span>
              <span className="relative inline-block text-[#CC1D24]">
                O
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[2px] md:h-[3px] bg-[#a70808] rotate-[-45deg] rounded-full"></span>
              </span>
              <span className="text-[#CC1D24]">P</span>
            </span>
            <span className="text-[#1A1A1A] not-italic text-lg md:text-2xl font-black">
              MUTAXASSISLAR TAVSIYALARI
            </span>
          </h2>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="h-[1px] w-8 bg-[#CC1D24]" />
            <p className="text-[#CC1D24] text-[9px] font-black uppercase tracking-[3px]">
              Bilim - sog'liq garovi
            </p>
          </div>
        </div>

        {/* MAQOLALAR GRIDI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-12">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col h-[320px] bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-red-600/5 transition-all duration-500 border border-gray-100"
            >
              {/* Rasm qismi */}
              <div className="relative h-[45%] w-full bg-gray-100">
                <Image
                  src={article.imgSrc}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#1A1A1A] text-white text-[7px] font-black px-2.5 py-1.5 rounded-lg uppercase tracking-widest shadow-lg">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Matn qismi */}
              <div className="flex-1 p-5 md:p-6 flex flex-col">
                <h3 className="text-[#1A1A1A] font-black text-[15px] leading-tight uppercase tracking-tight mb-2 group-hover:text-[#CC1D24] transition-colors italic">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-[9px] md:text-[10px] font-bold leading-relaxed uppercase tracking-tight opacity-80">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-10 py-4 bg-[#CC1D24] text-white rounded-2xl font-[1000] text-[10px] uppercase tracking-[2px] hover:bg-[#1A1A1A] transition-all shadow-xl shadow-red-600/10 active:scale-95"
          >
            SOG'LIQNI TIKLASHNI BOSHLASH
          </button>
        </div>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
