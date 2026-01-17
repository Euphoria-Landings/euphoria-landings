"use client";
import Image from "next/image";
import { useState } from "react";
import OrderModal from "./OrderModal";
import { BookOpen, ArrowRight } from "lucide-react";

export default function Articles() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const articles = [
    {
      title: "Erkaklar salomatligi va ovqatlanish",
      description:
        "Rux (Zinc) va Selen moddalarining erkaklik quvvatini saqlashdagi o'rni hamda tabiiy manbalar.",
      imgSrc: "/salomatlik.png",
      category: "Oziqlanish",
    },
    {
      title: "Prostatitning oldini olish",
      description:
        "Zamonaviy tibbiyotda o'simlik ekstraktlarining yallig'lanishga qarshi samaradorligi haqida tahlil.",
      imgSrc: "/sos.png",
      category: "Tibbiyot",
    },
    {
      title: "Faol hayot va uzoq umr",
      description:
        "Kichik tos a'zolarida qon aylanishini yaxshilash orqali hayot sifatini oshirish usullari.",
      imgSrc: "/tarz.png",
      category: "Turmush tarzi",
    },
  ];

  return (
    <section id="articles" className="w-full py-4 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* SARLAVHA */}
        <div className="mb-16 flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-50 rounded-lg">
              <BookOpen className="text-[#E31E24]" size={20} />
            </div>
            <span className="text-[#E31E24] text-[10px] font-black uppercase tracking-[4px]">
              Ekspert maslahatlari
            </span>
          </div>
          <h2 className="text-[36px] md:text-[52px] font-[1000] italic mb-3 tracking-tighter leading-none text-center md:text-left uppercase">
            <span className="text-[#1A2B3C]">URO</span>
            <span className="text-[#E31E24]">PRO</span>
            <br />
            <span className="text-slate-300 not-italic text-2xl md:text-3xl">
              bilan sog'lom kelajak
            </span>
          </h2>
        </div>

        {/* MAQOLALAR GRIDI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col h-[400px] bg-white rounded-[45px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 border border-slate-100 hover:border-[#E31E24]/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              {/* Rasm qismi */}
              <div className="relative h-[45%] w-full overflow-hidden">
                <Image
                  src={article.imgSrc}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 z-10">
                  <span className="bg-[#E31E24] text-white text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-[2px] shadow-xl">
                    {article.category}
                  </span>
                </div>
                {/* Oq fonga mos gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
              </div>

              {/* Matn qismi */}
              <div className="flex-1 p-8 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-[#1A2B3C] font-[1000] text-[20px] leading-tight uppercase tracking-tighter mb-4 group-hover:text-[#E31E24] transition-colors italic">
                    {article.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {article.description}
                  </p>
                </div>

               
              </div>
            </div>
          ))}
        </div>

        {/* TUGMA */}
        <div className="flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-12 py-5 bg-[#E31E24] text-white rounded-full font-black text-[12px] uppercase tracking-[3px] hover:bg-[#1A2B3C] transition-all shadow-[0_20px_40px_rgba(227,30,36,0.2)] active:scale-95"
          >
            Hoziroq buyurtma berish
          </button>
        </div>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
