"use client";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Activity } from "lucide-react";

const OrderModal = dynamic(() => import("./OrderModal"), { ssr: false });

export default function Articles() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const articles = [
    {
      title: "Metabolizmni 24/7 uyg'otish",
      description:
        "Tana dam olayotganda ham yog'larni eritish siri — metabolik jarayonlarni tabiiy ingredientlar bilan tezlashtirish usullari.",
      imgSrc: "/meto.png",
      category: "Biologiya",
    },
    {
      title: "Ishtahani qanday jilovlash mumkin?",
      description:
        "Doimiy ochlik hissi va shirinlikka bo'lgan ehtiyojni kamaytirishning ilmiy asoslangan 5 ta samarali yo'li.",
      imgSrc: "/ishtaxa.png",
      category: "Maslahat",
    },
    {
      title: "Fatality: So'nggi zarba",
      description:
        "Nega Fatality boshqa ozdiruvchi vositalardan kuchliroq? Bizning maxsus formulamiz va uning tanaga ta'sir mexanizmi.",
      imgSrc: "/zarba.png",
      category: "Mahsulot",
    },
  ];

  return (
    <section id="articles" className="w-full py-5 bg-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* SARLAVHA QISMI - FATALITY USLUBIDA */}
        <div className="mb-20 text-center md:text-left">
          <h2 className="flex flex-col md:flex-row md:items-center text-[36px] md:text-[50px] font-[1000] leading-none tracking-tighter mb-6 uppercase italic">
            <div className="flex items-center select-none justify-center md:justify-start">
              <span className="text-[#000000]">FATA</span>
         
              <span className="text-[#E91E63]">LITY</span>
            </div>

            <span className="text-[#000000] md:ml-8 mt-4 md:mt-0 not-italic font-[1000] text-2xl md:text-[34px] uppercase tracking-tighter">
              BILAN FOYDALI BILIMLAR
            </span>
          </h2>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="h-[4px] w-16 bg-[#E91E63] rounded-full" />
            <p className="text-[#000000]/40 text-[11px] font-[1000] uppercase tracking-[5px] italic">
              Blog va Strategiya
            </p>
          </div>
        </div>

        {/* MAQOLALAR GRIDI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col h-[450px] bg-white rounded-[45px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(233,30,99,0.12)] transition-all duration-700 border border-pink-50"
            >
              {/* Rasm qismi */}
              <div className="relative h-[42%] w-full overflow-hidden">
                <Image
                  src={article.imgSrc}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="bg-[#000000] text-white text-[9px] font-[1000] px-5 py-2.5 rounded-xl uppercase tracking-[3px] shadow-2xl border border-white/10">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Matn qismi */}
              <div className="flex-1 p-10 flex flex-col justify-between bg-gradient-to-b from-white to-pink-50/20">
                <div>
                  <h3 className="text-[#000000] font-[1000] text-[22px] leading-[1.1] uppercase tracking-tighter mb-6 group-hover:text-[#E91E63] transition-colors duration-500 italic">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 text-[14px] leading-relaxed font-bold opacity-90 uppercase text-xs">
                    {article.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* HARAKATGA CHAQIRUV TUGMASI */}
        <div className="flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative h-[70px] px-16 bg-[#000000] text-white rounded-full font-[1000] text-[13px] uppercase tracking-[4px] overflow-hidden transition-all shadow-[0_20px_40px_rgba(233,30,99,0.2)] active:scale-95"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
              SOTIB OLISH VA OZISHNI BOSHLASH
            </span>
            <div className="absolute inset-0 bg-[#E91E63] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </div>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
