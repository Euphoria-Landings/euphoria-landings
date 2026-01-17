"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "Artrowell bo‘g‘imlarni davolaydimi?",
    answer: "Yo‘q. Artrowell - bo‘g‘imlarni qo‘llab-quvvatlash uchun mo‘ljallangan biologik faol qo‘shimcha. U tayanch-harakat tizimi salomatligini saqlashga yordam beradi.",
  },
  {
    question: "Artrowell’ni doimiy qabul qilish mumkinmi?",
    answer: "Maksimal natija uchun tanaffusli kurs usuli tavsiya etiladi. Odatda kurslar organizmning holatiga qarab belgilanishi kerak.",
  },
  {
    question: "Artrowell faol turmush tarziga ega odamlarga mos keladimi?",
    answer: "Ha, mahsulot muntazam jismoniy mashqlar paytida bo‘g‘imlarni qo‘llab-quvvatlash uchun mos keladi va zo'riqishlarning oldini olishga ko'maklashadi.",
  },
  {
    question: "Tarkibi tabiiymi?",
    answer: "Ha, mahsulot 100% tabiiy o'simlik ekstraktlari va minerallar majmuasidan tashkil topgan bo'lib, gormonlar saqlamaydi.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // ARTROWELL BRAND RANGLARI
  const primaryColor = "#8B0000"; // Urg'u uchun to'q qizil
  const textColor = "#1A1A1A";    // Asosiy matn uchun qora

  return (
    <section className="w-full py-12 bg-white" id="faq">
      <div className="max-w-[700px] mx-auto px-4">
        
        {/* Sarlavha - Oq fonda qora va qizil matn */}
        <div className="mb-10 flex items-center gap-3 border-b-2 pb-4" style={{ borderColor: primaryColor }}>
          <HelpCircle size={28} style={{ color: primaryColor }} />
          <h2 className="text-2xl md:text-3xl font-[1000] italic uppercase tracking-tighter text-black">
            TEZ TEZ BERILADIGAN <span style={{ color: primaryColor }}>SAVOLLAR</span>
          </h2>
        </div>

        {/* Akkordeon */}
        <div className="divide-y divide-gray-100">
          {faqData.map((item, index) => (
            <div key={index} className="py-2">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-4 text-left group outline-none"
              >
                <span className={`text-[15px] md:text-[17px] font-bold uppercase tracking-tight transition-colors ${openIndex === index ? 'text-red-800' : 'text-gray-800'}`}>
                  {index + 1}. {item.question}
                </span>
                <ChevronDown 
                  size={20} 
                  className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  style={{ color: openIndex === index ? primaryColor : "#cbd5e1" }}
                />
              </button>

              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-5 pr-6">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed border-l-4 pl-4 font-medium italic uppercase" style={{ borderColor: primaryColor }}>
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

    

      </div>
    </section>
  );
}