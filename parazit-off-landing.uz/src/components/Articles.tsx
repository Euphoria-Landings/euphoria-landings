"use client";
import Image from "next/image";
import { useState } from "react";
import { Leaf } from "lucide-react";
import OrderModal from "./OrderModal";

export default function Articles() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const articles = [
    {
      title: "Organizmni tozalashning 5 belgisi",
      description:
        "Parazitlar organizmdan chiqib ketayotganini qanday bilish mumkin? Terining holati va uyqu sifati yaxshilanishi haqida.",
      imgSrc: "/rasm1.png",
      category: "Detoks",
    },
    {
      title: "Shuvoq (Artemisia) siri",
      description:
        "Nega qadimdan shuvoq o'simligi gelmintlarga qarshi eng kuchli vosita hisoblangan? ParazitOff tarkibidagi 25% kontsentrat kuchi.",
      imgSrc: "/rasm2.png",
      category: "Tarkib",
    },
    {
      title: "Sog'lom ichak - sog'lom hayot",
      description:
        "Ichak mikroflorasini tiklash orqali immunitetni qanday ko'tarish mumkin? Kursdan so'ng parhez bo'yicha maslahatlar.",
      imgSrc: "/rasm3.png",
      category: "Sog'lik",
    },
  ];

  return (
    <section
      id="articles"
      className="w-full py-5 bg-[#FDFDFF] overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-4">
        {/* SARLAVHA QISMI - PARAZITOFF USLUBIDA */}
        <div className="mb-20 text-center md:text-left">
          <h2 className="flex flex-col md:flex-row md:items-center text-[36px] md:text-[50px] font-[1000] leading-none tracking-tighter mb-6">
            <div className="flex items-center select-none justify-center md:justify-start uppercase">
              <span className="text-[#004D40]">Parazit</span>
              <span className="italic text-[#8BC34A] ml-1">OFF</span>
              <div className="flex items-center justify-center ml-3">
                <Leaf
                  className="w-9 h-9 md:w-[54px] md:h-[54px] text-[#8BC34A] transform rotate-[10deg] translate-y-[-2px]"
                  fill="currentColor"
                />
              </div>
            </div>

            <span className="text-[#004D40] md:ml-6 mt-4 md:mt-0 not-italic font-[900] text-2xl md:text-[32px] uppercase tracking-tight">
              BILAN FOYDALI BILIMLAR
            </span>
          </h2>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="h-[3px] w-14 bg-[#8BC34A] rounded-full" />
            <p className="text-[#004D40]/50 text-[12px] font-black uppercase tracking-[4px]">
              Blog va Mutaxassis Maslahatlari
            </p>
          </div>
        </div>

        {/* MAQOLALAR GRIDI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col h-[550px] bg-white rounded-[50px] overflow-hidden shadow-[0_15px_45px_rgba(0,77,64,0.05)] hover:shadow-[0_40px_80px_rgba(139,195,74,0.15)] transition-all duration-700 border border-green-50"
            >
              {/* Rasm qismi (45%) */}
              <div className="relative h-[45%] w-full overflow-hidden">
                <Image
                  src={article.imgSrc}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Category Badge */}
                <div className="absolute top-8 left-8 z-10">
                  <span className="bg-[#004D40] text-[#8BC34A] text-[10px] font-[1000] px-5 py-2.5 rounded-2xl uppercase tracking-[2px] shadow-2xl">
                    {article.category}
                  </span>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
              </div>

              {/* Matn qismi (55%) */}
              <div className="flex-1 p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-[#004D40] font-[1000] text-[24px] leading-[1.1] uppercase tracking-tighter mb-6 group-hover:text-[#8BC34A] transition-colors duration-500">
                    {article.title}
                  </h3>

                  <p className="text-slate-500 text-[15px] leading-relaxed font-bold opacity-80">
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
            className="group relative px-20 py-6 bg-[#004D40] text-white rounded-full font-[1000] text-[13px] uppercase tracking-[4px] overflow-hidden transition-all shadow-2xl shadow-green-900/30 active:scale-95"
          >
            <span className="relative z-10 group-hover:text-[#004D40] transition-colors duration-500">
              BUYURTMA BERISH VA TOZALANISH
            </span>
            {/* Hover Background Layer */}
            <div className="absolute inset-0 bg-[#8BC34A] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </div>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
