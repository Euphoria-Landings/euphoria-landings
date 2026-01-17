"use client";
import Image from "next/image";
import { useState } from "react";
import OrderModal from "./OrderModal";

export default function Articles() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const articles = [
    {
      title: "Qon bosimi va oziqlanish",
      description:
        "Tuz miqdorini kamaytirish va kaliyga boy mahsulotlar orqali arterial bosimni nazorat qilish usullari.",
      imgSrc: "/bosim.png",
      category: "PARHEZ",
    },
    {
      title: "Yurak tomirlarini tozalash",
      description:
        "Xolesterin miqdorini kamaytirish va qon tomirlari elastikligini tiklash bo'yicha mutaxassis tavsiyalari.",
      imgSrc: "/yurakt.png",
      category: "TIBBIYOT",
    },
    {
      title: "Gipertoniya profilaktikasi",
      description:
        "Kundalik stressni boshqarish va to'g'ri dam olish orqali yuqori bosim xavfini 40% ga kamaytirish sirlari.",
      imgSrc: "/giperton.png",
      category: "SOG'LOM HAYOT",
    },
  ];

  return (
    <section id="articles" className="w-full py-5 md:py-20 bg-gray-50/50">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* SARLAVHA */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-[32px] md:text-[42px] font-[1000] italic mb-2 tracking-tighter leading-tight uppercase">
            <span className="text-[#1A1A1A]">ГИПЕР</span>
            <span className="text-[#CC1D24]">ТОФОРТ</span>
            <br />
            <span className="text-[#1A1A1A] not-italic text-xl md:text-3xl font-black">
              MUTAXASSISLAR TAVSIYALARI
            </span>
          </h2>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="h-[1px] w-10 bg-[#CC1D24]" />
            <p className="text-[#CC1D24] text-[10px] font-black uppercase tracking-[4px]">
              Bilim - sog'liq garovi
            </p>
          </div>
        </div>

        {/* MAQOLALAR GRIDI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col h-[350px] bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-red-600/5 transition-all duration-300 border border-gray-100"
            >
              {/* Rasm qismi */}
              <div className="relative h-[40%] w-full">
                <Image
                  src={article.imgSrc}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#CC1D24] text-white text-[8px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest shadow-lg">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Matn qismi */}
              <div className="flex-1 p-6 md:p-8 flex flex-col">
                <h3 className="text-[#1A1A1A] font-black text-[18px] leading-tight uppercase tracking-tight mb-3 group-hover:text-[#CC1D24] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-[11px] font-bold leading-relaxed uppercase tracking-tight">
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
            className="px-12 py-4 bg-[#CC1D24] text-white rounded-full font-[1000] text-[11px] uppercase tracking-[3px] hover:bg-[#1A1A1A] transition-all shadow-xl shadow-red-600/20 active:scale-95"
          >
            SOG'LIQNI TIKLASHNI BOSHLASH
          </button>
        </div>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
