"use client";
import Image from "next/image";
import { useState } from "react";
import OrderModal from "./OrderModal";

export default function Articles() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const articles = [
    {
      title: " ko'z himoyasi",
      description:
        "Raqamli ekranlarning ko'k nuridan himoyalanish va to'r parda salomatligini saqlash usullari.",
      imgSrc: "/luten.png",
      category: "HIMOYA",
    },
    {
      title: "Tungi ko'rishni yaxshilash",
      description:
        "Gidratatsiya va to'g'ri vitaminlar majmuasi orqali qorong'uda ko'rish o'tkirligini tiklash.",
      imgSrc: "/tun.png",
      category: "TIKLASH",
    },
    {
      title: "Ko'z charchog'ini olish",
      description:
        "Kunlik ish faoliyatida ko'z mushaklarini bo'shashtirish va qon aylanishini yaxshilash sirlari.",
      imgSrc: "/charchoq.png",
      category: "SOG'LOM HAYOT",
    },
  ];

  return (
    <section
      id="articles"
      className="w-full py-6 md:py-8 bg-gray-50/30 overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-4">
        {/* SARLAVHA - VISUCAPS Ixcham Style */}
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-[24px] md:text-[36px] font-[1000] italic mb-2 tracking-tighter leading-none uppercase flex flex-wrap items-center justify-center md:justify-start gap-x-2">
            <span className="text-[#1A1A1A]">VISU</span>
            <span className="text-[#4B2C82]">CAPS</span>
            <span className="text-[#1A1A1A] not-italic text-lg md:text-xl font-[900] ml-1">
              MUTAXASSISLAR TAVSIYALARI
            </span>
          </h2>
          <div className="flex items-center gap-2 justify-center md:justify-start opacity-70">
            <div className="h-[1.5px] w-6 bg-[#4B2C82]" />
            <p className="text-[#4B2C82] text-[8px] font-black uppercase tracking-[3px]">
              Tiniqlik garovi
            </p>
          </div>
        </div>

        {/* MAQOLALAR GRIDI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-10">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col h-[280px] md:h-[300px] bg-white rounded-[24px] overflow-hidden shadow-sm border border-gray-50 hover:shadow-lg transition-all duration-500"
            >
              {/* Rasm qismi */}
              <div className="relative h-[42%] w-full bg-gray-50">
                <Image
                  src={article.imgSrc}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="bg-[#1A1A1A] text-white text-[6px] md:text-[7px] font-black px-2 py-1 rounded-md uppercase tracking-widest">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Matn qismi */}
              <div className="flex-1 p-4 md:p-5 flex flex-col justify-center">
                <h3 className="text-[#1A1A1A] font-[900] text-[13px] md:text-[14px] leading-tight uppercase tracking-tight mb-2 group-hover:text-[#4B2C82] transition-colors italic">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-[8px] md:text-[9.5px] font-bold leading-snug uppercase tracking-tight opacity-90">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA BUTTON - Ixchamroq */}
        <div className="flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3.5 bg-[#4B2C82] text-white rounded-xl font-[1000] text-[9px] uppercase tracking-[2px] hover:bg-[#1A1A1A] transition-all shadow-lg shadow-purple-900/10 active:scale-95"
          >
            KO'RISHNI TIKLASHNI BOSHLASH
          </button>
        </div>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
