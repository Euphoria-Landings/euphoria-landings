"use client";
import { motion } from "framer-motion";

export default function Purchase() {
  const cards = [
    {
      title: "KOMPLEKS HARAKAT",
      desc: "Kalsiy va magniy suyaklar uchun juda muhim, chunki ular suyak to'qimasining asosiy qismini tashkil etadi, suyak zichligini oshiradi, mineralizatsiyani ta'minlaydi va ularning mustahkamligi, egiluvchanligini nazorat qiladi.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-12 h-12 text-[#1A1A1A]"
        >
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="4" r="2" fill="currentColor" />
          <circle cx="12" cy="20" r="2" fill="currentColor" />
          <circle cx="4" cy="12" r="2" fill="currentColor" />
          <circle cx="20" cy="12" r="2" fill="currentColor" />
          <path
            d="M12 6V9M12 15V18M6 12H9M15 12H18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Kalsiyning suyaklarga ta'siri",
      desc: "Suyak va tishlar mustahkamligini ta'minlaydi. Suyak to'qimasini mustahkam qiluvchi mineral tarkibni shakllantiradi. ",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-12 h-12 text-[#1A1A1A]"
        >
          <path
            d="M12 4V20M4 12H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8 8L16 16M16 8L8 16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </svg>
      ),
    },
    {
      title: "TABIIY FORMULA",
      desc: "Xaftaga to'qimasining tabiiy komponentlarini o'z ichiga oladi. Magniy D vitamini metabolizmini boshqarish orqali kalsiy almashinuviga yordam beradi.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-12 h-12 text-[#1A1A1A]"
        >
          <path
            d="M12 2L4 7V17L12 22L20 17V7L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22V12M12 12L20 7M12 12L4 7"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full py-2 bg-gradient-to-b from-white via-[#F8F9FA] to-[#E9ECEF] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        {/* TEPA QISMDAGI 3 TA KARTA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
           
              className="bg-white/80 backdrop-blur-md rounded-[40px] p-10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-white hover:border-gray-200 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-500 group"
            >
              <div className="mb-8 transform group-hover:rotate-[10deg] transition-transform duration-500">
                {card.icon}
              </div>
              <h3 className="text-[#1A1A1A] font-black text-[13px] mb-4 tracking-[2px] uppercase">
                {card.title}
              </h3>
              <p className="text-[#1A1A1A]/60 text-[13px] leading-relaxed font-bold">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* LOGO QISMI */}
        <motion.div
       
          className="flex flex-col items-center text-center space-y-6 mb-16"
        >
          <h2 className="text-[50px] md:text-[80px] font-black italic tracking-tighter leading-none">
            <span className="text-[#1A1A1A]">Суста</span>
            <span className="text-red-600">Флекс</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
          <p className="text-[#1A1A1A]/50 font-black tracking-[6px] uppercase text-[11px]">
            Harakat erkinligi formulasi
          </p>
        </motion.div>

        {/* O'YNAB TURUVCHI TABLETKALAR */}
        <div className="relative h-24 flex justify-center items-center gap-12">
          {[
            {
              color: "bg-gray-300",
              size: "w-10 h-5",
              delay: 0,
              rotate: "rotate-45",
            },
            {
              color: "bg-white",
              size: "w-12 h-6",
              delay: 0.5,
              rotate: "-rotate-12",
            },
            {
              color: "bg-gray-200",
              size: "w-10 h-5",
              delay: 1,
              rotate: "rotate-[60deg]",
            },
          ].map((pill, i) => (
            <motion.div
              key={i}
     
          
              className={`${pill.size} ${pill.color} rounded-full shadow-lg border border-white/50 ${pill.rotate}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-white rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-gray-200 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}
