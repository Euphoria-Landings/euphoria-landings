"use client";
import Image from "next/image";
import { useState } from "react";
import OrderModal from "./OrderModal";

export default function Articles() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const articles = [
    {
      title: "Bo'g'imlar va faol hayot",
      description:
        "Tog'ay to'qimalarini tiklashda to'g'ri jismoniy yuklama va xondroprotektorlarning ahamiyati haqida.",
      imgSrc: "/bogim.png",
      category: "MOBILLIK",
    },
    {
      title: "Kollagen — yoshlik asosi",
      description:
        "Organizmda kollagen sintezini yaxshilash va bo'g'imlardagi g'ichirlashdan xalos bo'lish usullari.",
      imgSrc: "/kollagen.png",
      category: "TARKIB",
    },
    {
      title: "Revmatizm profilaktikasi",
      description:
        "Mavsumiy og'riqlarni oldini olish va suyak tizimini minerallar bilan boyitish bo'yicha mutaxassis maslahatlari.",
      imgSrc: "/revma.png",
      category: "SALOMATLIK",
    },
  ];

  return (
    <section id="articles" className="w-full py-5 md:py-4 bg-gray-50/50">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* SARLAVHA - SEO Optimallashtirilgan */}
        <div className="mb-14 text-center md:text-left">
          <h2 className="text-[34px] md:text-[48px] font-[1000] italic mb-3 tracking-tighter leading-none uppercase">
            <span className="text-[#1A1A1A]">ARTRO</span>
            <span className="text-[#CC1D24]">WELL</span>
            <br />
            <span className="text-[#1A1A1A] not-italic text-2xl md:text-3xl font-black">
              MUTAXASSISLAR MINBARI
            </span>
          </h2>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="h-[2px] w-12 bg-[#CC1D24]" />
            <p className="text-[#CC1D24] text-[11px] font-[1000] uppercase tracking-[5px]">
              Sog'lom harakat sirlari
            </p>
          </div>
        </div>

        {/* MAQOLALAR GRIDI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {articles.map((article, idx) => (
            <article
              key={idx}
              className="group relative flex flex-col h-[400px] bg-white rounded-[40px] overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:shadow-red-600/10 transition-all duration-500 border border-gray-100/50"
            >
              {/* Rasm qismi */}
              <div className="relative h-[45%] w-full overflow-hidden">
                <Image
                  src={article.imgSrc}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute top-5 left-5">
                  <span className="bg-[#CC1D24] text-white text-[9px] font-black px-4 py-2 rounded-xl uppercase tracking-[2px] shadow-lg backdrop-blur-sm bg-opacity-90">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Matn qismi */}
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-[#1A1A1A] font-[1000] text-[18px] md:text-[20px] leading-tight uppercase tracking-tighter mb-4 group-hover:text-[#CC1D24] transition-colors duration-300 italic">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-[12px] font-bold leading-relaxed uppercase tracking-tight opacity-80">
                    {article.description}
                  </p>
                </div>

             
              </div>
            </article>
          ))}
        </div>

        {/* CTA BUTTON - Performance focused */}
        <div className="flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative px-14 py-5 bg-[#CC1D24] text-white rounded-full font-[1000] text-[12px] uppercase tracking-[3px] overflow-hidden shadow-2xl shadow-red-600/30 active:scale-95 transition-all"
          >
            <span className="relative z-10">BUYURTMA BERISH VA TIKLANISH</span>
            <div className="absolute inset-0 bg-[#1A1A1A] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
