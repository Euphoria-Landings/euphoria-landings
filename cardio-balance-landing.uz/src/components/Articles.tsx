"use client";
import Image from "next/image";
import { useState } from "react";
import OrderModal from "./OrderModal"; // OrderModal faylingiz yo'lini tekshiring

export default function Articles() {
  // Modal holatini boshqarish uchun state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const articles = [
    {
      title: "YURAK muammolarida parhez",
      description:
        "Kasallikning rivojlanishini sekinlashtirish, qon bosimini pasaytirish, xolesterinni normallashtirish va yurak yukini kamaytirishning eng muhim yo'llaridan biri.",
      imgSrc: "/cardioImage.png",
      category: "Oziqlanish",
    },
    {
      title: "Aritmiya nima?",
      description:
        "Yurak juda tez, sekin yoki tartibsiz urishi. Eng keng tarqalgani — atriyal fibrillyatsiya (AF). Bu insult xavfini oshiradi.",
      imgSrc: "/xondro.png",
      category: "Tibbiyot",
    },
    {
      title: "Revmatik yurak kasalligi",
      description:
        "Bu jiddiy, ammo oldini olish mumkin bo'lgan yurak kasalligi bo'lib, o'tkir revmatik isitma (Acute Rheumatic Fever, ARF) natijasida yurak klapanlarining shikastlanishi bilan kechadi. Bu holat ko'pincha bolalar va o'smirlarda (ß",
      imgSrc: "/profilaktika.png",
      category: "Profilaktika",
    },
  ];

  return (
    <section id="articles" className="w-full py-4 bg-[#F9F9F9]">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* SARLAVHA */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-[36px] md:text-[48px] font-black italic mb-3 tracking-tighter leading-none">
            <span className="text-[#1A1A1A]">CARDIO</span>
            <span className="text-red-600">BALANCE</span>
            <br />
            <span className="text-[#1A1A1A] not-italic text-2xl md:text-4xl">
              bilan ko'proq bilib oling
            </span>
          </h2>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="h-[2px] w-12 bg-red-600" />
            <p className="text-red-600 text-[11px] font-bold uppercase tracking-[4px]">
              Foydali maqolalar
            </p>
          </div>
        </div>

        {/* MAQOLALAR GRIDI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col h-[500px] bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 border border-gray-100"
            >
              {/* Rasm qismi (45%) */}
              <div className="relative h-[45%] w-full">
                <Image
                  src={article.imgSrc}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Matn qismi (55%) */}
              <div className="flex-1 p-8 flex flex-col">
                <h3 className="text-[#1A1A1A] font-black text-[20px] leading-tight uppercase tracking-tight mb-4 group-hover:text-red-600 transition-colors">
                  {article.title}
                </h3>

                {/* To'ldiruvchi matn (Description) */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BARCHA MAQOLALAR TUGMASI - Buyurtma modalini ochadi */}
        <div className="flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)} // Bosilganda modalni ochish
            className="px-14 py-4 bg-red-600 text-white rounded-full font-black text-[11px] uppercase tracking-[3px] hover:bg-[#1A1A1A] transition-all shadow-xl shadow-red-500/20 active:scale-95"
          >
            Hoziroq buyurtma berish
          </button>
        </div>
      </div>

      {/* Modal komponenti */}
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
