"use client";
import Image from "next/image";
import { useState } from "react";
import OrderModal from "./OrderModal";

export default function Articles() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const articles = [
    {
      title: "Organizmni tozalashning 5 belgisi",
      description:
        "Parazitlar organizmdan chiqib ketayotganini qanday bilish mumkin? Terining holati va uyqu sifati yaxshilanishi haqida.",
      imgSrc: "/paper.png",
      category: "Parvarish",
    },
    {
      title: "Shuvoq (Artemisia) siri",
      description:
        "Nega qadimdan shuvoq o'simligi gelmintlarga qarshi eng kuchli vosita hisoblangan? ParazitOff tarkibidagi 25% kontsentrat kuchi.",
      imgSrc: "/tomchi.png",
      category: "Tarkib",
    },
    {
      title: "Sog'lom ichak - sog'lom hayot",
      description:
        "Ichak mikroflorasini tiklash orqali immunitetni qanday ko'tarish mumkin? Kursdan so'ng parhez bo'yicha maslahatlar.",
      imgSrc: "/soglom.png",
      category: "Salomatlik",
    },
  ];

  return (
    <section id="articles" className="w-full py-6 bg-[#FDFDFD]">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* SARLAVHA */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-[36px] md:text-[48px] font-[1000] italic mb-3 tracking-tighter leading-none uppercase">
            <span className="text-[#1A1A1A]">GEMO</span>
            <span className="text-[#C5A358]"> PLUS</span>
            <br />
            <span className="text-[#1A1A1A] not-italic text-2xl md:text-4xl">
              bilan qulaylikni his qiling
            </span>
          </h2>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="h-[3px] w-14 bg-[#C5A358]" />
            <p className="text-[#C5A358] text-[10px] md:text-[11px] font-black uppercase tracking-[4px]">
              Foydali tavsiyalar
            </p>
          </div>
        </div>

        {/* MAQOLALAR GRIDI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col h-[380px] bg-white rounded-[45px] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#C5A358]/10 transition-all duration-300 border border-gray-100"
            >
              {/* Rasm qismi */}
              <div className="relative h-[45%] w-full bg-gray-50">
                <Image
                  src={article.imgSrc}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-[#1A1A1A] text-white text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-[#C5A358]/30">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Matn qismi */}
              <div className="flex-1 p-8 flex flex-col justify-center">
                <h3 className="text-[#1A1A1A] font-black text-[16px] leading-tight uppercase tracking-tight mb-4 group-hover:text-[#C5A358] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-[13px] font-bold leading-relaxed mb-4">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* TUGMA */}
        <div className="flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-16 py-4 bg-[#1A1A1A] text-white rounded-full font-black text-[11px] uppercase tracking-[3px] hover:bg-[#C5A358] transition-all shadow-xl shadow-gray-900/10 active:scale-95 border-b-4 border-[#C5A358]/50"
          >
            BEPUL KONSULTATSIYA OLISH
          </button>
        </div>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
